import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/lib/constants';
import { getProjects } from '@/lib/api/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    try {
      const { projs } = await getProjects(1, 6);
      if (projs) {
        setProjects(projs);
      }
    } catch (error) {
      console.error('Error fetching projects in home page');
    }
  }

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return projects;
};

export const useActiveProject = (projects) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      setActiveImage(
        projects[0].mainImage
          ? API_BASE_URL + projects[0].mainImage
          : '/landing/solar-cell-1.png'
      );
    }
  }, [projects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [projects.length]);

  useEffect(() => {
    if (projects.length > 0) {
      setActiveImage(
        projects[activeIndex].mainImage
          ? API_BASE_URL + projects[activeIndex].mainImage
          : '/landing/solar-cell-1.png'
      );
    }
  }, [activeIndex, projects]);

  return { activeIndex, setActiveIndex, activeImage };
};
