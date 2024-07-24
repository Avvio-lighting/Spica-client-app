import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getCategories } from '@/lib/api/products';

export const useSidebar = (locale) => {
  const [categories, setCategories] = useState([]);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(1);
  const [canFetchMore, setFetchMore] = useState(true);
  const limit = 30;
  const containerRef = useRef(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setSmallScreen(width < 768);
  }, [width]);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const fetchCategories = async () => {
    try {
      const cats = await getCategories(page, limit);
      if (cats.length === 0) {
        setFetchMore(false);
        return;
      }
      setCategories((prev) => {
        const categoryMap = new Map();
        prev.forEach((cat) => categoryMap.set(cat.text['en'], cat));
        cats.forEach((cat) => categoryMap.set(cat.text['en'], cat));
        return Array.from(categoryMap.values());
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    if (canFetchMore) {
      fetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, params.slug, page, canFetchMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const atBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        const isScrollable = container.scrollHeight > container.clientHeight;
        if ((atBottom || !isScrollable) && canFetchMore) {
          setPage((prev) => prev + 1);
        }
      }
    };

    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener('scroll', handleScroll);
    }

    handleScroll();

    const container = containerRef.current;
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [canFetchMore, categories.length]);

  return { isSmallScreen, containerRef, params, categories, router };
};
