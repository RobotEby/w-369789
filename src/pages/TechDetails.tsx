
import { ArrowLeft, ArrowRight, FileText, Code, Cpu, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Detalhes Técnicos
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                Entenda como nossa plataforma de marketing digital transforma dados em resultados através de arquitetura avançada e processos otimizados para máximo ROI.
              </motion.p>

              {/* Introdução Impactante */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Por trás de cada clique existe um fluxo de dados que impulsiona decisões em tempo real.</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Nossa central elétrica de dados processa milhões de eventos por minuto, transformando cada interação em insights acionáveis. 
                    Com arquitetura escalável e algoritmos preditivos, entregamos otimização contínua de campanhas e ROI crescente para nossos clientes.
                  </p>
                </div>
              </motion.div>
              
              {/* Visão Geral da Arquitetura */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Visão Geral da Arquitetura</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Nossa plataforma opera em três camadas integradas que garantem coleta, processamento e ativação de dados 
                  para campanhas de marketing digital com performance superior. Veja como cada camada entrega valor:
                </p>

                {/* Product Platform Architecture Diagram */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    <ProductPlatform />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-lg mb-3 text-blue-900">1. Dispositivos & Fontes de Dados</h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li>• Pixels de rastreamento avançados</li>
                      <li>• APIs nativas Google/Facebook/TikTok</li>
                      <li>• Integração CRM e e-commerce</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-lg mb-3 text-green-900">2. Plataforma CBAAP Cloud</h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>• Motor AI/ML para otimização</li>
                      <li>• Data Lake com 99,99% disponibilidade</li>
                      <li>• Computação de borda para latência mínima</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-lg mb-3 text-purple-900">3. Aplicações de Usuário</h4>
                    <ul className="text-purple-800 space-y-2 text-sm">
                      <li>• Dashboards em tempo real</li>
                      <li>• Automação de campanhas</li>
                      <li>• Relatórios customizados</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Fluxo de Dados */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Fluxo de Dados Passo a Passo</h2>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    { step: "1", title: "Coleta", desc: "Pixels, APIs e eventos de aplicativo capturam cada interação do usuário em tempo real" },
                    { step: "2", title: "Transmissão Segura", desc: "Criptografia AES-256 e latência inferior a 200ms garantem dados íntegros e rápidos" },
                    { step: "3", title: "Processamento", desc: "Motor de AI detecta padrões de conversão e prediz comportamentos futuros" },
                    { step: "4", title: "Ativação", desc: "Algoritmos otimizam lances, segmentam públicos e disparam campanhas automaticamente" },
                    { step: "5", title: "Visualização", desc: "Dashboards em tempo real com alertas automáticos para tomada de decisão imediata" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Camadas Tecnológicas */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Camadas Tecnológicas Essenciais</h2>
                </div>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Componente</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Função</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Benefício</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Ingestão & ETL Otimizado", "Coleta e transforma dados de múltiplas fontes", "Visão 360° do cliente em tempo real"],
                        ["Data Lake Escalável", "Armazena petabytes com 99,99% disponibilidade", "Histórico completo para análise preditiva"],
                        ["Módulo AI & Machine Learning", "Modelos preditivos de LTV/CAC", "Redução de até 32% no CPA"],
                        ["Computação de Borda", "Processamento local para latência mínima", "Remarketing dinâmico instantâneo"],
                        ["Interface de APIs", "REST + Webhooks para integração", "Tempo de integração < 5 dias"]
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium">{row[0]}</td>
                          <td className="border border-gray-200 px-4 py-3">{row[1]}</td>
                          <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Processo de Desenvolvimento */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Processo de Desenvolvimento CBAAP</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: "Discovery", desc: "Pesquisa de mercado e mapeamento de metas", value: "Estratégia alinhada a KPIs" },
                    { title: "Design & Prototipagem", desc: "Wireframes, POCs e testes A/B rápidos", value: "Validação em < 4 semanas" },
                    { title: "Desenvolvimento & Testes", desc: "Sprints ágeis com QA automatizado", value: "Lançamento sem retrabalho" },
                    { title: "Implantação & Otimização", desc: "Monitoramento 24/7 e ciclos de melhoria", value: "ROI crescente e sustentável" }
                  ].map((phase, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-2 text-gray-900">{phase.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{phase.desc}</p>
                      <div className="text-blue-600 font-medium text-sm">{phase.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Diferenciais de Performance */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Diferenciais de Performance</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { metric: "2 milhões", desc: "eventos processados por minuto sem queda de performance" },
                    { metric: "32%", desc: "redução média no CPA através de algoritmos preditivos" },
                    { metric: "< 5 dias", desc: "tempo médio de integração via API" },
                    { metric: "99,99%", desc: "disponibilidade com escalabilidade horizontal pay-per-use" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-bold text-xl text-green-700">{item.metric}</span>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Casos de Uso */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Casos de Uso em Ação</h2>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { sector: "E-commerce", solution: "Otimização de funil em tempo real", result: "Aumento de 45% na taxa de conversão" },
                    { sector: "B2B SaaS", solution: "Lead scoring preditivo baseado em comportamento", result: "Redução de 60% no ciclo de vendas" },
                    { sector: "Varejo Físico", solution: "Integração POS → campanhas omnichannel", result: "ROI 8x em campanhas de reativação" }
                  ].map((usecase, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{usecase.sector}</h4>
                      <p className="text-gray-700 mb-2">{usecase.solution}</p>
                      <div className="text-blue-600 font-medium">{usecase.result}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Conclusão & CTA */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.7
            }} className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Pronto para Acelerar Seus Resultados?</h2>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Veja esses números aplicados ao seu negócio
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Converse com nossos engenheiros de soluções e descubra como nossa plataforma pode transformar 
                    seus dados em crescimento sustentável. Agenda limitada a 5 empresas por semana.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/development-process" 
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold"
                    >
                      Quero a Sessão Técnica
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
