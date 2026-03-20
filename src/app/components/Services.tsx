import { Code, Palette, Smartphone, Layout } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Criação de interfaces intuitivas e experiências memoráveis para seus usuários.'
    },
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Desenvolvimento de aplicações web modernas e responsivas com as melhores tecnologias.'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Design e desenvolvimento de aplicativos mobile nativos e híbridos.'
    },
    {
      icon: Layout,
      title: 'Design System',
      description: 'Construção de sistemas de design escaláveis e consistentes para sua marca.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços de design e desenvolvimento para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
