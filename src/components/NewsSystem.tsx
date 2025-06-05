
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Zap, ExternalLink, RefreshCw } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: 'marketing-digital' | 'tecnologia' | 'inteligencia-artificial' | 'inovacao';
  source: string;
  publishedAt: string;
  url: string;
  imageUrl?: string;
  relevanceScore: number;
}

interface NewsSystemProps {
  maxItems?: number;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const NewsSystem: React.FC<NewsSystemProps> = ({ 
  maxItems = 12, 
  autoRefresh = true, 
  refreshInterval = 900000 // 15 minutos
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Simulação de dados de notícias (em produção, isso viria de uma API real)
  const mockNewsData: NewsItem[] = [
    {
      id: '1',
      title: 'Google lança nova ferramenta de IA para otimização de campanhas publicitárias',
      summary: 'A nova funcionalidade utiliza machine learning avançado para prever comportamentos do consumidor e ajustar lances automaticamente, prometendo aumentar o ROI em até 35%.',
      category: 'marketing-digital',
      source: 'TechCrunch Brasil',
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      url: '#',
      imageUrl: '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
      relevanceScore: 95
    },
    {
      id: '2',
      title: 'ChatGPT-4 Turbo: Revolucionando a criação de conteúdo para marketing',
      summary: 'A nova versão do ChatGPT oferece capacidades avançadas de criação de copy, análise de sentimentos e personalização de mensagens para diferentes segmentos de público.',
      category: 'inteligencia-artificial',
      source: 'AI News Brasil',
      publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      url: '#',
      imageUrl: '/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png',
      relevanceScore: 92
    },
    {
      id: '3',
      title: 'Meta anuncia novas métricas de attribution para iOS 17',
      summary: 'Após mudanças na política de privacidade da Apple, Meta desenvolve soluções inovadoras para tracking e attribution, mantendo a eficácia das campanhas publicitárias.',
      category: 'tecnologia',
      source: 'Marketing Tech',
      publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      url: '#',
      imageUrl: '/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png',
      relevanceScore: 88
    },
    {
      id: '4',
      title: 'Análise preditiva em tempo real: O futuro do e-commerce',
      summary: 'Novas tecnologias de análise de dados permitem prever comportamentos de compra com 94% de precisão, revolucionando estratégias de remarketing e personalização.',
      category: 'inovacao',
      source: 'E-commerce Brasil',
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      url: '#',
      imageUrl: '/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png',
      relevanceScore: 90
    },
    {
      id: '5',
      title: 'TikTok Business lança API para automação de campanhas',
      summary: 'Nova API permite integração direta com ferramentas de marketing automation, facilitando a criação e otimização de campanhas em larga escala na plataforma.',
      category: 'marketing-digital',
      source: 'Social Media Today',
      publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      url: '#',
      relevanceScore: 85
    },
    {
      id: '6',
      title: 'Blockchain revoluciona programatic advertising',
      summary: 'Implementação de tecnologia blockchain em programmatic advertising garante maior transparência e reduz fraudes publicitárias em até 78%.',
      category: 'tecnologia',
      source: 'AdTech Weekly',
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      url: '#',
      relevanceScore: 82
    }
  ];

  // Query para buscar notícias (simulando uma API)
  const { data: newsData, isLoading, refetch } = useQuery({
    queryKey: ['news', selectedCategory],
    queryFn: async () => {
      // Simula delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockNewsData;
    },
    refetchInterval: autoRefresh ? refreshInterval : false,
  });

  // Filtrar notícias por categoria
  const filteredNews = newsData?.filter(item => 
    selectedCategory === 'todas' || item.category === selectedCategory
  ).slice(0, maxItems) || [];

  // Categorias disponíveis
  const categories = [
    { id: 'todas', label: 'Todas as Notícias', icon: TrendingUp },
    { id: 'marketing-digital', label: 'Marketing Digital', icon: Zap },
    { id: 'inteligencia-artificial', label: 'Inteligência Artificial', icon: Zap },
    { id: 'tecnologia', label: 'Tecnologia', icon: Zap },
    { id: 'inovacao', label: 'Inovação', icon: Zap }
  ];

  // Função para formatação de tempo
  const timeAgo = (dateString: string) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Agora mesmo';
    if (diffHours < 24) return `${diffHours}h atrás`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d atrás`;
  };

  // Função para atualização manual
  const handleRefresh = () => {
    refetch();
    setLastUpdate(new Date());
  };

  return (
    <div className="w-full">
      {/* Header da seção */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Últimas Atualizações</h2>
          <p className="text-gray-600">
            Notícias em tempo real sobre marketing digital, tecnologia e inovação
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            Atualizado: {lastUpdate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Filtros por categoria */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid de notícias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2" />
              </CardContent>
            </Card>
          ))
        ) : (
          filteredNews.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              {item.imageUrl && (
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                >
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {item.category.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="bg-green-600">
                      {item.relevanceScore}% relevante
                    </Badge>
                  </div>
                </div>
              )}
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{timeAgo(item.publishedAt)}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.summary}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ler Matéria Completa
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Estatísticas do sistema */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{filteredNews.length}</div>
            <div className="text-sm text-gray-600">Notícias Hoje</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <div className="text-sm text-gray-600">Precisão IA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">< 2min</div>
            <div className="text-sm text-gray-600">Latência</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Monitoramento</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSystem;
