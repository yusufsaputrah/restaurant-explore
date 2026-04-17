
## Restaurant Discovery App

A clean, light, food-app styled React app powered by a MockAPI.io dataset, with a list view, filters, and a detail view with reviews + map.

### Data (MockAPI.io)
Two resources I'll seed and document in the README:
- `restaurants`: id, name, photos[], categories[], rating, price (1–4 / "$"–"$$$$"), isOpen, openHours, address, lat, lng, description.
- `reviews`: id, restaurantId, name, avatar, rating, text, date.

~16 restaurants spanning cuisines (Italian, Japanese, Indonesian, Mexican, Indian, Thai, American, Chinese) with Unsplash photo URLs.

### Pages & routes
- `/` — Restaurant list (main)
- `/restaurant/:id` — Detail view
- `*` — NotFound (existing)

### Main page
- Sticky header: app name + search input (cuisine/category, server-side via `?categories_like=`).
- Filter bar:
  - **Open now** toggle (client-side)
  - **Price** chips: $, $$, $$$, $$$$ (multi-select, client-side)
  - **Cuisine** select/chips driven by category list (server-side search filter)
- Responsive grid of restaurant cards:
  - Hero image (photos[0]), open/closed pill overlay
  - Cuisine chip (categories[0]) + price range + ★ rating
  - Name, short address
  - "Learn more →" button → detail
- Loading skeletons + empty state.

### Detail page
- Back button, hero image gallery (simple carousel of photos)
- Title, ★ rating, cuisine chips, price, open/closed, address
- Leaflet + OpenStreetMap map with marker at lat/lng
- Description
- Reviews section: avatar, name, ★ rating, text, date — with loading skeletons

### Architecture (clean, layered)
```
src/
  api/
    client.ts           // fetch wrapper, base URL from env
    restaurants.ts      // getRestaurants(filters), getRestaurant(id)
    reviews.ts          // getReviewsByRestaurant(id)
  domain/
    types.ts            // Restaurant, Review, Filters, PriceLevel
  hooks/
    useRestaurants.ts   // react-query: list + server filters
    useRestaurant.ts
    useReviews.ts
  features/
    restaurants/
      components/
        RestaurantCard.tsx
        FilterBar.tsx
        OpenNowToggle.tsx
        PriceFilter.tsx
        CuisineFilter.tsx
        RestaurantGrid.tsx
      utils/
        applyClientFilters.ts
    reviews/
      components/
        ReviewItem.tsx
        ReviewList.tsx
    map/
      components/
        RestaurantMap.tsx   // Leaflet
  components/
    layout/Header.tsx
    layout/Container.tsx
    common/RatingStars.tsx
    common/PriceBadge.tsx
    common/OpenStatusBadge.tsx
    common/CuisineChip.tsx
    common/EmptyState.tsx
  pages/
    Index.tsx           // list page
    RestaurantDetail.tsx
    NotFound.tsx
  config/
    env.ts              // VITE_API_BASE_URL
```

### Design system (light, food-app)
- Background `#FFFDFA` warm-white, foreground near-black.
- Primary accent: warm orange `hsl(18 90% 55%)` for CTAs, rating stars, active chips.
- Secondary: deep green `hsl(150 40% 30%)` for "Open" badge; muted red for "Closed".
- Rounded `2xl` cards, soft shadows, Inter font, image-forward.
- All tokens added to `index.css` + `tailwind.config.ts`; no hard-coded colors in components.

### Libraries to add
- `@tanstack/react-query` (already present) for data fetching/caching
- `leaflet` + `react-leaflet` for the map
- `lucide-react` (already present) for icons

### README (committed at repo root)
- Project overview & screenshots
- React 18.x and Node ≥ 18 versions
- How to run with `npm install` / `npm run dev` (and yarn equivalents)
- Env var: `VITE_API_BASE_URL` pointing to the MockAPI project
- Note: no login required (per chosen scope)
- Folder structure overview
- Deploy to Netlify steps + SPA `_redirects` note for React Router
- Placeholders for GitHub repo URL and live Netlify URL

### Out of scope (per choices)
- Authentication / login screen
- Real third-party API (Yelp/Foursquare)

### Deliverables in this build
- All pages, components, hooks, types, and styling above
- Mock data fetched live from MockAPI.io (I'll provide the seed JSON + setup steps in README so you can paste into your own MockAPI project; default base URL will point to a working demo endpoint I configure)
