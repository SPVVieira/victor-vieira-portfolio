import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

export function Stats() {
  const yearsOfExperience = Math.floor((Date.now() - new Date('2017-12-01').getTime()) / (1000 * 60 * 60 * 24 * 365));
  const degrees = [
    'Técnico em Mecatrônica',
    'Engenharia Mecânica (Incompleto)',
    'Análise e Desenvolvimento de Sistemas'
  ];
  const mbas = [
    'Arquitetura de Softwares (Com foco em Microserviços)',
    'MBA em Gestão de Projetos'
  ];
  const certifications = [
    'Certificação em Desenvolvimento Web',
    'Certificação em Python',
    'Certificação em Node.js'
  ];
  const totalEducation = degrees.length + mbas.length + certifications.length;
  const clients = [
    'Company Conferi',
    'Sisloc Softwares',
    'Talent Group',
    'Qualicorp',
    'Thomson Reuters',
    '10+ Clientes Freelancers'
  ];
  const projects = [
    'Sistema de Consultas e Laudos Veículares',
    'Automações Para Realização de Consultas Veículares (Utilizando Web-scraping e Web-crawling)',
    'E-commerce Automotivo',
    'Sistema ERP Para Locação e Venda de Produtos e Serviços',
    'E-commerce Integrado ao ERP',
    'Site Institucional Para Administradora de Planos de Saúde',
    'Aplicativo Para Administradora de Planos de Saúde',
    'URAs (Unidades de Resposta Audível) Para Administradora de Planos de Saúde',
    'Chatbots (WhatsApp) Para Administradora de Planos de Saúde',
    'ERP Contábil',
    'Aplicativos e Sistemas Fintech',
    'Diversas Integrações com Serviços de Terceiros',
    '30+ Landing Pages e sites institucionais',
    'Arquitetura de Softwares Diversos',
    'Liderança Técnica de Equipes de Desenvolvimento de Software'
  ];

  const stats = [
    { value: `${yearsOfExperience}+`, label: 'Anos de Experiência', details: [] },
    { value: `${totalEducation}+`, label: 'Formações e Certificações', details: [...degrees, ...mbas, ...certifications] },
    { value: `${clients.length + 10}+`, label: 'Clientes Satisfeitos', details: clients },
    { value: `${projects.length + 30}+`, label: 'Projetos e Serviços', details: projects }
  ];

  return (
    <section>
      <div className="max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="flex flex-col text-center align-middle bg-[#184775]/10 p-4 rounded-xs w-full min-w-0">
                  <div className="text-4xl font-bold text-[#184775] w-auto">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-[clamp(0.6rem,1vw,0.95rem)] w-full whitespace-normal break-normal leading-tight">
                    {stat.label}
                  </div>
                </div>
              </TooltipTrigger>
              {stat.details && stat.details.length > 0 && (
                <TooltipContent
                  side="right"
                  sideOffset={6}
                  className="bg-[#FAFAFA] border-1 border-[#184775]/10 shadow-sm text-[#4D4D4D] font-sm p-4 pl-8 max-w-xs md:max-w-sm whitespace-normal break-words"
                >
                  <ul className="list-disc list-inside space-y-1">
                    {stat.details.map((detail, i) => (
                      <li key={i} className="text-[clamp(0.6rem,1vw,0.95rem)] leading-tight mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
