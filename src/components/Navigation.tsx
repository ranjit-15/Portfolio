import { Home, User, Heart, Sparkles, Target } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: User, path: '/about', label: 'About Me' },
    { icon: Sparkles, path: '/interests', label: 'Interests' },
    { icon: Heart, path: '/freshman', label: 'Experience' },
    { icon: Target, path: '/goals', label: 'Goals' },
  ];

  return (
    <nav className="flex items-center justify-center gap-8 py-4">
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
                  ? 'shadow-lg bg-[#546B41]'
                  : 'bg-[#DCCCAC] group-hover:bg-[#99AD7A]'
                }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFF8EC]' : 'text-[#546B41] group-hover:text-[#FFF8EC]'}`} />
            </div>
            <span className={`text-xs transition-all duration-300 font-medium ${isActive ? 'text-[#546B41]' : 'text-[#99AD7A] group-hover:text-[#546B41]'
              }`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
