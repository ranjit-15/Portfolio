import { Home, User, Heart, Sparkles, Target, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: User, path: '/about', label: 'About Me' },
    { icon: Sparkles, path: '/interests', label: 'Interests' },
    { icon: Briefcase, path: '/projects', label: 'Projects' },
    { icon: Target, path: '/goals', label: 'Goals' },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 py-4 px-2">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={index}
            to={item.path}
            className="group flex flex-col items-center gap-1 transition-all duration-300"
          >
            <div
              className={`p-2.5 rounded-full transition-all duration-300 ${isActive
                  ? 'shadow-lg bg-primary'
                  : 'bg-secondary group-hover:bg-muted'
                }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary group-hover:text-primary-foreground'}`} />
            </div>
            <span className={`text-xs transition-all duration-300 font-medium ${isActive ? 'text-primary' : 'text-muted group-hover:text-primary'
              }`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
