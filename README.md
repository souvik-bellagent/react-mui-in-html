# React + MUI E-commerce (HTML/CDN Version)

A modern, responsive e-commerce homepage built entirely with **HTML, JavaScript, and Material UI**, without any build tools (no Webpack, Vite, or node_modules).

It uses **React Router DOM (v6)** for client-side routing and **Babel Standalone** to compile JSX right in the browser.

## 🚀 How to Run

Because this project uses multiple JavaScript files and ES Modules via Babel, you **cannot** simply open `index.html` in your browser (file:// protocol is blocked by CORS).

**You must serve the files locally.**

### Recommended Method (VS Code)
1.  Install the **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** extension for VS Code.
2.  Right-click on `index.html`.
3.  Select **"Open with Live Server"**.

## 🛠 Tech Stack

-   **React 18** (via CDN)
-   **Material UI v5** (via CDN)
-   **React Router DOM v6** (via CDN UMD build)
-   **Babel Standalone** (for runtime JSX compilation)
-   **Emotion** (Styling engine for MUI)

## 📂 Project Structure

```
├── components/          # Reusable UI Components
│   ├── Navbar.js       # Navigation + Cart Badge + Theme Toggle
│   ├── Hero.js         # Homepage banner
│   ├── ProductList.js  # Product Grid with "Add to Cart"
│   ├── ProductDetails.js # Details View with Flash Timer
│   └── Footer.js       # Site footer
├── app.js              # State Management (Cart, Theme) & Router
├── data.js             # Mock product data
├── theme.js            # Light/Dark Theme configuration
└── index.html          # Entry point (loads scripts & CDNs)
```

## ✨ Features

-   **Zero Build Step**: No `npm install` required.
-   **Client-Side Routing**: Full navigation (`/#/`, `/#/product/1`) using HashRouter.
-   **Dark/Light Mode**:
    -   Automatically detects system preference.
    -   Manual toggle switch in the navbar.
    -   Persists for the session.
-   **Dynamic Cart**:
    -   "Add to Cart" functional on both Home and Product pages.
    -   Cart count increments instantly.
    -   **Resets on Refresh** (React State behavior).
-   **Flash Sales Timer**:
    -   Starts an 8m 45s countdown on every product page visit.
    -   Simulates urgency for users.
-   **Modern UI**: Premium design using customized Material UI components.

## ⚠️ Important Notes

-   **CDN Links**: We explicitly use **UMD** builds from `unpkg` for React Router and Emotion to ensure global variables (`ReactRouterDOM`, etc.) work correctly without a bundler.
-   **Production**: This setup is great for prototyping or learning. For production apps, we recommend migrating to Vite/Next.js for better performance.
