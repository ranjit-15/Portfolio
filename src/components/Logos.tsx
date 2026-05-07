import type { KeyboardEvent } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import myLogo from '../assets/logo.png';

export default function Logos() {
  const { theme, setTheme } = useTheme();

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLogoClick();
    }
  };

  return (
    <div className="flex items-center justify-between px-6 pt-4">
      <button 
        type="button"
        onClick={handleLogoClick}
        onKeyDown={handleKeyDown}
        className="w-18 h-18 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Refresh page"
      >
        <img 
          src={myLogo} 
          alt="My Logo"
          className="w-full h-full object-cover scale-110"
        />
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="group flex flex-col items-center gap-1 transition-all duration-300 cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        <div className="p-2.5 rounded-full transition-all duration-300 bg-secondary group-hover:bg-muted shadow-md">
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
          )}
        </div>
      </button>
    </div>
  );
}
