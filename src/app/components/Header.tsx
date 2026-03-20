import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b">
      <div className="max-w-7xl mx-auto px-7 sm:px-9 lg:px-11">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Portfólio - Dev</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white font-bold hover:text-[#184775] transition-colors">
              Home
            </a>
            <a href="#servicos" className="text-white font-bold hover:text-[#184775] transition-colors">
              Serviços
            </a>
            <a href="#about-me" className="text-white font-bold hover:text-[#184775] transition-colors">
              Sobre Mim
            </a>
            <a href="#projetos" className="text-white font-bold hover:text-[#184775] transition-colors">
              Projetos
            </a>
            <a href="#depoimentos" className="text-white font-bold hover:text-[#184775] transition-colors">
              Depoimentos
            </a>
            <a href="#blog" className="text-white font-bold hover:text-[#184775] transition-colors">
              Blog
            </a>
            <a href="#contato" className="inline-block px-5 py-3 font-semibold leading-none transition-all duration-300 bg-white border border-white text-dark hover:bg-white/90 rounded-xs">
              Vamos Conversar
            </a>
          </nav>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
