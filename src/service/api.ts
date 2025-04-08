const API_BASE_URL = 'http://localhost:5000';

async function request(url: string, { method = 'GET', data, queryParams, ...options }: RequestInit & { data?: any; queryParams?: string; } = {}){
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config: RequestInit = {
    ...options,
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const fullUrl = queryParams ? `${API_BASE_URL}${url}?${queryParams}` : `${API_BASE_URL}${url}`;

  const response = await fetch(fullUrl, config);

  if (!response.ok) {
    if (response.status === 401) {
      console.error('Unauthorized access');
    }
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export const api = {
  get: (url: string, options?: RequestInit) => request(url, options)
};