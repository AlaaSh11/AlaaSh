# Deployment Guide

This project consists of two parts:
1.  **Client**: A React application (built with Vite).
2.  **Server**: A Node.js/Express application (with MySQL).

Currently, your **Client** is running independently and does not fetch data from the **Server**. You can deploy them separately.

## 1. Deploying the Client (Frontend)
The easiest way to deploy a Vite/React app is using **Vercel**.

### Steps:
1.  **Push your code to GitHub**.
    *   Make sure your project is in a GitHub repository.
2.  **Go to [Vercel.com](https://vercel.com/)** and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  **Configure the Project**:
    *   **Framework Preset**: Vite
    *   **Root Directory**: Click "Edit" and select `client`.
    *   **Build Command**: `npm run build` (default)
    *   **Output Directory**: `dist` (default)
    *   **Install Command**: `npm install` (default)
6.  Click **Deploy**.

Your portfolio will be live at a URL like `https://your-portfolio.vercel.app`.

---

## 2. Deploying the Server (Backend)
If you plan to use the backend (for the database or API), you can deploy it on **Render**.

### Steps:
1.  **Go to [Render.com](https://render.com/)** and sign up.
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your GitHub repository.
4.  **Configure the Service**:
    *   **Root Directory**: `server`
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node index.js`
5.  **Environment Variables**:
    *   Scroll down to "Environment Variables".
    *   Add the variables from your `.env` file (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, etc.).
    *   *Note: You will need a hosted MySQL database. Render offers PostgreSQL by default, but you can use a service like [Aiven](https://aiven.io/) or [PlanetScale](https://planetscale.com/) for MySQL, or switch to PostgreSQL.*
6.  Click **Create Web Service**.

## 3. Connecting Client & Server (Future)
When you are ready to fetch data from the server:
1.  In your Client code, replace `http://localhost:5000` with your Render backend URL.
2.  Use an environment variable in the Client (e.g., `VITE_API_URL`) so you can switch between localhost and production easily.
