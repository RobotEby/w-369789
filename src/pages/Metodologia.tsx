
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, BarChart3, Target, Zap, Settings, Search, FileText, Monitor, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Metodologia = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    window.location.href = '/#features';
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Metodologia de Marketing Digital | CBAAP</title>
        <meta name="description" content="Descubra nossa metodologia de marketing digital passo a passo. Data-driven, omnichannel, automação e otimização contínua." />
        <meta property="og:title" content="Metodologia de Marketing Digital | CBAAP" />
        <meta property="og:description" content="Descubra nossa metodologia de marketing digital passo a passo. Data-driven, omnichannel, automação e otimização contínua." />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Saiba Mais Sobre Nossa Metodologia
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Uma metodologia estruturada é o diferencial que separa campanhas comuns de resultados extraordinários em marketing digital. 
                Nossa abordagem sistemática garante que cada estratégia seja baseada em dados, testada e otimizada para máxima performance.
              </p>
              <p className="text-lg text-blue-600 font-medium">
                Você está pronto para descobrir o passo a passo que garante campanhas digitais de alta performance?
              </p>
            </div>
          </div>

          {/* Pilares Metodológicos */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nossos Pilares Metodológicos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Estratégia Data-Driven</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Coletamos e analisamos dados de múltiplas fontes para orientar cada decisão estratégica. 
                    Utilizamos ferramentas avançadas de análise para identificar padrões, oportunidades e 
                    otimizar campanhas com base em insights reais do comportamento do usuário.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Maximização de ROI com base em métricas reais.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Planejamento Omnichannel</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Integramos todos os canais digitais e offline em uma estratégia unificada. 
                    Criamos jornadas consistentes que acompanham o cliente em cada ponto de contato, 
                    garantindo mensagens alinhadas e experiências seamless.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Jornada de cliente consistente em todos os pontos de contato.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Testes e Iteração Rápida</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Implementamos testes A/B contínuos e experimentos controlados para validar hipóteses. 
                    Nossos ciclos de otimização são ágeis, permitindo ajustes rápidos baseados em performance 
                    real e eliminando investimentos em estratégias ineficazes.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Redução de custos e eliminação de hipóteses ineficazes.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Settings className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Automação Inteligente</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Desenvolvemos workflows automatizados que nutrem leads, segmentam audiências e 
                    disparam ações baseadas em comportamentos específicos. Nossa automação inteligente 
                    escala resultados sem comprometer a personalização.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Nurturing escalável que aumenta a conversão sem esforço manual.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fases do Processo */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Fases do Nosso Processo
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico Inicial</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Realizamos análise profunda do mercado, concorrência e situação atual da marca. 
                    Definimos KPIs específicos e identificamos oportunidades de crescimento baseadas em dados reais.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Relatório detalhado com oportunidades e ameaças.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conceito e Roadmap</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Desenvolvemos conceitos criativos alinhados às personas definidas e criamos cronograma 
                    detalhado de execução com marcos e entregas específicas.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Visão clara do ciclo de cada campanha.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Implementação e Integração</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Configuramos todas as ferramentas necessárias: pixels de rastreamento, integração com CRM, 
                    configuração de plataformas de anúncios e sistemas de automação.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Setup ágil em até 5 dias úteis.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoramento e Ajustes</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Acompanhamos diariamente todos os KPIs definidos e realizamos ajustes em tempo real 
                    para otimizar performance e maximizar resultados.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Ações corretivas em 24h quando necessário.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Relatórios e Feedback</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Entregamos relatórios periódicos com análises detalhadas e realizamos reuniões 
                    de alinhamento para discutir resultados e próximos passos.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">▶</span>
                    <span>Transparência total e recomendação de próximos passos.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ferramentas e Tecnologias */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Ferramentas e Tecnologias
            </h2>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>Google Analytics 4</strong> - Análise avançada de comportamento</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>Google Ads, Meta Ads e LinkedIn Ads</strong> - Gestão de campanhas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>HubSpot e ActiveCampaign</strong> - Automação de marketing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>Power BI e Data Studio</strong> - Dashboards personalizados</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>APIs de dados</strong> - Integração com CRM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span><strong>Ferramentas de A/B Testing</strong> - Otimização contínua</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Estudos de Caso */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Estudos de Caso
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6 text-center">
                Veja como nossa metodologia gerou resultados comprovados em diferentes setores:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <button 
                  onClick={scrollToFeatures}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    E-commerce Fashion
                  </h4>
                  <p className="text-sm text-gray-600">
                    Campanhas multi-canal com segmentação avançada e retargeting dinâmico
                  </p>
                </button>

                <button 
                  onClick={scrollToFeatures}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    B2B SaaS Corporativo
                  </h4>
                  <p className="text-sm text-gray-600">
                    Estratégias de captação com funis de nutrição e scoring de leads
                  </p>
                </button>

                <button 
                  onClick={scrollToFeatures}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Fintech Digital
                  </h4>
                  <p className="text-sm text-gray-600">
                    Campanhas de aquisição com segmentação comportamental e scoring preditivo
                  </p>
                </button>
              </div>
            </div>
          </section>

          {/* Por que Funciona */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Por que Funciona
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
                Nossa metodologia combina a <strong>precisão dos dados</strong>, a <strong>criatividade estratégica</strong> 
                e a <strong>potência da tecnologia</strong> para criar campanhas que não apenas geram resultados, 
                mas estabelecem vantagens competitivas sustentáveis no mercado digital.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="flex items-center justify-center text-blue-600 font-medium mb-2">
                    <span className="mr-2">▶</span>
                    <span className="text-lg font-bold">+30% de Eficiência</span>
                  </div>
                  <p className="text-gray-600 text-sm">Metodologia validada com resultados comprovados</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="flex items-center justify-center text-blue-600 font-medium mb-2">
                    <span className="mr-2">▶</span>
                    <span className="text-lg font-bold">ROI Sustentável</span>
                  </div>
                  <p className="text-gray-600 text-sm">Ciclos de melhoria contínua para crescimento duradouro</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="flex items-center justify-center text-blue-600 font-medium mb-2">
                    <span className="mr-2">▶</span>
                    <span className="text-lg font-bold">Especialistas Dedicados</span>
                  </div>
                  <p className="text-gray-600 text-sm">Equipe especializada em cada canal digital</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusão e CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pronto Para Transformar Seus Resultados?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nossa metodologia comprovada está pronta para potencializar sua presença digital e gerar 
              resultados mensuráveis para seu negócio. Descubra como podemos aplicar essa estratégia 
              personalizada aos seus objetivos específicos.
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              Quero Aplicar Essa Metodologia
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};

export default Metodologia;
