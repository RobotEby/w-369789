
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { TrendingUp, Target, Users, Zap, ArrowUp, Smartphone, FlaskConical, FileSymlink, Heart, Trophy, Share2, BarChart3 } from 'lucide-react';

const PetProject = () => {
  return (
    <ProjectPageLayout
      title="Dog Activity Counter"
      subtitle="Como uma Startup Hacker Escalou Saúde Canina e Lucro em Tempo Recorde"
      imageUrl="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
      brandName="Do protótipo à viralização: loops de crescimento que transformaram uma simples coleira em um ecossistema de dados e benefícios"
      darkMode={false}
    >
      <SEO 
        title="CBAAP - Dog Activity Counter - Growth Hacking Startup Case" 
        description="Case study de growth hacking que mostra como uma startup escalou de 0 a 10k usuários em 120 dias através de loops virais, experimentação rápida e parcerias estratégicas no mercado pet."
        type="article"
      />
      
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Vagas Limitadas na Próxima Coorte de Pilotos — Primeiros 500 Recebem Tag 'Founding Pack'</p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">E se cada latido gerasse um insight de saúde e, ao mesmo tempo, um novo cliente?</h3>
        <p className="text-gray-800 leading-relaxed">
          Foi assim que quebramos o mercado de pet insurance com growth hacking cirúrgico. Do flywheel canino 
          ao Smart Fit de quatro patas: a jornada que transformou uma coleira em ecossistema viral.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Case Study: Dog Activity Counter - Growth Hacking Exponencial</h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Background: A Origem da Disrupção</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        **Pain point detectado**: seguros pet custavam uma fortuna, dados de saúde eram inexistentes e 73% dos cães 
        urbanos viviam sedentários. Nossa equipe — 3 founders (IoT + veterinária + growth) em um coworking de Londres — 
        teve uma meta-moonshot audaciosa: **virar a 'Nubank dos Pets' em 18 meses**. O mercado de £2,8 bi estava maduro 
        para disrupção através de dados em tempo real e loops de crescimento que ninguém havia testado.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">O Desafio que Exigia Growth Cirúrgico</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        **Budget < £150k**, necessidade de prova de mercado em 90 dias e concorrentes com hardware caro + apps confusos. 
        Definimos nosso **KPI North Star**: "Minutos Ativos Monitorados por Pet/dia" — uma métrica que conectava saúde 
        animal, engajamento do tutor e valor para seguradora. Cada sprint de 2 semanas tinha que provar tração mensurável 
        ou pivotar. Ship fast, learn faster.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Estratégia de Growth Hacking: O Motor Viral</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Desenvolvemos **6 loops de crescimento interconectados** que transformaram cada usuário ativo em um multiplicador 
        orgânico. Nossa stack enxuta (Figma → ESP32 → Klaviyo → Mixpanel → Zapier → Webflow) permitiu iterar hipóteses 
        em tempo real, validando cada experimento antes de escalar mídia paga.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">MVP Enxuto (Validation Stage)</h4>
            <p className="text-gray-700">Pré-venda com vídeo demo: US$ 800 investidos geraram 1.200 leads qualificados em 72h, validando demanda real.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Share2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Loop Viral 1: Tutores</h4>
            <p className="text-gray-700">"Compartilhe a saúde do seu dog e ganhe 1 mês de seguro grátis" — taxa de referral orgânico de 38%.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Heart className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Loop Viral 2: Veterinários</h4>
            <p className="text-gray-700">Dashboard freemium + comissão por indicação criou uma rede de 280 clínicas parceiras em 4 meses.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Zap className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Parceria Fast-Lane com Seguradora</h4>
            <p className="text-gray-700">Integração API que permite emissão instantânea de apólice com desconto dinâmico baseado em atividade real.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4 text-gray-900">Execução Multidisciplinar: 3 Sprints que Mudaram Tudo</h4>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>Sprint 1 - Pricing Optimization:</strong> A/B test R$ 19 vs R$ 29/mês → pricing dinâmico aumentou LTV em 34%</li>
        <li><strong>Sprint 2 - Engagement Rhythm:</strong> Push diário vs semanal → notificações smart reduziram churn para 4,7%</li>
        <li><strong>Sprint 3 - Gamificação:</strong> Badges "Cão Atleta" vs sistema light → gamificação hard aumentou MAU em 67%</li>
        <li><strong>Growth Orgânico:</strong> Grupos Facebook + ranking "10 Cães Mais Atletas 2025" via influenciadores pet</li>
        <li><strong>TikTok Viral:</strong> "Diário de um Cão Ativo" gerou 2,3M views e UGC explosivo sem budget de mídia</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Métricas que Provam Tração Exponencial</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <ArrowUp className="h-5 w-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-green-800">Crescimento de Usuários</h4>
          </div>
          <p className="text-3xl font-bold text-green-700 mb-1">0 → 10k</p>
          <p className="text-green-600 text-sm">Usuários em 120 dias (MoM 35%)</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-blue-800">LTV/CAC Ratio</h4>
          </div>
          <p className="text-3xl font-bold text-blue-700 mb-1">10,8×</p>
          <p className="text-blue-600 text-sm">CAC R$ 24 | LTV R$ 260</p>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center mb-3">
            <Users className="h-5 w-5 text-purple-600 mr-2" />
            <h4 className="font-semibold text-purple-800">Taxa de Referral</h4>
          </div>
          <p className="text-3xl font-bold text-purple-700 mb-1">38%</p>
          <p className="text-purple-600 text-sm">Crescimento orgânico viral</p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <div className="flex items-center mb-3">
            <BarChart3 className="h-5 w-5 text-orange-600 mr-2" />
            <h4 className="font-semibold text-orange-800">Churn 90 dias</h4>
          </div>
          <p className="text-3xl font-bold text-orange-700 mb-1">4,7%</p>
          <p className="text-orange-600 text-sm">vs 23% média do setor</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Benefícios que Criaram um Ecossistema Viral</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Seguradora: Precificação Dinâmica Real</h4>
            <p className="text-gray-700">Redução de 18% em sinistros através de predição comportamental e incentivos à atividade física.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Tutores: Gamificação + Economia Real</h4>
            <p className="text-gray-700">Até 25% de desconto na renovação + alertas preditivos de saúde que previnem emergências veterinárias.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Veterinários: Receita Adicional Recorrente</h4>
            <p className="text-gray-700">ROI 8× em 6 meses através de prontuários contínuos e fluxo de novos pacientes via referral.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Startup: Dados Proprietários como Moat</h4>
            <p className="text-gray-700">Base de dados comportamentais que cria barreira de entrada natural para concorrentes tardios.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Lessons Learned & Próximos Growth Hacks</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Três aprendizados-chave moldaram nossa **roadmap de escala**: (1) algoritmo de detecção de arritmia via 
        parceria com universidade veterinária, (2) A/B de onboarding 100% via WhatsApp (sem app), e (3) expansão 
        LATAM através de micro-influencers locais. Nossa feature **"Pet Social"** está em testes para aumentar 
        viral loops em +50%, criando uma rede social canina baseada em dados de atividade.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Roadmap de Experimentação Q1 2025</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Growth Loop 3.0:</strong> Pet Social com ranking semanal de atividade entre vizinhos</li>
            <li>• <strong>Parcerias B2B:</strong> API para redes de pet shops com cashback automático</li>
            <li>• <strong>IA Preditiva:</strong> Alertas comportamentais que antecipam doenças em 48-72h</li>
            <li>• <strong>Expansão LATAM:</strong> MVP localizado para México e Brasil via influencers regionais</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
        <p className="text-center text-lg font-semibold mb-2">
          "Quer acelerar seu produto como fizemos com o Dog Activity Counter?"
        </p>
        <p className="text-center text-blue-100 italic mb-4">
          Fale agora com nosso time de growth e descubra hacks que transformam dados, comunidade e amor por pets 
          em crescimento sem freio. Cada sprint conta quando se trata de validar mercado e escalar tração.
        </p>
        <p className="text-center text-blue-100 font-medium">
          Marque seu Sprint-Diagnóstico e veja como aplicar loops virais, experimentação rápida 
          e parcerias estratégicas no seu próprio produto.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default PetProject;
