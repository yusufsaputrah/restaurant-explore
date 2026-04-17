# 🍴 Tastely — Frontend Developer Technical Test

This project is a React application built for the Frontend Developer technical test. It allows users to discover restaurants, filter by categories and prices, view detailed restaurant information including maps and reviews, and includes a secure login session.

## 📌 Project Submission Details

| Information | Details |
| --- | --- |
| **Repository Name** | `FrontendDevReactjs-Yusufsaputrah` |
| **GitHub Repository Link** | [https://github.com/yusufsaputrah/FrontendDevReactjs-Yusufsaputrah](https://github.com/yusufsaputrah/FrontendDevReactjs-Yusufsaputrah) |
| **Deployed Web Hosting** | [Netlify](https://netlify.com) |
| **Live Project Link** | [https://frontenddevreactjs-yusufsaputrah.netlify.app](https://frontenddevreactjs-yusufsaputrah.netlify.app) |
| **React.js Version** | `18.3.1` |
| **Node.js Version** | `>= 18.x` (Recommended `20.x+`) |

---

## 🔐 Login Credentials

This application requires you to sign in to access the main features. Please use the following demo credentials to log in:

- **Username:** `admin`
- **Password:** `admin123`

---

## 🚀 How to Start the Project Locally

First, clone the repository to your local machine:
```bash
git clone https://github.com/yusufsaputrah/FrontendDevReactjs-Yusufsaputrah.git
cd FrontendDevReactjs-Yusufsaputrah
```

### Option A: Using NPM
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

### Option B: Using Yarn
```bash
# 1. Install dependencies
yarn

# 2. Run the development server
yarn dev
```

*The application will quickly compile and be accessible via `http://localhost:8080` in your web browser.*

---

## 🌐 API Integration Notes

- **Fallback Ready**: The application automatically falls back to a curated local dataset (`src/data/localData.ts`) if it's not explicitly connected to internet APIs. This ensures zero errors when reviewers test the code without API keys!
- **MockAPI Ready**: The codebase fully supports dynamic MockAPI endpoints. (You simply place your endpoint link inside `.env` as `VITE_API_BASE_URL`).

## ✨ Features Included
- **Authentication**: Protected Routing with Session Storage integration.
- **Main Dashboard**: Search restaurants, dynamic filtering by Cuisine, Open Now status, and Minimalist Price Range toggles (Under 75k, 75k-200k, Above 200k IDR).
- **Restaurant Details**: Image galleries, custom OpenStreetMap embeds (via react-leaflet), and live review data streams. 
