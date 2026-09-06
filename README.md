# D Mimo Architects - Official Website

Welcome to the official source code for **D Mimo Architects**. This repository contains the premium, modern, and highly-optimized frontend web application for the architectural firm.

## 🛠 Technology Stack

This project was built with modern web development standards to ensure lightning-fast performance, buttery-smooth animations, and robust SEO.

- **Framework**: [React.js](https://react.dev/) powered by [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/) (Direct client-side email integration)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started (Local Development)

If you or a future developer need to run this website locally on a computer to make changes, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### 2. Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

### 3. Environment Variables (Critical for Contact Form)
Create a `.env` file in the root directory (at the same level as `package.json`) and add your EmailJS credentials:

```env
VITE_PUBLIC_KEY=your_public_key_here
VITE_SERVICE_ID=your_service_id_here
VITE_TEMPLATE_ID=your_template_id_here
```
*(Note: Never commit your `.env` file to version control. It is already safely ignored in `.gitignore`)*

### 4. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

## 🌍 Deployment

This website is optimized for modern hosting platforms like **Vercel**, **Netlify**, or **Hostinger**.

### Build Settings
When connecting this repository to your hosting provider, use the following default Vite settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `18.x` or higher

### ⚠️ Important Deployment Step
Because `.env` files are not pushed to GitHub for security reasons, **you must manually add your Environment Variables** (`VITE_PUBLIC_KEY`, `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`) into the dashboard of your hosting provider (e.g., in Vercel's "Environment Variables" settings). If this is skipped, the Contact Form will fail in production.

## 🔒 Security (EmailJS)

To prevent spam or unauthorized use of your EmailJS account, ensure that you restrict the form to only work on your official domain.
1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Navigate to **Account** -> **Security**.
3. Add your live production URL (e.g., `https://dmimoarchitects.com`) to the **Allowed Origins** list.

---
*Developed with precision for D Mimo Architects.*
