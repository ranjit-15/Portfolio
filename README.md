# Ranjit Yadav - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite. This project showcases personal information, interests, university experience, and future goals with a beautiful user interface.

## 🚀 Features

- **Multi-page Navigation**: Seamless routing between different sections
- **Interactive UI**: Smooth animations and hover effects using Framer Motion
- **Responsive Design**: Fully responsive layout that works on all devices (Mobile, Tablet, Desktop)
- **Vercel Analytics**: Built-in analytics for tracking site performance and visitor data
- **SEO Optimized**: Meta tags, robots.txt, and sitemap.xml for better search engine visibility
- **Modern Tech Stack**: Built with latest React ecosystem tools
- **Logo Interaction**: Click the logo to refresh the page
- **Optimized Assets**: Reduced logo dimensions for better performance

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type-safe development
- **Vite 6.4.2** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Styling
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build output will be in the `build` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── assets/           # Static assets (images, icons)
│   ├── components/       # React components
│   │   ├── AboutMePage.tsx
│   │   ├── FloatingShapes.tsx
│   │   ├── FreshmanExperiencePage.tsx
│   │   ├── GoalsPage.tsx
│   │   ├── InterestsPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Logos.tsx
│   │   └── Navigation.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Entry point
├── build/               # Production build output
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```

## 🌐 Pages

- **Landing Page** (`/`): Welcome page with overview and navigation cards
- **About Me** (`/about`): Personal information and background
- **Interests** (`/interests`): Hobbies, favorites, and passions
- **Freshman Experience** (`/freshman`): University life at UNO-R
- **Goals** (`/goals`): Future aspirations and objectives

## 🚢 Deployment

### Vercel Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy with default settings

The `vercel.json` configuration includes:
- Build and dev commands
- Framework preset for Vite
- SPA routing rewrites
- Cache headers for assets

### GitHub Deployment

1. Ensure `.gitignore` excludes build artifacts
2. Commit and push your code:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin main
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory if you need environment-specific configuration:

```env
VITE_API_URL=your-api-url
VITE_APP_NAME=Your App Name
```

### Build Optimization

The `vite.config.ts` includes:
- React plugin for JSX support
- Tailwind CSS plugin
- Path aliases for cleaner imports
- Build target optimization
- Development server configuration

## 🎨 Design System

- **Primary Color**: `#546B41` (Forest Green)
- **Background**: `#FFF8EC` (Cream)
- **Accent**: `#DCCCAC` (Light Beige)
- **Secondary Accent**: `#99AD7A` (Muted Green)

## 🔧 Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## 📝 Deployment Checklist

- [ ] Update `vercel.json` with correct build settings
- [ ] Configure `.gitignore` to exclude build artifacts
- [ ] Set up environment variables on Vercel
- [ ] Configure custom domain (optional)
- [ ] Set up branch protection rules on GitHub
- [ ] Enable Vercel Preview Deployments
- [ ] Configure production build settings
- [ ] Test on multiple browsers and devices
- [ ] Verify all routes work correctly
- [ ] Check SEO meta tags
- [ ] Optimize images and assets

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Ranjit Yadav**

## 🙏 Acknowledgments

- Portfolio design based on Student Portfolio Interface (Community) on Figma
- Thanks to all the open-source tools and libraries used in this project

## 📞 Support

For support, please contact ranjit.yadav@example.com or open an issue in the repository.

---

Built with ❤️ by Ranjit Yadav
