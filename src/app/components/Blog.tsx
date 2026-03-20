import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Blog() {
  const posts = [
    {
      title: 'As Melhores Práticas de Design para 2026',
      excerpt: 'Descubra as tendências e práticas que estão moldando o futuro do design digital.',
      date: '15 Mar 2026',
      image: 'https://images.unsplash.com/photo-1627445654391-b26feb694dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGUlMjBhcmNoaXRlY3R1cmUlMjB1cmJhbnxlbnwxfHx8fDE3NzM5NjYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Design'
    },
    {
      title: 'Como Construir um Design System Escalável',
      excerpt: 'Guia completo para criar e manter um design system que cresce com seu produto.',
      date: '10 Mar 2026',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc3Mzg4NjYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Desenvolvimento'
    },
    {
      title: 'UX Writing: A Arte de Escrever para Usuários',
      excerpt: 'Aprenda como criar textos que melhoram a experiência do usuário e impulsionam conversões.',
      date: '5 Mar 2026',
      image: 'https://images.unsplash.com/photo-1560264401-b76ed96f3134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM5NjYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'UX'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Últimas do Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tutoriais e reflexões sobre design, desenvolvimento e tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-[#184775] text-[#184775] rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <Button variant="link" className="p-0 text-[#184775] hover:text-[#184775]">
                  Ler Mais <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
