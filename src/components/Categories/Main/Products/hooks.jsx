import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api/products';

export const useProducts = (locale, category) => {
  const [view, setView] = useState(2);
  const [width, setWidth] = useState(window.innerWidth);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [products, setProducts] = useState([]);
  const [canFetchMore, setFetchMore] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [sort, setSort] = useState('name');

  useEffect(() => {
    if (width >= 768) {
      setView(2);
      setSmallScreen(false);
    } else {
      setView(1);
      setSmallScreen(true);
    }
  }, [width]);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  async function fetchData() {
    try {
      const { prods, len } = await getProducts(page, limit, category, sort);
      if (!prods) {
        setFetchMore(false);
        return;
      }
      setProducts((prevProducts) => {
        const productIds = new Set(prevProducts.map((product) => product._id));
        const uniqueProducts = prods.filter(
          (product) => !productIds.has(product._id)
        );
        return [...prevProducts, ...uniqueProducts];
      });
      setFetchMore(len === limit);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, page]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setFetchMore(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const handleLoadMore = () => {
    if (canFetchMore) {
      setPage((prev) => prev + 1);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return {
    isSmallScreen,
    view,
    setView,
    products,
    canFetchMore,
    handleLoadMore,
    sort,
    handleSort,
  };
};
