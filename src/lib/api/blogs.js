import { API_BASE_URL } from '../constants';

export async function getBlogs(page, limit) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/blogs?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok && response.status === 404) {
      return { blogs: null, len: 0 };
    } else if (!response.ok) {
      throw new Error('Error Fetching blogs at lib/api/blogs/search');
    }

    const blogs = await response.json();
    return { blogs: blogs.docs, len: blogs.length };
  } catch (err) {
    throw err;
  }
}
export async function getRandomBlogs() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/blogs/random/4`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok && response.status === 404) {
      return { blogs: null, len: 0 };
    } else if (!response.ok) {
      throw new Error('Error Fetching blogs at lib/api/blogs/getRandomBlogs');
    }

    const blogs = await response.json();
    return { blogs: blogs.randomDocs, len: blogs.length };
  } catch (err) {
    throw err;
  }
}

export async function getBlog(id) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/blogs/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {
        cache: 'no-store',
      }
    );
    if (!response.ok) {
      throw new Error('Error Fetching blog at lib/api/products/getBlog');
    }
    const blog = await response.json();
    return blog.data;
  } catch (err) {
    throw err;
  }
}

export async function search(page, limit, search) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/blogs?page=${page}&limit=${limit}&search=${search}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok && response.status === 404) {
      return { blogs: null, len: 0 };
    } else if (!response.ok) {
      throw new Error('Error Fetching blogs at lib/api/blogs/search');
    }

    const blogs = await response.json();
    return { blogs: blogs.docs, len: blogs.length };
  } catch (err) {
    throw err;
  }
}
