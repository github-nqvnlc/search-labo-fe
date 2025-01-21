import fetch, { HeadersInit, RequestInit } from "node-fetch"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "" // Đọc BASE_URL từ .env

// Hàm xử lý các yêu cầu API
async function apiRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  body?: Record<string, unknown>
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  const token = sessionStorage.getItem("token")
  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options)

  if (!response.ok) {
    const error = (await response.json()) as { message?: string }
    throw new Error(error.message || "API Request Failed")
  }

  // Ép kiểu dữ liệu trả về từ response.json() thành T
  return (await response.json()) as T
}

// Các hàm tiện ích
export const apiClient = {
  get: <T>(endpoint: string) => apiRequest<T>(endpoint, "GET"),
  post: <T>(endpoint: string, body: Record<string, unknown>) => apiRequest<T>(endpoint, "POST", body),
  put: <T>(endpoint: string, body: Record<string, unknown>) => apiRequest<T>(endpoint, "PUT", body),
  delete: <T>(endpoint: string) => apiRequest<T>(endpoint, "DELETE"),
  patch: <T>(endpoint: string, body: Record<string, unknown>) => apiRequest<T>(endpoint, "PATCH", body),
}
