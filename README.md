# 🛒 Amazon Clone - React Project

A full-featured Amazon clone built with React, Redux Toolkit, Tailwind CSS, and Material UI.

## ✨ Features

- Product listing from API
- Add to cart / Remove from cart
- Cart management with Redux Toolkit & Redux Persist
- Sign In & Registration pages
- Payment page
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion

## 🛠️ Tech Stack

- **React 18** (Create React App)
- **Redux Toolkit** + Redux Persist (state management)
- **React Router v6** (routing)
- **Tailwind CSS 3** (styling)
- **Material UI v5** (icons & components)
- **Framer Motion** (animations)
- **Axios** (API calls)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### ⚠️ Windows Users — Important Step

If you're on **Windows**, you may get this error when running `npm` commands:

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

**Fix:** Open PowerShell and run this command **once**:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/amazon-clone-react.git
   cd amazon-clone-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   > **Note:** You may see deprecation warnings during install — these are harmless and can be ignored.

3. **Start the development server**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

### 🔧 Troubleshooting

| Problem | Solution |
|---|---|
| `npm.ps1 cannot be loaded` (Windows) | Run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` in PowerShell |
| Missing module errors after `npm install` | Delete `node_modules` folder and run `npm install` again |
| `@mui/icons-material` not found | Run `npm install @mui/icons-material` separately |
| Port 3000 already in use | Stop the other process or set a custom port: `set PORT=3001 && npm start` |

## 📁 Project Structure

```
src/
├── api/              # API calls (Axios)
├── assets/           # Images & static assets
├── components/       # Reusable components
│   ├── Footer/       # Footer & FooterTop
│   └── Home/         # Banner, Products, ProductCard
├── constants/        # Static data
├── pages/            # Cart & Payment pages
├── redux/            # Redux store & slices
└── styles/           # Additional CSS
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode at [localhost:3000](http://localhost:3000) |
| `npm run build` | Builds the app for production |
| `npm test` | Runs the test suite |

## 📝 License

This project is for educational purposes only. Amazon brand and logo are trademarks of Amazon.com, Inc.
