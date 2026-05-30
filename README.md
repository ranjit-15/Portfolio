# Ranjit Yadav — Portfolio Website

A modern, responsive personal portfolio built with React, TypeScript, and Vite. Hosted at [ranjityadav.com.np](https://ranjityadav.com.np).

## 🚀 Features

- **Multi-page Navigation** — Seamless client-side routing between sections
- **Smooth Animations** — Page transitions and micro-animations via Motion
- **Dark / Light Mode** — Theme toggle with persistent preference
- **Responsive Design** — Works on all screen sizes
- **SEO Optimized** — Meta tags, Open Graph, sitemap.xml, robots.txt, canonical URL
- **Certificates** — Credly badge embeds for verified credentials

## 🛠️ Tech Stack

| Tool | Version |
|---|---|
| React | 18.3.1 |
| TypeScript | 6.0.3 |
| Vite | 6.4.2 |
| Tailwind CSS | 4.1.12 |
| Motion | 12.38.0 |
| React Router DOM | 7.15.0 |
| Lucide React | 0.487.0 |

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── og-preview.jpg     # Social media preview image (1200x630, <100KB)
│   ├── logo.png           # Site logo / favicon
│   ├── Ranjit.pdf         # Resume download
│   ├── robots.txt         # Search engine crawl rules
│   └── sitemap.xml        # All page URLs for Google indexing
├── src/
│   ├── assets/            # Images used inside the app
│   ├── components/        # All page & UI components
│   │   ├── LandingPage.tsx
│   │   ├── AboutMePage.tsx
│   │   ├── InterestsPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── GoalsPage.tsx
│   │   ├── Navigation.tsx
│   │   ├── Logos.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingShapes.tsx
│   ├── styles/
│   │   └── globals.css    # Global CSS variables and theme
│   ├── App.tsx            # Routes
│   ├── ThemeContext.tsx    # Dark/light theme context
│   └── main.tsx           # Entry point
├── index.html             # HTML with SEO meta tags
├── package.json
├── vite.config.ts
├── vercel.json            # Vercel deployment config
└── tsconfig.json
```

## 🌐 Pages

| Path | Page |
|---|---|
| `/` | Landing — welcome & navigation cards |
| `/about` | About Me — bio, photo, social links |
| `/interests` | Things I Love — hobbies & favorites |
| `/projects` | Projects — work showcase & certificates |
| `/goals` | Future Goals — career vision |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🚢 Deployment

Hosted on **Vercel** with automatic deployments from GitHub.

```bash
git add .
git commit -m "your message"
git push origin main
```

Vercel auto-deploys on every push to `main`.

## 👤 Author

**Ranjit Yadav**
- Website: [ranjityadav.com.np](https://ranjityadav.com.np)
- GitHub: [@ranjit-15](https://github.com/ranjit-15)
- LinkedIn: [ranjit-yadav](https://www.linkedin.com/in/ranjit-yadav-2ab635200)

---

Built with ❤️ by Ranjit Yadav
