import { useState, useEffect } from 'react';
import { getBlogs } from '@/lib/api/blogs';

export const useBlogs = (locale) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [canFetchMore, setFetchMore] = useState(true);
  const limit = 20;

  async function fetchData() {
    try {
      const { blogs: bgs, len } = await getBlogs(page, limit);
      if (!bgs) {
        setFetchMore(false);
        return;
      }
      setBlogs((prevBlogs) => {
        const blogIds = new Set(prevBlogs.map((blog) => blog._id));
        const uniqueBlogs = bgs.filter((blog) => !blogIds.has(blog._id));
        return [...prevBlogs, ...uniqueBlogs];
      });
      setFetchMore(len === limit);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, page]);

  const handleClick = () => {
    if (canFetchMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { blogs, canFetchMore, handleClick };
};
