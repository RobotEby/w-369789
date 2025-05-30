
import PageLayout from '@/components/PageLayout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="Sobre a CBAAP - Nossa História e Missão em Marketing Digital"
          description="Conheça a história da CBAAP, nossa missão de transformar dados em decisões estratégicas e como revolucionamos o marketing digital em Belo Horizonte e todo o Brasil."
          keywords={['sobre CBAAP', 'história da empresa', 'missão', 'marketing digital', 'Belo Horizonte', 'agência digital']}
        />
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Sobre a CBAAP
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
                  <p className="text-xl text-gray-600 mb-6 italic leading-relaxed">
                    Imagine um lugar onde cada byte de informação se transforma em uma estratégia vencedora; onde os desafios não são barreiras, mas trampolins para a inovação. Esse lugar existe – e é a CBAAP.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Na CBAAP, acreditamos que cada byte de informação é uma semente que, quando cultivada com paixão e precisão, se transforma na chave do sucesso. Fundada por mentes brilhantes e inquietas, nossa história é escrita com suor, desafios superados e inovações que mudam o jogo. Não somos apenas uma empresa de marketing digital – somos os arquitetos do futuro, transformando dados em estratégias que colocam sua marca em um patamar de excelência inédita.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Nossa jornada é marcada por uma obsessão: transformar cada clique em uma oportunidade de ouro, cada dado em uma revelação estratégica. Somos movidos pela paixão de elevar marcas através de inteligência de mercado combinada com criatividade ilimitada. Convidamos você a se juntar a nós nessa jornada revolucionária, onde cada projeto é uma nova chance de redefinir o impossível.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-6">O Que Fazemos e Nosso Foco</h2>
                  <p className="text-xl text-gray-600 mb-6 italic leading-relaxed">
                    Na interseção entre tecnologia e criatividade, a CBAAP cria sinfonias digitais onde cada nota é estrategicamente posicionada para o sucesso do seu negócio.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Na CBAAP, não apenas realizamos campanhas – criamos sinfonias digitais onde cada dado, cada clique, se transforma na melodia do seu sucesso. Imagine transformar cada campanha em uma obra-prima de resultados mensuráveis, onde cada investimento se converte em crescimento real e tangível. É essa a nossa promessa: elevar seu negócio através de soluções inovadoras, desde campanhas de tráfego pago meticulosamente planejadas até a implantação de analytics avançados.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Cada projeto é tratado como uma jornada única de transformação. Não seguimos fórmulas prontas – criamos estratégias sob medida que refletem a essência da sua marca e amplificam seu potencial. Nossa expertise transcende o convencional, mergulhando fundo na alma do seu negócio para extrair o máximo de cada oportunidade digital. Nós não apenas implementamos estratégias; nós as transformamos em histórias de sucesso mensuráveis e duradouras.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nossa essência é construída sobre três pilares inabaláveis que sustentam cada decisão, cada estratégia, cada sonho que ajudamos a realizar:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Inovação",
                        description: "Estamos na linha de frente das tendências, desbravando caminhos inexplorados para trazer soluções que rompem barreiras. Para nós, inovar é respirar – é o que nos mantém vivos e sempre um passo à frente do amanhã."
                      },
                      {
                        title: "Resultados",
                        description: "Cada estratégia é calibrada para gerar impactos reais, medidos em sucessos tangíveis e crescimento exponencial. Não nos contentamos com números vazios – buscamos métricas que realmente importam e transformam realidades."
                      },
                      {
                        title: "Transparência",
                        description: "Valorizamos a comunicação honesta e aberta, mantendo você informado a cada etapa, como se fôssemos parceiros de uma mesma missão. Sua confiança é nosso bem mais precioso."
                      }
                    ].map((value, i) => (
                      <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="font-bold text-xl mb-3 text-gray-800">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200"
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa Localização</h2>
                  <p className="text-xl text-gray-600 mb-4 italic leading-relaxed">
                    Do coração pulsante de Minas Gerais para o mundo inteiro – a CBAAP nasce local e conquista global.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Diretamente da vibrante Belo Horizonte, a CBAAP nasce no coração de Minas Gerais e se projeta para o mundo, conectando marcas e ideias em todo o Brasil e América Latina. Aqui, a paixão pela inovação se mistura com a tradição e a força regional, resultando em uma expertise que transcende fronteiras e transforma a presença digital dos nossos clientes.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    De nossa casa mineira para o seu sucesso global, levamos a essência da hospitalidade, da criatividade e da determinação que só Belo Horizonte pode inspirar. Cada cliente, independente de onde esteja, recebe o carinho e a dedicação que caracterizam nossa região e potencializam nossa atuação internacional.
                  </p>
                  
                  <p className="text-gray-600 font-semibold">
                    <strong>Belo Horizonte, Minas Gerais - Brasil</strong>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default About;
