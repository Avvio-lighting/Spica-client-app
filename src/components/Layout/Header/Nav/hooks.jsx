import { useEffect, useState } from 'react';
import { getCategories } from '@/lib/api/products';
import { disableScroll, enableScroll } from '@/util/scrollLock';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const cats = await getCategories(1, 6);
    cats.sort((a, b) => a.text['en'].localeCompare(b.text['en']));
    setCategories(cats);
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return categories;
};

export const useMobileNav = () => {
  const [open, setOpen] = useState(false);
  const closeNav = () => {
    setOpen(false);
    enableScroll();
  };
  const openNav = () => {
    setOpen(true);
    disableScroll();
  };
  const negateNav = () => {
    setOpen((prev) => !prev);
    if (open) {
      enableScroll();
    } else {
      disableScroll();
    }
  };
  return { open, closeNav, openNav, negateNav };
};
