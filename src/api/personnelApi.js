// Public frontend must never contain credentials, service-account material, or personnel records.
// All protected data is requested through a same-origin Cloudflare Worker route.
const API_BASE = '/api'

export const hasSecureApi = true

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'RTAFNC-Personnel-Portal',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (response.status === 401 || response.status === 403) {
    const error = new Error('AUTH_REQUIRED')
    error.status = response.status
    throw error
  }

  if (!response.ok) {
    const error = new Error(`HRIS_API_${response.status}`)
    error.status = response.status
    throw error
  }

  return response.json()
}

export const personnelApi = {
  summary: () => request('/v1/personnel/summary'),
  search: (q) => request(`/v1/personnel/search?q=${encodeURIComponent(q)}`),
  profile: (personnelId) => request(`/v1/personnel/${encodeURIComponent(personnelId)}`),
  org: () => request('/v1/org/command-chain'),
  positions: () => request('/v1/positions/summary'),
  latestOrders: () => request('/v1/orders/latest'),
  myTasks: () => request('/v1/workflow/my-tasks'),
}
