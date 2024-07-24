import { useState, useEffect } from 'react';
import { getProjects } from '@/lib/api/projects';

export const useProjects = (limit = 5) => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [canFetchMore, setFetchMore] = useState(true);

  const fetchProject = async () => {
    try {
      const { projs, len } = await getProjects(page, limit);
      if (!projs) {
        setFetchMore(false);
        return;
      }
      if (projs) {
        const uniqueProjects = [...new Set([...projects, ...projs])];
        setProjects([...uniqueProjects]);
      }
      setFetchMore(len === limit);
    } catch (error) {
      console.error('Error fetching Projects:', error);
    }
  };

  useEffect(() => {
    fetchProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLoadMore = () => {
    if (canFetchMore) {
      setPage((prev) => prev + 1);
    }
  };

  return { projects, canFetchMore, handleLoadMore };
};
