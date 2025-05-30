
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Target, Users, TrendingUp, BarChart3, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="GERAÇÃO DE LEADS B2B ESPORTIVO"
      subtitle="Revolução inteligente na captação de leads qualificados através de inovação data-driven para o setor esportivo"
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      brandName="Líder Global em Varejo Esportivo"
    >
      <SEO 
        title="CBAAP - Geração de Leads B2B Esportivo" 
        description="Como transformamos dados de desenvolvimento de calçados esportivos em uma poderosa máquina de geração de leads qualificados para parcerias estratégicas B2B."
        type="article"
      />
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Você está preparado para transformar cada insight digital em uma oportunidade estratégica de crescimento?</h3>
        <p className="text-gray-800 leading-relaxed">
          Imagine uma solução que não só transforma o modo como os produtos são desenvolvidos, mas também se torna 
          a chave para abrir portas em novos mercados. Com nossa abordagem integrada, cada detalhe – do movimento 
          à pressão – é monitorado em tempo real, revelando insights que impulsionam decisões estratégicas e geram 
          leads qualificados para parcerias B2B de alto valor no setor esportivo.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Case Study: Geração de Leads B2B para Calçados Esportivos Inteligentes</h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contexto e Histórico</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Uma das maiores líderes globais em varejo esportivo, reconhecida pela inovação, buscava transformar 
        completamente seu processo de desenvolvimento de calçados. A intenção era integrar dados precisos e 
        análises em tempo real para criar produtos que não só otimizassem o desempenho dos atletas, mas também 
        acelerassem o ciclo de desenvolvimento – um diferencial que abriria novas oportunidades de negócios e 
        parcerias estratégicas no ambiente B2B.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">O Desafio que Limitava o Crescimento</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Os métodos convencionais dependiam de avaliações subjetivas e testes limitados, o que impedia a obtenção 
        de dados confiáveis e a agilidade necessária para ajustar estratégias – um problema crítico também no 
        mundo dos negócios, onde a ausência de informações em tempo real limita drasticamente a capacidade de 
        gerar leads qualificados e estabelecer parcerias duradouras. A falta de dados precisos estava custando 
        oportunidades valiosas de mercado.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">A Solução que Redefine a Geração de Leads B2B</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Desenvolvemos uma plataforma inteligente que integra sensores embutidos, análise em tempo real e inteligência 
        artificial – uma solução que coleta dados precisos sobre movimentos, pressão e desempenho. Essa mesma abordagem 
        foi repensada para o ambiente corporativo, permitindo que empresas B2B utilizem esses insights para personalizar 
        campanhas, otimizar investimentos e, sobretudo, gerar leads qualificados com precisão cirúrgica.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Target className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Sensores Integrados e Coleta de Dados</h4>
            <p className="text-gray-700">Sensores têxteis de alta precisão que monitoram cada movimento e pressão, transformando informações comportamentais em dados acionáveis para segmentação avançada de leads.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Análise em Tempo Real e IA</h4>
            <p className="text-gray-700">Feedback instantâneo sobre métricas de performance, permitindo ajustes imediatos nas estratégias de captação e personalização de campanhas B2B.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Users className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Plataforma Cloud para Benchmarking</h4>
            <p className="text-gray-700">Interface centralizada que agrega dados de diversas fontes, facilitando análises comparativas e a criação de perfis personalizados para leads de alto valor.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Estratégias B2B Automatizadas</h4>
            <p className="text-gray-700">Ferramentas de remarketing e personalização integradas, garantindo a geração contínua de leads de alto valor através de insights comportamentais únicos.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Recursos Inovadores para o Ambiente B2B</h4>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>Tecnologia de sensores duráveis e precisos:</strong> Coleta de dados contínua para análise comportamental</li>
        <li><strong>Dashboards intuitivos com dados em tempo real:</strong> Visualização clara para tomadas de decisão ágeis</li>
        <li><strong>Relatórios detalhados para análise de ROI:</strong> Métricas precisas que comprovam o retorno sobre investimento</li>
        <li><strong>Ferramentas de remarketing e personalização:</strong> Estratégias direcionadas para leads de alta conversão</li>
        <li><strong>Sistema de alertas e notificações:</strong> Acompanhamento proativo de oportunidades emergentes</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Benefícios que Revolucionam a Geração de Leads</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Precisão Cirúrgica na Captação de Leads</h4>
            <p className="text-gray-700">Dados em tempo real que permitem decisões rápidas e eficazes, eliminando desperdicios e maximizando conversões.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Redução Drastica dos Ciclos de Vendas</h4>
            <p className="text-gray-700">Otimização de recursos e investimentos através de processos automatizados e inteligentes.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Geração Contínua de Leads Qualificados</h4>
            <p className="text-gray-700">Insights acionáveis que alimentam um funil de vendas sempre ativo e produtivo.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Integração Completa de Dados</h4>
            <p className="text-gray-700">Visão holística do desempenho que potencializa cada estratégia e maximiza resultados.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Fortalecimento de Parcerias Estratégicas</h4>
            <p className="text-gray-700">Abertura de novas oportunidades de negócio através de dados confiáveis e resultados comprovados.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Resultados que Transformam Mercados</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Após a implementação da nossa solução inteligente, a empresa reduziu seu tempo de desenvolvimento em até 40%, 
        enquanto os dados precisos obtidos permitiram ajustes estratégicos que se traduziram em um aumento de 250% 
        na captação de leads qualificados e um ROI 180% superior nas campanhas B2B. Essa integração de tecnologia e 
        inteligência de dados redefiniu o padrão de inovação no mercado, abrindo caminho para parcerias estratégicas 
        e um posicionamento de liderança indiscutível.
      </p>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Projeto Escalável — Metodologia Validada e Replicável para Diversos Setores</p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Escalabilidade Comprovada</h4>
          <p>
            Nossa plataforma continua a evoluir, expandindo as possibilidades de aplicação para outros segmentos 
            do mercado esportivo e B2B. A metodologia data-driven desenvolvida pode ser adaptada para qualquer 
            setor que busque revolucionar seus processos de captação de leads e desenvolvimento de parcerias estratégicas.
          </p>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
        <p className="text-center text-lg font-semibold mb-2">
          "Você está pronto para transformar cada insight digital em uma oportunidade estratégica?"
        </p>
        <p className="text-center text-blue-100 italic mb-4">
          Descubra como nossa plataforma pode revolucionar seus processos e gerar leads qualificados com a precisão que só a inovação inteligente pode oferecer.
        </p>
        <p className="text-center text-blue-100 font-medium">
          Entre em contato conosco hoje mesmo e saiba como transformar seu negócio com uma estratégia data-driven que gera resultados reais.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
