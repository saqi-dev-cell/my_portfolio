// src/components/Header.tsx
import { VscHome, VscAccount, VscMail, VscArchive } from 'react-icons/vsc';

export default function Header() {
  return (
    <header className="w-full py-2 bg-neutral-900/30 backdrop-blur-sm shadow-lg fixed top-0 left-0 z-50">
      <nav className="max-w-5xl mx-auto flex gap-6 justify-center">
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 focus:outline-none bg-transparent border-none transition-colors"
        >
          <VscHome size={20} />
          <span className="text-xs mt-0.5">Home</span>
        </button>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 focus:outline-none bg-transparent border-none transition-colors"
        >
          <VscAccount size={20} />
          <span className="text-xs mt-0.5">About</span>
        </button>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 focus:outline-none bg-transparent border-none transition-colors"
        >
          <VscArchive size={20} />
          <span className="text-xs mt-0.5">Projects</span>
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-blue-300 hover:text-blue-400 focus:outline-none bg-transparent border-none transition-colors"
        >
          <VscMail size={20} />
          <span className="text-xs mt-0.5">Contact</span>
        </button>
      </nav>
    </header>
  );
}