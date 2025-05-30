
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="6º SENTIDO DA FIRECAT"
      subtitle="Sistema revolucionário de segurança para ambientes de alto risco"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="FireCat Group"
      darkMode={true}
    >
      <div className="prose prose-lg max-w-none text-white">
        <h2 className="text-3xl font-bold mb-6 text-white">Case Study: 6º SENTIDO DA FIRECAT por WRLDS Technologies</h2>
        
        <div className="bg-gray-800/50 p-6 rounded-lg mb-8 border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Contexto</h3>
          <p className="text-gray-100 leading-relaxed">
            Imagine um mundo onde cada segundo pode significar a diferença entre a vida e a morte. O Grupo FireCat 
            enfrentava o desafio monumental de proteger profissionais que arriscam suas vidas diariamente em ambientes 
            de alto risco - forças policiais, operações militares e combate a incêndios. A necessidade era clara: 
            uma solução tecnológica integrada capaz de fornecer dados críticos em tempo real para transformar 
            informações em decisões que salvam vidas.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-white">O Desafio que Exigia uma Revolução</h3>
        <p className="text-gray-100 leading-relaxed mb-8">
          As abordagens tradicionais eram obsoletas e perigosas. Sem monitoramento integral e consciência situacional 
          adequada, os profissionais permaneciam vulneráveis e as decisões críticas chegavam tarde demais. O mercado 
          clamava por uma solução robusta, capaz de funcionar nas condições mais extremas e fornecer informações 
          precisas quando cada segundo conta. Era hora de quebrar paradigmas e criar algo verdadeiramente revolucionário.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4 text-white">A Solução que Transforma Dados em Proteção</h3>
        <p className="text-gray-100 leading-relaxed mb-6">
          A WRLDS Technologies respondeu com uma inovação sem precedentes: o 6º SENTIDO - uma solução completa que 
          integra sensores inteligentes movidos por IA diretamente nos uniformes. Cada sensor não apenas coleta dados, 
          mas se transforma em um guardião invisível, pronto para alertar e agir no instante exato em que a segurança 
          é comprometida. Esta é nossa promessa: tecnologia que protege vidas através da inteligência.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-800/50 shadow-lg rounded-lg p-6 border border-gray-700 flex items-start">
            <Shield className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Unidade Principal</h4>
              <p className="text-gray-100">Transmissão de dados em tempo real com comunicação criptografada de nível militar, garantindo que cada informação vital seja protegida e entregue instantaneamente.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 shadow-lg rounded-lg p-6 border border-gray-700 flex items-start">
            <Radio className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Sensores de Alta Performance</h4>
              <p className="text-gray-100">Sensores ultra-resistentes que enfrentam poeira, água e temperaturas extremas - preparados para os ambientes mais hostis do planeta.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 shadow-lg rounded-lg p-6 border border-gray-700 flex items-start">
            <Box className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Vestuário Inteligente</h4>
              <p className="text-gray-100">Camisetas personalizadas que incorporam sensores de IA, oferecendo monitoramento contínuo sem comprometer o conforto - tecnologia invisível, proteção visível.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 shadow-lg rounded-lg p-6 border border-gray-700 flex items-start">
            <Activity className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Central de Comando</h4>
              <p className="text-gray-100">Interface centralizada com IA que transforma dados complexos em insights visuais através de um aplicativo supervisor intuitivo e poderoso.</p>
            </div>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mb-4 text-white">Recursos que Salvam Vidas</h4>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-100">
          <li><strong>Alarme "Man Down":</strong> Detecta quedas e imobilidade, acionando alertas automáticos instantâneos</li>
          <li><strong>GPS de Precisão Militar:</strong> Localização exata em tempo real, mesmo nos ambientes mais desafiadores</li>
          <li><strong>Monitoramento de Sinais Vitais:</strong> Vigilância contínua da saúde, antecipando emergências médicas</li>
          <li><strong>Botão de Pânico Inteligente:</strong> Acionamento rápido e discreto em situações críticas</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Benefícios que Transformam Realidades</h3>
        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-white">Tecnologia que Salva Vidas</h4>
              <p className="text-gray-100">Aquisição ultrarrápida de dados que transforma emergências em respostas instantâneas, protegendo quem mais importa.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-white">Inteligência Artificial Revolucionária</h4>
              <p className="text-gray-100">Machine learning que elimina alarmes falsos, adaptando-se aos padrões únicos de cada usuário para máxima precisão.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-white">Segurança e Durabilidade Incomparáveis</h4>
              <p className="text-gray-100">Hardware militar com vida útil estendida, criptografia de nível bancário e total conformidade GDPR.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-white">Manutenção Revolucionariamente Simples</h4>
              <p className="text-gray-100">Sensores totalmente laváveis que exigem manutenção zero - tecnologia que funciona quando você mais precisa.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-white">Facilidade Plug & Play</h4>
              <p className="text-gray-100">Instalação em minutos, operação por horas. Simplicidade na configuração, complexidade na proteção.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">O Resultado: Uma Nova Era da Segurança</h3>
        <p className="text-gray-100 leading-relaxed">
          A implementação do 6º SENTIDO não apenas elevou os padrões de segurança da FireCat - ela revolucionou 
          completamente a consciência situacional e a eficiência operacional de profissionais em ambientes críticos. 
          A plataforma inovadora da WRLDS Technologies possibilitou uma implantação relâmpago com impacto imediato, 
          criando um modelo escalável que cresce e se adapta às demandas mais desafiadoras. Hoje, cada profissional 
          protegido pelo 6º SENTIDO carrega consigo não apenas um equipamento, mas um escudo tecnológico que 
          transforma dados em decisões vitais e cada segundo em uma oportunidade de segurança absoluta.
        </p>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
          <p className="text-center text-lg font-semibold text-white mb-2">
            "Onde a tecnologia encontra a proteção, nasce a inovação que salva vidas."
          </p>
          <p className="text-center text-gray-300 italic">
            - Uma revolução em segurança, um compromisso com a vida.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
