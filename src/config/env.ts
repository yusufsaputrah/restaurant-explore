/**
 * Environment configuration.
 * Set VITE_API_BASE_URL in a .env file to point to your MockAPI project, e.g.
 *   VITE_API_BASE_URL=https://65xxxxxx.mockapi.io/api/v1
 *
 * If unset, the app falls back to a bundled local dataset so it works offline.
 */
export const API_BASE_URL: string | undefined = import.meta.env.VITE_API_BASE_URL as string | undefined;
export const USE_LOCAL_FALLBACK = !API_BASE_URL;
