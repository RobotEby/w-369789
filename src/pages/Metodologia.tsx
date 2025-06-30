
import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Zap, BarChart3, Settings, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Metodologia = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Metodologia de Marketing Digital | CBAAP"
        description="Descubra nossa metodologia de marketing digital passo a passo. Data-driven, omnichannel, automação e otimização contínua."
        keywords={['metodologia marketing digital', 'estratégia data-driven', 'automação marketing', 'omnichannel', 'ROI', 'campanhas digitais']}
      />
      
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Saiba Mais Sobre Nossa Metodologia
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Em um mercado digital cada vez mais competitivo, ter uma metodologia estruturada e comprovada 
                é o diferencial entre campanhas que apenas gastam orçamento e aquelas que geram resultados 
                exponenciais.
              </p>
              <p className="text-xl text-blue-600 font-semibold">
                Você está pronto para descobrir o passo a passo que garante campanhas digitais de alta performance?
              </p>
            </div>
          </header>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossos Pilares Metodológicos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Estratégia Data-Driven</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Coletamos e analisamos dados comportamentais, demográficos e de performance para orientar 
                  cada decisão estratégica. Nada é feito por achismo - tudo é baseado em evidências concretas 
                  que maximizam o retorno sobre investimento.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Maximização de ROI com base em métricas reais
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Planejamento Omnichannel</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Alinhamos todos os canais digitais e offline em uma estratégia única e coesa. Garantimos 
                  que sua marca entregue uma experiência consistente em cada ponto de contato com o cliente, 
                  desde o primeiro clique até a conversão final.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Jornada de cliente consistente em todos os pontos de contato
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Testes e Iteração Rápida</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Implementamos testes A/B rigorosos, experimentos controlados e ciclos de otimização contínua. 
                  Cada elemento das campanhas é testado e refinado para garantir performance máxima e 
                  eliminação de desperdícios de orçamento.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Redução de custos e eliminação de hipóteses ineficazes
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Automação Inteligente</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Utilizamos workflows automatizados, sequências de nutrição e gatilhos comportamentais 
                  para criar experiências personalizadas em escala. Cada lead recebe o conteúdo certo, 
                  no momento certo, através do canal mais eficaz.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Nurturing escalável que aumenta a conversão sem esforço manual
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fases do Nosso Processo</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnóstico Inicial</h3>
                  <p className="text-gray-600 mb-2">
                    Realizamos análise profunda do mercado, mapeamento da concorrência e definição de KPIs 
                    específicos para seu negócio. Identificamos oportunidades de crescimento e pontos de 
                    melhoria na presença digital atual.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Relatório detalhado com oportunidades e ameaças
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Conceito e Roadmap</h3>
                  <p className="text-gray-600 mb-2">
                    Desenvolvemos conceitos criativos únicos, definimos personas detalhadas e criamos 
                    cronograma de execução personalizado. Cada campanha é planejada com base em insights 
                    comportamentais e objetivos específicos de conversão.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Visão clara do ciclo de cada campanha
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementação e Integração</h3>
                  <p className="text-gray-600 mb-2">
                    Configuramos todas as ferramentas necessárias: pixels de rastreamento, integração com CRM, 
                    configuração de plataformas de anúncios e implementação de dashboards personalizados. 
                    Setup técnico completo para máxima eficiência.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Setup ágil em até 5 dias úteis
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoramento e Ajustes</h3>
                  <p className="text-gray-600 mb-2">
                    Acompanhamento diário dos principais KPIs com alertas automáticos para desvios de performance. 
                    Nossa equipe monitora em tempo real e implementa ajustes estratégicos para manter campanhas 
                    sempre otimizadas.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Ações corretivas em 24h quando necessário
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Relatórios e Feedback</h3>
                  <p className="text-gray-600 mb-2">
                    Entregamos relatórios periódicos detalhados com análises de performance, insights acionáveis 
                    e recomendações estratégicas. Reuniões regulares de alinhamento garantem transparência total 
                    no processo.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Transparência total e recomendação de próximos passos
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ferramentas e Tecnologias</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="text-gray-600 mb-4">
                Utilizamos as mais avançadas ferramentas e tecnologias do mercado para garantir 
                máxima eficiência e precisão em nossas campanhas:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Google Analytics 4 e Google Tag Manager
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Google Ads, Meta Ads e LinkedIn Ads
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Plataformas de automação (HubSpot, ActiveCampaign)
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Dashboards customizados (Power BI, Data Studio)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    APIs de dados e integração com CRM
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Ferramentas de teste A/B e heatmaps
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Estudos de Caso</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/#features" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">E-commerce Fashion</h3>
                <p className="text-gray-600 text-sm">
                  Veja como aumentamos as conversões em 150% durante a Black Friday com estratégias multicanal.
                </p>
              </Link>
              <Link to="/#features" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">B2B SaaS Corporativo</h3>
                <p className="text-gray-600 text-sm">
                  Descubra como geramos 1.200 leads qualificados em 90 dias com funis de nutrição avançados.
                </p>
              </Link>
              <Link to="/#features" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Fintech Digital</h3>
                <p className="text-gray-600 text-sm">
                  Conheça nossa estratégia que conquistou 12.500 cadastros em 4 meses com programa de referrals.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Por que Funciona</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Nossa metodologia funciona porque combina o melhor dos três mundos: <strong>dados precisos</strong> 
                para orientar decisões, <strong>criatividade estratégica</strong> para engajar audiências e 
                <strong>tecnologia avançada</strong> para automatizar e escalar resultados.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Metodologia validada que garante +30% de eficiência</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Ciclos de melhoria contínua para ROI sustentável</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Equipe dedicada com especialistas em cada canal</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-gray-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Conclusão e Chamada à Ação</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Agora que você conhece nossa metodologia comprovada, está pronto para transformar seus resultados 
              digitais? Nossa equipe está preparada para aplicar cada uma dessas estratégias no seu negócio.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Quero Aplicar Essa Metodologia
            </Button>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Metodologia;
