import { useEffect, useState } from 'react';
import { search as searchProducts } from '@/lib/api/products';
import { search as searchProjects } from '@/lib/api/projects';
import { search as searchBlogs } from '@/lib/api/blogs';

export const useSearch = (query) => {
  const [shown, setShown] = useState(1);
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [productsPage, setProductsPage] = useState(1);
  const [canFetchMoreProducts, setFetchMoreProducts] = useState(true);
  const [projectsPage, setProjectsPage] = useState(1);
  const [canFetchMoreProjects, setFetchMoreProjects] = useState(true);
  const [blogsPage, setBlogsPage] = useState(1);
  const [canFetchMoreBlogs, setFetchMoreBlogs] = useState(true);
  const limit = 20;

  const fetchProducts = async () => {
    if (shown === 1 || shown === 2) {
      try {
        const { prods, len } = await searchProducts(productsPage, limit, query);
        if (prods && len > 0) {
          setProducts((prev) => {
            const existingIds = new Set(prev.map((item) => item._id));
            const newProducts = prods.filter(
              (item) => !existingIds.has(item._id)
            );
            return [...prev, ...newProducts];
          });
        }
        setFetchMoreProducts(len === limit);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };

  const fetchProjects = async () => {
    if (shown === 1 || shown === 3) {
      try {
        const { projs, len } = await searchProjects(projectsPage, limit, query);
        if (projs && len > 0) {
          setProjects((prev) => {
            const existingIds = new Set(prev.map((item) => item._id));
            const newProjects = projs.filter(
              (item) => !existingIds.has(item._id)
            );
            return [...prev, ...newProjects];
          });
        }
        setFetchMoreProjects(len === limit);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
  };

  const fetchBlogs = async () => {
    if (shown === 1 || shown === 4) {
      try {
        const { blogs, len } = await searchBlogs(blogsPage, limit, query);
        if (blogs && len > 0) {
          setBlogs((prev) => {
            const existingIds = new Set(prev.map((item) => item._id));
            const newBlogs = blogs.filter((item) => !existingIds.has(item._id));
            return [...prev, ...newBlogs];
          });
        }
        setFetchMoreBlogs(len === limit);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchProjects();
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    query,
    shown,
    productsPage,
    projectsPage,
    blogsPage,
    canFetchMoreBlogs,
    canFetchMoreProducts,
    canFetchMoreProjects,
  ]);

  useEffect(() => {
    setBlogs([]);
    setProducts([]);
    setProjects([]);
  }, [query]);

  return {
    shown,
    setShown,
    canFetchMoreProducts,
    canFetchMoreProjects,
    canFetchMoreBlogs,
    products,
    projects,
    blogs,
    setProductsPage,
    setProjectsPage,
    setBlogsPage,
  };
};
