import type { KeyboardEvent } from 'react';
import myLogo from '../assets/logo.png';

export default function Logos() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLogoClick();
    }
  };

  return (
    <div className="flex items-start justify-start px-6 pt-4">
      <button 
        type="button"
        onClick={handleLogoClick}
        onKeyDown={handleKeyDown}
        className="w-18 h-18 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#546B41] focus:ring-offset-2"
        aria-label="Refresh page"
      >
        <img 
          src={myLogo} 
          alt="My Logo"
          className="w-full h-full object-cover scale-110"
        />
      </button>
    </div>
  );
}
