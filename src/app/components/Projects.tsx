import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Plataforma de Colaboração',
      description: 'Design de interface para plataforma de gestão de projetos e colaboração em equipe.',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc3Mzg4NjYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UI/UX', 'Web App']
    },
    {
      title: 'Sistema de Apresentações',
      description: 'Aplicação web para criação e compartilhamento de apresentações profissionais.',
      image: 'https://images.unsplash.com/photo-1560264401-b76ed96f3134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM5NjYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Design', 'Produto']
    },
    {
      title: 'App de Gestão Marítima',
      description: 'Interface moderna para gerenciamento de operações e logística marítima.',
      image: 'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJvYXQlMjBvY2VhbnxlbnwxfHx8fDE3NzM5NjYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile', 'Enterprise']
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos recentes e descubra como posso ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 bg-[#184775] text-[#184775] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <Button variant="link" className="p-0 text-[#184775] hover:text-[#184775]">
                Ver Projeto <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
}
