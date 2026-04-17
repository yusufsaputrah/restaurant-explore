import { API_BASE_URL } from "@/config/env";

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
  }
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE_URL) throw new ApiError("API_BASE_URL is not configured", 0);
  const res = await fetch(`${API_BASE_URL}${path}`, init);
  if (!res.ok) throw new ApiError(`Request failed: ${res.status}`, res.status);
  return (await res.json()) as T;
}
