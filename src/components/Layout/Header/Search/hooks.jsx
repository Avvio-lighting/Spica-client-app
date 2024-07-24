import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { search } from '@/lib/api/products';
import { useRouter } from 'next/navigation';

// Debounce function
const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const useSearchButton = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const negateSearchModal = () => setOpen((prev) => !prev);
  const closeSearchModal = () => setOpen((prev) => !prev);

  return { open, negateSearchModal, closeSearchModal };
};

export const useSearchModal = (onClose) => {
  const router = useRouter();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleChange = debounce(async (event) => {
    const query = event.target.value;
    if (query === '') {
      setProducts(null);
      setSearchQuery(null);
    } else {
      setLoading(true);
      const { prods, len } = await search(1, 20, query);
      setLoading(false);
      if (prods && len > 0) {
        setProducts([...prods]);
        setSearchQuery(query);
      } else {
        setProducts([]);
        setSearchQuery(query);
      }
    }
  }, 1000); // 500ms delay

  const inputRef = useRef(null);
  const divRef = useRef(null);

  const handleClick = (event) => {
    if (
      event.target !== inputRef.current &&
      event.target !== divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
      onClose();
    }
  };

  useEffect(() => {}, [products]);

  return {
    handleChange,
    inputRef,
    divRef,
    handleClick,
    products,
    loading,
    handleSubmit,
  };
};
