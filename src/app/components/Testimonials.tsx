import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1761243892035-c3e13829115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGFzaWFuJTIwd29tYW58ZW58MXx8fHwxNzczOTUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Trabalho excepcional! A dedicação e atenção aos detalhes superaram nossas expectativas. Altamente recomendado para qualquer projeto de design.'
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Produto, InnovaCorp',
      image: 'https://images.unsplash.com/photo-1764084051711-45a3b7c84c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGNhdWNhc2lhbiUyMG1hbnxlbnwxfHx8fDE3NzM5NjYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Profissional extremamente competente e criativo. Entregou um produto final que não apenas atendeu, mas superou todas as nossas necessidades.'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Dizem os Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feedback de alguns dos clientes com quem tive o prazer de trabalhar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
