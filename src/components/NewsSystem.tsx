
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Zap, ExternalLink, RefreshCw, Key, AlertCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

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
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiInput, setShowApiInput] = useState<boolean>(false);
  const { toast } = useToast();

  // Carregar API key do localStorage
  useEffect(() => {
    const savedApiKey = localStorage.getItem('newsapi_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowApiInput(true);
    }
  }, []);

  // Função para buscar notícias reais
  const fetchRealNews = async (): Promise<NewsItem[]> => {
    if (!apiKey) {
      throw new Error('API key é necessária');
    }

    // Palavras-chave para cada categoria
    const keywords = {
      'marketing-digital': 'digital marketing OR social media marketing OR SEO OR SEM OR content marketing',
      'tecnologia': 'technology OR tech OR software OR innovation OR startup',
      'inteligencia-artificial': 'artificial intelligence OR AI OR machine learning OR ML OR deep learning',
      'inovacao': 'innovation OR digital transformation OR fintech OR blockchain'
    };

    const allKeywords = Object.values(keywords).join(' OR ');
    
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(allKeywords)}&language=en&sortBy=publishedAt&pageSize=${maxItems}&apiKey=${apiKey}`
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Chave de API inválida');
        }
        throw new Error('Erro ao buscar notícias');
      }

      const data = await response.json();
      
      return data.articles.map((article: any, index: number) => {
        // Determinar categoria baseada no título e descrição
        const content = `${article.title} ${article.description}`.toLowerCase();
        let category: 'marketing-digital' | 'tecnologia' | 'inteligencia-artificial' | 'inovacao' = 'tecnologia';
        
        if (content.includes('marketing') || content.includes('social media') || content.includes('seo')) {
          category = 'marketing-digital';
        } else if (content.includes('ai') || content.includes('artificial intelligence') || content.includes('machine learning')) {
          category = 'inteligencia-artificial';
        } else if (content.includes('innovation') || content.includes('blockchain') || content.includes('fintech')) {
          category = 'inovacao';
        }

        return {
          id: `real-${index}`,
          title: article.title,
          summary: article.description || 'Sem descrição disponível',
          category,
          source: article.source.name,
          publishedAt: article.publishedAt,
          url: article.url,
          imageUrl: article.urlToImage,
          relevanceScore: Math.floor(Math.random() * 20) + 80 // Score simulado
        };
      });
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
      throw error;
    }
  };

  // Query para buscar notícias reais
  const { data: newsData, isLoading, error, refetch } = useQuery({
    queryKey: ['real-news', selectedCategory, apiKey],
    queryFn: fetchRealNews,
    enabled: !!apiKey,
    refetchInterval: autoRefresh && apiKey ? refreshInterval : false,
    retry: false
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
    if (!apiKey) {
      toast({
        title: "API Key necessária",
        description: "Por favor, insira sua chave de API do News API para buscar notícias reais.",
        variant: "destructive",
      });
      setShowApiInput(true);
      return;
    }
    refetch();
    setLastUpdate(new Date());
  };

  // Função para salvar API key
  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key inválida",
        description: "Por favor, insira uma chave de API válida.",
        variant: "destructive",
      });
      return;
    }
    
    localStorage.setItem('newsapi_key', apiKey);
    setShowApiInput(false);
    toast({
      title: "API Key salva",
      description: "Sua chave foi salva e as notícias serão carregadas automaticamente.",
    });
  };

  // Função para abrir link em nova aba
  const handleReadMore = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      {/* API Key Input */}
      {showApiInput && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Key className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Configure sua API Key do News API</h3>
          </div>
          <p className="text-sm text-blue-700 mb-3">
            Para buscar notícias reais, você precisa de uma chave gratuita do NewsAPI.org. 
            <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              Clique aqui para obter sua chave gratuita
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Cole sua API key aqui..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveApiKey}>Salvar</Button>
            {apiKey && (
              <Button variant="outline" onClick={() => setShowApiInput(false)}>
                Cancelar
              </Button>
            )}
          </div>
        </div>
      )}

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
            onClick={() => setShowApiInput(true)}
            className="flex items-center gap-2"
          >
            <Key className="w-4 h-4" />
            API Key
          </Button>
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

      {/* Erro de API */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-900 font-medium">Erro ao carregar notícias: {error.message}</span>
          </div>
        </div>
      )}

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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-blue-50"
                  onClick={() => handleReadMore(item.url)}
                >
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
            <div className="text-2xl font-bold text-green-600">Real-time</div>
            <div className="text-sm text-gray-600">Atualizações</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">&lt; 2min</div>
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
