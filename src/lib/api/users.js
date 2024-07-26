import { API_BASE_URL } from '../constants';
export async function requestOtp(body) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/request-otp`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error requesting otp at lib/api/users/requestOtp');
    }
    const res = await response.json();
    return res.token;
  } catch (err) {
    throw err;
  }
}

export async function contactForm(body) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/contactForm`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const res = await response.json();
      throw new Error(res.message);
    }
    return;
  } catch (err) {
    throw err;
  }
}

export async function dataSheet(body) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/dataSheet`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const res = await response.json();
      throw new Error(res.message);
    }
    return;
  } catch (err) {
    throw err;
  }
}

export async function subscribe(body) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/subscribe`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const res = await response.json();
      throw new Error(res.message);
    }
    return;
  } catch (err) {
    throw err;
  }
}
