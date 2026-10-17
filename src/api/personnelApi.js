const API_BASE = (import.meta.env.VITE_HRIS_API_BASE || '').replace(/\/$/, '')

export const hasSecureApi = Boolean(API_BASE)

async function request(path, options = {}) {
  if (!API_BASE) throw new Error('SECURE_API_NOT_CONFIGURED')

  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const error = new Error(`HRIS API ${response.status}`)
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
