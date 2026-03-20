import { Github, Linkedin, Twitter, User, FileText } from 'lucide-react';
import { Button } from './ui/button';
import heroImg from '../../assets/images/profile-photo.png';
import { Stats } from './Stats';

export function Hero() {
  return (
    <section id="home" className="pt-[160px] relative overflow-hidden pb-16 bg-white border-b-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-between h-full gap-4">
            <span className="bg-[#184775]/10 text-[#184775] text-lg p-2.5 font-semibold w-fit rounded-xs">
              Olá! Eu sou o Victor Vieira
            </span>

            <h1 className="text-5xl font-bold text-gray-900">
              Especialista em Desenvolvimento de Softwares Full-stack
            </h1>

            <p className="text-gray-600">
              Especializado em criar experiências digitais incríveis e interfaces intuitivas para web e mobile.
            </p>

            <div className="flex flex-row gap-4 w-auto h-auto">
              <Button className="flex bg-black hover:bg-[#184775] text-white text-md font-semibold flex-1 w-auto h-auto p-4 gap-2.5">
                <User className="size-6" />
                Contacte-me
              </Button>
              <Button variant="outline" className='flex text-md font-semibold flex-1 w-auto h-auto p-4 gap-2.5'>
                <FileText className="size-6" />
                Baixar CV
              </Button>
            </div>

            {/* <div className="flex gap-4">
              <a href="#" className="p-2 border border-gray-200 rounded-lg hover:border-[#184775] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-200 rounded-lg hover:border-[#184775] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-200 rounded-lg hover:border-[#184775] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
            <Stats />
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#184775] via-orange-300 to-yellow-400">
              <img
                src={heroImg}
                alt="Desenvolvedor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Disponível para projetos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
