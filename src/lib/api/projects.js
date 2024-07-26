import { API_BASE_URL } from '../constants';
export async function getProjects(page, limit) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/projects?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok && response.status === 404) {
      return { projs: null, len: 0 };
    } else if (!response.ok) {
      throw new Error(
        'Error Fetching products at lib/api/projects/getProjects'
      );
    }
    const projects = await response.json();
    return { projs: projects.docs, len: projects.length };
  } catch (err) {
    throw err;
  }
}
export async function getProject(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error Fetching products at lib/api/projects/getProject');
    }
    const project = await response.json();
    return project.data;
  } catch (err) {
    throw err;
  }
}

export async function search(page, limit, search) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/projects?page=${page}&limit=${limit}&search=${search}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok && response.status === 404) {
      return { projs: null, len: 0 };
    } else if (!response.ok) {
      throw new Error('Error Fetching projects at lib/api/projects/search');
    }

    const projects = await response.json();
    return { projs: projects.docs, len: projects.length };
  } catch (err) {
    throw err;
  }
}
