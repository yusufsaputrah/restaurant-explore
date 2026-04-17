# 🍴 Tastely — Restaurant Discovery App

Frontend Developer technical test. A clean, light, food-app styled React application that lets users browse restaurants, filter by cuisine / price / availability, and view details with reviews and a map.

> **Live demo:** _add your Netlify URL here, e.g._ `https://tastely.netlify.app`
> **Repository:** _add your GitHub URL here, e.g._ `https://github.com/<your-username>/FrontendDevReactjs-<YourName>`

---

## 🧰 Tech Stack & Versions

| Tool | Version |
|------|---------|
| **React** | 18.3.x |
| **Node** | ≥ 18.x (recommended 20.x LTS) |
| **Vite** | 5.x |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 3.x |
| **React Router** | 6.x |
| **TanStack Query** | 5.x |
| **Leaflet + React-Leaflet** | 1.9.x / 4.2.x |

---

## 🚀 How to Run

### With npm
```bash
npm install
npm run dev
```

### With yarn
```bash
yarn
yarn dev
```

App will be available at `http://localhost:8080` (or the port Vite prints).

### Build for production
```bash
npm run build
npm run preview
```

---

## 🔐 Login Credentials

This app **does not require login** — it is a fully public restaurant discovery experience (per scope).

| Username | Password |
|----------|----------|
| _none_   | _none_   |

---

## 🌐 API Configuration (MockAPI.io)

The app reads its data from a configurable REST API. **If no API URL is set, it falls back to a bundled local dataset (16 restaurants + reviews) so the app works out-of-the-box.**

### Set up your own MockAPI project

1. Create a free project at [https://mockapi.io](https://mockapi.io).
2. Add two resources:
   - **`restaurants`** with fields:
     ```
     name (string), photos (array<string>), categories (array<string>),
     rating (number), price (number 1–4), isOpen (boolean), openHours (string),
     address (string), lat (number), lng (number), description (string)
     ```
   - **`reviews`** with fields:
     ```
     restaurantId (string), name (string), avatar (string),
     rating (number), text (string), date (string)
     ```
3. Seed the resources using the JSON arrays in [`src/data/localData.ts`](src/data/localData.ts).
4. Copy your project base URL (e.g. `https://65xxxxxxxxxx.mockapi.io/api/v1`).
5. Create a `.env` file in the project root:
   ```env
   VITE_API_BASE_URL=https://65xxxxxxxxxx.mockapi.io/api/v1
   ```
6. Restart the dev server.

---

## 🗂️ Folder Structure (Clean Architecture)

```
src/
├── api/               # HTTP layer (fetch wrappers)
│   ├── client.ts
│   ├── restaurants.ts
│   └── reviews.ts
├── config/            # Environment & runtime config
│   └── env.ts
├── data/              # Local fallback dataset
│   └── localData.ts
├── domain/            # Domain types (Restaurant, Review, Filters)
│   └── types.ts
├── hooks/             # React Query hooks (data access layer)
│   ├── useRestaurants.ts
│   ├── useRestaurant.ts
│   └── useReviews.ts
├── features/          # Feature-scoped UI + logic
│   ├── restaurants/
│   │   ├── components/  (RestaurantCard, FilterBar, OpenNowToggle, …)
│   │   └── utils/       (applyClientFilters)
│   ├── reviews/
│   │   └── components/  (ReviewList, ReviewItem)
│   └── map/
│       └── components/  (RestaurantMap)
├── components/        # Shared UI building blocks
│   ├── common/        (RatingStars, PriceBadge, OpenStatusBadge, …)
│   ├── layout/        (Header, Container)
│   └── ui/            (shadcn/ui primitives)
├── pages/             # Route components
│   ├── Index.tsx
│   ├── RestaurantDetail.tsx
│   └── NotFound.tsx
├── App.tsx
└── main.tsx
```

**Layered separation**:
`pages` → `features` / `components` → `hooks` → `api` → `domain types`.
UI never talks to `fetch` directly; it always goes through `hooks` → `api`.

---

## ✨ Features

### Main page (`/`)
- Sticky header with cuisine search input (**server-side** filter)
- Cuisine chip bar (**server-side** filter)
- **Open now** toggle (**client-side** filter)
- **Price** multi-select chips $ / $$ / $$$ / $$$$ (**client-side** filter)
- Responsive grid of restaurant cards with image, cuisine, rating, price, open/closed badge, name, address, and "Learn more →" link
- Loading skeletons + empty/error states

### Detail page (`/restaurant/:id`)
- Photo gallery hero
- Name, rating, cuisines, price, open/closed, hours, address
- **Map** (Leaflet + OpenStreetMap, no API key required)
- About / description
- Reviews list with avatar, name, rating, text, date

---

## 🚢 Deployment (Netlify)

1. Push the repo to GitHub.
2. On [Netlify](https://app.netlify.com) → **Add new site → Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. **Environment variable:** `VITE_API_BASE_URL` = your MockAPI URL (optional — without it the local fallback is used).
6. **SPA routing:** create `public/_redirects` with:
   ```
   /*  /index.html  200
   ```
   so deep links like `/restaurant/3` resolve correctly on refresh.

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest unit tests |

---

## 📝 Notes

- All colors and design tokens are defined in `src/index.css` and `tailwind.config.ts` — no raw colors are used in components.
- Data fetching uses TanStack Query with a 60s stale time for the restaurants list.
- The map uses OpenStreetMap tiles (free, no API key).
