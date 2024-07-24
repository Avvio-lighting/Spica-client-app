import { API_BASE_URL } from '../constants';
export async function getProducts(page, limit, category = null, sort = null) {
  let query = category
    ? `page=${page}&limit=${limit}&search=${category}`
    : `page=${page}&limit=${limit}`;
  query += sort ? `&sort=${sort}` : ``;

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 404) {
      return { prods: null, len: 0 };
    } else if (!response.ok && response.status !== 404) {
      throw new Error('Error Fetching products at lib/api/products/getProduct');
    }

    const products = await response.json();
    return { prods: products.docs, len: products.length };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getRandomProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/random/8`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(
        'Error Fetching products at lib/api/products/getRandomProducts'
      );
    }
    const products = await response.json();
    return { prods: products.randomDocs, len: products.randomDocs.length };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getCategories(page, limit) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/products/categories?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        'Error Fetching products at lib/api/products/getCategories'
      );
    }
    const products = await response.json();
    return products.categories;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getProduct(id) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/products/${id}`,
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
      throw new Error('Error Fetching product at lib/api/products/getProduct');
    }
    const products = await response.json();
    return products.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function search(page, limit, search) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/products?page=${page}&limit=${limit}&search=${search}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok && response.status === 404) {
      return { prods: null, len: 0 };
    } else if (!response.ok) {
      throw new Error('Error Fetching products at lib/api/products/search');
    }

    const products = await response.json();
    return { prods: products.docs, len: products.length };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
