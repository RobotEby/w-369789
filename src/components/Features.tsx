import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "E-commerce Performance",
      description: "Campanhas especializadas que analisam comportamento de compra, otimizam conversões e maximizam o valor do carrinho em plataformas digitais.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "B2B & Corporativo",
      description: "Estratégias de captação de leads qualificados com funis de nutrição avançados para decisores corporativos e vendas consultivas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Serviços Profissionais",
      description: "Campanhas direcionadas que identificam prospects, monitoram jornadas e convertem interessados em clientes através de automação inteligente.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Otimização Dinâmica",
      description: "Algoritmos de machine learning que respondem em tempo real aos dados de campanha e comportamento do usuário para maximizar ROI.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const sensorCaseStudies = [
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "E-commerce Fashion",
      description: "Campanhas multi-canal com segmentação avançada, retargeting dinâmico e otimização de conversão para aumentar vendas online."
    }, 
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "B2B SaaS Corporativo",
      description: "Estratégias de captação de leads qualificados com funis de nutrição, scoring de leads e automação de vendas para decisores."
    }, 
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Serviços Profissionais",
      description: "Campanhas direcionadas com análise comportamental, jornadas personalizadas e automação que converte prospects em clientes."
    },
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Fintech Digital",
      description: "Campanhas de aquisição para plataformas financeiras com segmentação comportamental, scoring preditivo e automação de remarketing, reduzindo CPL em –35%."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Educação Online",
      description: "Estratégias omnichannel para captação de alunos EAD: anúncios sociais, search ads otimizados e e-mail drip com taxa de abertura +50%."
    },
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Turismo & Viagens",
      description: "Promoções multicanal integrando display, social e programática, gerando +42% em reservas e reduzindo CPA em –28% durante alta temporada."
    }
  ];
  
  const stepFlowItems = [
    {
      icon: <Microchip className="h-10 w-10 text-gray-700" />,
      title: "Estratégias Proprietárias",
      description: "Metodologias exclusivas desenvolvidas internamente"
    }, {
      icon: <Factory className="h-10 w-10 text-gray-700" />,
      title: "Ferramentas Premium Validadas",
      description: "Plataformas e tecnologias cuidadosamente selecionadas"
    }, {
      icon: <Handshake className="h-10 w-10 text-gray-700" />,
      title: "Parceiros de Implementação",
      description: "Rede de especialistas para execução e qualidade"
    }
  ];
  
  const sprintPhases = [
    {
      name: "Planejamento",
      icon: <CheckCircle className="h-4 w-4" />
    }, {
      name: "Desenvolvimento",
      icon: <Code className="h-4 w-4" />
    }, {
      name: "Testes",
      icon: <Box className="h-4 w-4" />
    }, {
      name: "Otimização",
      icon: <RefreshCcw className="h-4 w-4" />
    }
  ];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Estratégias de Marketing Digital
            </div>
            <p className="text-gray-600 mt-4">
              Nossas estratégias de tráfego pago transformam campanhas comuns em máquinas de conversão que coletam dados, monitoram performance e potencializam resultados em diversos setores.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-black/40" 
                      : hoveredFeature === index 
                        ? "bg-black/50" 
                        : "bg-black/70"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Deslize" : "Role"} para continuar • Pressione ESC para sair
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Cases de Sucesso em Marketing Digital
              </div>
              <h3 className="text-2xl font-bold">Aplicações Reais no Mercado</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Explore como nossas estratégias de tráfego pago são aplicadas em diferentes contextos profissionais, 
                desde e-commerce até serviços B2B e captação de leads qualificados.
                <span className="block text-sm mt-1 text-blue-500">Role horizontalmente para ver mais exemplos →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-6 feature-item shadow-sm border border-gray-100">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {sensorCaseStudies.map((study, index) => 
                    <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0 pl-4">
                      <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardContent className="p-0 h-full flex flex-col">
                          <div className="w-full h-48 overflow-hidden">
                            <AspectRatio ratio={16/9} className="bg-gray-100">
                              <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                              />
                            </AspectRatio>
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="font-semibold text-lg text-gray-900 mb-3 leading-tight">{study.title}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{study.description}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                Case de Sucesso
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-3">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100 border-gray-300" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100 border-gray-300" />
                </div>
              </Carousel>
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 font-medium">
                  Estes exemplos mostram apenas algumas formas de nossas estratégias potencializarem performance e conversões
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Precisa de Estratégias Personalizadas?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.location.href = '/metodologia'} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Saiba Mais Sobre Nossa Metodologia
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="technology" className="relative bg-primary py-20 overflow-hidden">
        {/* Professional background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-wrlds-dark to-primary"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-wrlds-teal rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-wrlds-accent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-muted rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="w-full px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-primary-foreground mb-8 shadow-lg">
              <Microchip className="w-5 h-5 mr-3 text-wrlds-teal" />
              Nossa Metodologia Exclusiva
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary-foreground leading-tight">
              Estratégia que <span className="bg-gradient-to-r from-wrlds-teal to-wrlds-accent bg-clip-text text-transparent">Transforma</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Combinamos estratégias proprietárias com tecnologia avançada para criar campanhas que superam expectativas e geram resultados excepcionais para nossos clientes.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-wrlds-teal mb-2">+250%</div>
                <div className="text-muted-foreground">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-wrlds-accent mb-2">48h</div>
                <div className="text-muted-foreground">Setup Completo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-wrlds-teal mb-2">99.8%</div>
                <div className="text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
          
          {/* Interactive Process Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {stepFlowItems.map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Card number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-wrlds-teal to-wrlds-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="flex flex-col items-center text-center pt-4">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-full p-6 mb-6 transition-all duration-300 group-hover:scale-110 border border-white/10">
                      <div className="text-wrlds-teal">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    
                    {/* Interactive button */}
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-wrlds-teal to-wrlds-accent text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Process Flow */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">Processo de Desenvolvimento</h3>
                <p className="text-muted-foreground text-lg">Acompanhe o progresso em tempo real</p>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-wrlds-teal to-wrlds-accent rounded-full p-3">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary-foreground">Projeto Ativo</h4>
                      <p className="text-muted-foreground">Sprint {currentSprint} de {totalSprints}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-muted-foreground font-medium">Status:</span>
                    <span className="px-3 py-1 bg-wrlds-teal/20 text-wrlds-teal rounded-full text-sm font-medium border border-wrlds-teal/30">
                      Em Desenvolvimento
                    </span>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Progress value={progressValue} className="h-3 bg-white/10 rounded-full overflow-hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {sprintPhases.map((phase, index) => (
                    <div key={index} className={cn("text-center p-4 rounded-xl transition-all duration-300 border", 
                      progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 
                        ? "bg-gradient-to-br from-wrlds-teal/20 to-wrlds-accent/20 border-wrlds-teal/50 shadow-lg scale-105" 
                        : "bg-white/5 border-white/10")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-3 mb-3 transition-all duration-300", 
                          progressValue >= index / sprintPhases.length * 100 
                            ? "bg-gradient-to-r from-wrlds-teal to-wrlds-accent text-primary-foreground shadow-lg" 
                            : "bg-white/10 text-muted-foreground")}>
                          {phase.icon}
                        </div>
                        <span className="text-sm font-semibold text-primary-foreground">{phase.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-wrlds-teal/20 rounded-full p-2">
                      <CheckCircle className="h-5 w-5 text-wrlds-teal" />
                    </div>
                    <span className="text-primary-foreground font-medium">Feedback integrado automaticamente</span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <span className="mr-3 font-medium">Otimização contínua</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-wrlds-teal rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-wrlds-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                      <span className="inline-block w-2 h-2 bg-wrlds-teal rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 text-center border border-white/20 relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            
            <div className="relative">
              <div className="inline-block mb-8">
                <div className="bg-gradient-to-r from-wrlds-teal to-wrlds-accent rounded-full p-8 shadow-2xl">
                  <Rocket className="h-16 w-16 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-primary-foreground mb-6">Resultados Garantidos</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sua campanha estará pronta para dominar o mercado e gerar conversões excepcionais
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wrlds-teal mb-2">Conversões</div>
                  <div className="text-muted-foreground">Otimizadas para máximo ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wrlds-accent mb-2">Escalabilidade</div>
                  <div className="text-muted-foreground">Crescimento sustentável</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wrlds-teal mb-2">Performance</div>
                  <div className="text-muted-foreground">Monitoramento contínuo</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button 
                onClick={scrollToContact} 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-wrlds-teal to-wrlds-accent hover:from-wrlds-dark hover:to-wrlds-teal text-primary-foreground rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center font-semibold text-lg"
              >
                Começar Meu Projeto
                <MessageSquare className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Link 
                to="/tech-details" 
                onClick={() => window.scrollTo(0, 0)} 
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-primary-foreground rounded-xl border border-white/20 hover:bg-white/20 hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center font-semibold text-lg"
              >
                Detalhes Técnicos
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-muted-foreground mt-6 text-sm">
              * Resultados baseados em mais de 500 projetos executados
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
