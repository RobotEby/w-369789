
import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Process component logic
  const processes = [{
    id: 1,
    title: "Concepção Personalizada",
    description: "Começamos com uma análise detalhada dos requisitos específicos de cada indústria e caso de uso, criando sensores personalizados que capturam informações essenciais para estratégias de marketing digital eficazes.",
    steps: ["Análise de requisitos específicos do setor", "Seleção de materiais condutores e tipos de sensores", "Desenvolvimento de protótipos de sensores", "Calibração inicial e testes de validação"]
  }, {
    id: 2,
    title: "Adaptabilidade e Conforto",
    description: "Nossa equipe de engenharia integra, de forma não intrusiva, os sensores nos produtos – seja em vestuário ou outros dispositivos – assegurando ergonomia, durabilidade e facilidade de manutenção.",
    steps: ["Otimização ergonômica da colocação", "Técnicas de integração que não comprometem o conforto", "Testes de durabilidade e lavabilidade", "Validação da experiência do usuário"]
  }, {
    id: 3,
    title: "Transformação de Insights",
    description: "Desenvolvemos algoritmos específicos que transformam os dados coletados em insights práticos e acionáveis, adaptados aos objetivos estratégicos do cliente.",
    steps: ["Desenvolvimento de algoritmos sob medida para cada setor", "Treinamento de modelos de ML com dados reais do domínio", "Implementação de análises em tempo real", "Otimização de entrega de insights"]
  }, {
    id: 4,
    title: "Qualidade Garantida",
    description: "Cuidamos de toda a cadeia de produção, assegurando que os produtos finais atendam aos padrões de qualidade e certificações específicas do setor.",
    steps: ["Seleção de parceiros de manufatura especializados", "Processos rigorosos de controle de qualidade", "Obtenção de certificações específicas do setor", "Supervisão da produção inicial"]
  }, {
    id: 5,
    title: "Acompanhamento e Otimização",
    description: "Oferecemos suporte completo após a implantação, com treinamentos e orientações para garantir a adoção plena e a melhoria contínua do sistema.",
    steps: ["Treinamento de usuários e onboarding detalhado", "Orientação sobre interpretação de dados e uso de insights", "Monitoramento e feedback contínuo para melhorias", "Iterações de melhoria contínua"]
  }];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">Processo de Desenvolvimento</h1>
            <p className="text-xl text-gray-600 mb-12">
              Nossa abordagem para criar estratégias personalizadas e inovadoras, do conceito à implementação.
            </p>
            
            <div className="prose prose-lg max-w-none">
              {/* Introdução Impactante */}
              <div className="bg-blue-50 p-8 rounded-lg mb-12 border border-blue-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Você já imaginou um processo que transforma ideias inovadoras em soluções concretas?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nosso processo estruturado de desenvolvimento é a base para criar estratégias de marketing digital 
                  personalizadas, capazes de maximizar resultados e reduzir riscos. Cada fase foi cuidadosamente 
                  projetada para garantir que sua visão se torne realidade com máxima eficiência e inovação.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Refinamos nossa metodologia para minimizar riscos e maximizar a inovação, garantindo que cada 
                  projeto se torne uma estratégia personalizada de alto desempenho que supera expectativas.
                </p>
              </div>

              {/* Visão Geral do Processo */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Nosso Processo Estruturado de Desenvolvimento – Visão Geral
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Trabalhamos de maneira minuciosa, desde a concepção até a entrega final do projeto. Nossa abordagem 
                metodológica garante que cada fase seja executada com máxima precisão e transparência, transformando 
                desafios em oportunidades e elevando sua estratégia a um novo patamar de performance.
              </p>
              
              {/* Etapas do Processo - Seção Interativa */}
              <div className="relative mt-12" ref={processRef} style={{ opacity: 0 }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                
                <div className="space-y-10 relative">
                  {processes.map((process, index) => (
                    <div
                      key={process.id}
                      ref={el => processSectionsRef.current[index] = el}
                      className={cn(
                        "relative flex flex-col md:flex-row md:items-center gap-6",
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                      )}
                    >
                      <div className="md:w-1/2">
                        <div
                          className={cn(
                            "md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                            activeProcess === process.id
                              ? "bg-blue-600 text-white scale-110"
                              : "bg-white text-gray-700 border border-gray-300"
                          )}
                          onClick={() => setActiveProcess(process.id)}
                        >
                          <span className="font-bold">{process.id}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 mt-3 md:mt-0 text-gray-900">
                          {process.id}. {process.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-base leading-relaxed">{process.description}</p>
                        
                        <button
                          onClick={() => setActiveProcess(process.id)}
                          className={cn(
                            "text-sm font-medium transition-colors",
                            activeProcess === process.id
                              ? "text-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          )}
                        >
                          {activeProcess === process.id ? "Visualizando Detalhes" : "Ver Detalhes"}
                        </button>
                      </div>
                      
                      <div
                        className={cn(
                          "md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300",
                          activeProcess === process.id
                            ? "opacity-100 translate-y-0 shadow-lg border-blue-200 bg-blue-50"
                            : "opacity-70 md:opacity-40 hover:opacity-80 cursor-pointer"
                        )}
                        onClick={() => setActiveProcess(process.id)}
                      >
                        <h4 className="font-semibold mb-4 text-gray-800">Atividades-Chave:</h4>
                        <ul className="space-y-3">
                          {process.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                                <Check className="w-3 h-3 text-blue-600" />
                              </span>
                              <span className="text-gray-700 text-sm text-left leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Princípios do Processo */}
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Princípios do Nosso Processo de Desenvolvimento</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Iteração Rápida</h4>
                      <p className="text-gray-700 text-sm">Ciclos constantes de testes e melhorias para otimização contínua</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Comunicação Transparente</h4>
                      <p className="text-gray-700 text-sm">Feedback contínuo com o cliente em todas as fases do projeto</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Arquitetura Modular</h4>
                      <p className="text-gray-700 text-sm">Flexibilidade para soluções personalizadas e escaláveis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mitigação de Riscos</h4>
                      <p className="text-gray-700 text-sm">Estratégias construídas para minimizar riscos desde o início</p>
                    </div>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Foco na Experiência do Usuário</h4>
                      <p className="text-gray-700 text-sm">Sempre orientado para resultados práticos e satisfação do cliente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios por Etapa */}
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Benefícios de Cada Etapa</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileSearch className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Concepção Personalizada</h4>
                  <p className="text-gray-600 text-sm">Garantia de alinhamento perfeito às necessidades do cliente, proporcionando dados precisos para decisões estratégicas.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Adaptabilidade</h4>
                  <p className="text-gray-600 text-sm">Soluções práticas que mantêm usabilidade e satisfação, integrando tecnologia sem sacrificar design e conforto.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Insights Acionáveis</h4>
                  <p className="text-gray-600 text-sm">Visão completa e instantânea do desempenho, melhorando eficiência de campanhas e tomada de decisão.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Qualidade Garantida</h4>
                  <p className="text-gray-600 text-sm">Resultados confiáveis e de alta qualidade, traduzindo-se em maior confiança e valor para o cliente.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Sucesso Sustentável</h4>
                  <p className="text-gray-600 text-sm">Garantia de adoção plena com ajustes rápidos e contínuos conforme necessidades evoluem.</p>
                </div>
              </div>
              
              {/* Conclusão e CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-white mt-12">
                <h3 className="text-2xl font-bold mb-4">
                  Nossa abordagem metodológica garante excelência em cada fase
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Nosso processo de desenvolvimento é a base para criar estratégias de marketing digital personalizadas 
                  e inovadoras, que transformam conceitos em resultados reais e mensuráveis. Cada fase é executada 
                  com máxima precisão e transparência, transformando desafios em oportunidades e elevando sua 
                  estratégia a um novo patamar de performance.
                </p>
                <p className="text-xl font-semibold mb-4">
                  Quer ver como nossa metodologia pode transformar seu projeto?
                </p>
                <p className="text-blue-100 mb-6">
                  Solicite uma demonstração personalizada e descubra o poder da inovação aplicada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/tech-details" 
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium"
                  >
                    Solicitar Demonstração Técnica
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link 
                    to="/" 
                    className="inline-flex items-center px-6 py-3 border border-blue-300 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
                  >
                    Explorar Nossa Tecnologia
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DevelopmentProcess;
