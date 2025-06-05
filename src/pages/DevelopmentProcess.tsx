
import { ArrowLeft, CheckCircle, Clock, TrendingUp, Target, Users, Zap, ArrowUp, BarChart3, Check, ArrowRight } from 'lucide-react';
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
    title: "Pesquisa e Benchmarking Digital",
    description: "Iniciamos com uma profunda análise de mercado e pesquisa de concorrência, que nos permite identificar oportunidades e definir os KPIs mais relevantes para sua campanha digital.",
    steps: ["Análise de requisitos do setor e público-alvo", "Benchmarking de campanhas de sucesso no mercado", "Definição de metas personalizadas baseadas em métricas digitais", "Mapeamento da jornada do cliente e pontos de conversão"]
  }, {
    id: 2,
    title: "Planejamento Estratégico & Prototipagem Digital",
    description: "Desenvolvemos uma estratégia digital personalizada, definindo os canais ideais, segmentando o público e criando protótipos de campanhas digitais para testes A/B.",
    steps: ["Criação de wireframes de campanhas e landing pages", "Desenvolvimento de protótipos para testar abordagens e mensagens", "Planejamento de jornadas do cliente focadas na conversão", "Segmentação avançada de audiências por comportamento"]
  }, {
    id: 3,
    title: "Implementação & Integração de Dados",
    description: "Implementamos a campanha digital utilizando uma plataforma integrada, que conecta dados de múltiplos canais e oferece análises em tempo real para ajustes imediatos.",
    steps: ["Configuração de ferramentas de coleta e análise de dados", "Integração com sistemas de automação e CRM", "Implementação de pixels de conversão e tracking", "Monitoramento e ajustes com base em performance contínua"]
  }, {
    id: 4,
    title: "Otimização & Escalabilidade",
    description: "Trabalhamos em ciclos contínuos de otimização, utilizando testes A/B e análises de performance para refinar as estratégias e melhorar o ROI continuamente.",
    steps: ["Análise de métricas de desempenho e feedback dos usuários", "Ajustes e refinamento de criativos e mensagens", "Testes A/B de elementos de conversão", "Escala gradual das campanhas com base em dados validados"]
  }, {
    id: 5,
    title: "Acompanhamento Contínuo & Suporte Personalizado",
    description: "Oferecemos suporte completo e acompanhamento constante, com treinamento sobre interpretação de dados e orientações estratégicas para autonomia total.",
    steps: ["Treinamentos e onboarding para equipes internas", "Suporte técnico e consultoria estratégica regular", "Relatórios periódicos e reuniões de análise de resultados", "Otimização contínua baseada em insights de mercado"]
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
              Nossa abordagem para criar estratégias personalizadas de marketing digital que transformam dados em resultados.
            </p>
            
            <div className="prose prose-lg max-w-none">
              {/* Introdução Impactante */}
              <div className="bg-blue-50 p-8 rounded-lg mb-12 border border-blue-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Você está pronto para transformar cada clique em uma estratégia vencedora?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossa metodologia de desenvolvimento digital garante que cada insight se converta em vantagem 
                  competitiva. Cada fase foi cuidadosamente projetada para maximizar resultados e minimizar riscos, 
                  transformando dados em estratégias personalizadas de alto desempenho.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Refinamos nossa abordagem para criar campanhas digitais que superam expectativas, garantindo que 
                  cada investimento em marketing digital gere o máximo retorno possível através de uma metodologia 
                  data-driven e orientada por resultados.
                </p>
              </div>

              {/* Visão Geral do Processo */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Nosso Processo Estruturado de Desenvolvimento Digital – Visão Geral
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Nossa abordagem foi refinada para minimizar riscos e maximizar a inovação em campanhas digitais. 
                Trabalhamos com uma metodologia data-driven que integra análise de dados, personalização de campanhas 
                e feedback em tempo real, transformando insights em estratégias vencedoras que elevam sua presença 
                digital a um novo patamar de performance.
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Princípios do Nosso Processo de Desenvolvimento Digital</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Iteração Rápida</h4>
                      <p className="text-gray-700 text-sm">Testes constantes de criativos e mensagens para otimização imediata</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transparência Total</h4>
                      <p className="text-gray-700 text-sm">Comunicação aberta e relatórios em tempo real durante todo o processo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Arquitetura Modular</h4>
                      <p className="text-gray-700 text-sm">Estratégias adaptáveis, personalizadas e escaláveis para cada campanha</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Foco nos Dados</h4>
                      <p className="text-gray-700 text-sm">Utilização de insights analíticos para decisões estratégicas que maximizam resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Experiência do Cliente</h4>
                      <p className="text-gray-700 text-sm">Priorização da jornada do cliente para alcançar o maior engajamento e conversão possível</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios por Etapa */}
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Benefícios de Cada Etapa</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Pesquisa e Benchmarking</h4>
                  <p className="text-gray-600 text-sm">Estratégias totalmente alinhadas às necessidades do seu negócio e adaptadas para um ambiente competitivo.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Planejamento Estratégico</h4>
                  <p className="text-gray-600 text-sm">Validação rápida de ideias e redução de riscos antes do lançamento em larga escala.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Implementação Integrada</h4>
                  <p className="text-gray-600 text-sm">Maximização dos resultados das campanhas e tomada de decisões estratégicas com agilidade.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <ArrowUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Otimização Contínua</h4>
                  <p className="text-gray-600 text-sm">Aumento contínuo da eficiência e dos resultados, garantindo máximo retorno sobre investimento.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Suporte Personalizado</h4>
                  <p className="text-gray-600 text-sm">Transparência total e melhoria contínua, assegurando o sucesso sustentável de suas estratégias digitais.</p>
                </div>
              </div>
              
              {/* Conclusão e CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-white mt-12">
                <h3 className="text-2xl font-bold mb-4">
                  Nossa abordagem meticulosa garante excelência em cada etapa digital
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Nosso processo estruturado de desenvolvimento digital é a base para criar estratégias completamente 
                  personalizadas, que transformam insights em resultados reais e mensuráveis. Cada etapa trabalha 
                  em conjunto para transformar dados em resultados e campanhas digitais em verdadeiras histórias de sucesso.
                </p>
                <p className="text-xl font-semibold mb-4">
                  Quer descobrir como nossa metodologia pode impulsionar suas campanhas?
                </p>
                <p className="text-blue-100 mb-6">
                  Solicite agora uma demonstração personalizada e veja a inovação em ação. Descubra como transformamos 
                  cada dado em uma vantagem competitiva para o seu negócio.
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
                    Explorar Nossa Plataforma
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
