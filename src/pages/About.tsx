
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
                  <p className="text-xl text-gray-600 mb-6">
                    Fundada por visionários apaixonados por marketing digital, a CBAAP surgiu com a missão de transformar dados em decisões estratégicas. Nossa jornada é marcada por desafios superados, inovações implementadas e resultados conquistados, sempre com o compromisso de elevar a sua marca ao patamar da excelência.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    Na CBAAP, acreditamos que a transformação digital começa com a paixão por dados e resultados. Nossa equipe é dedicada a impulsionar marcas através de estratégias personalizadas, combinando inteligência de mercado com criatividade para transformar cada clique em uma oportunidade de sucesso. Somos movidos pela inovação e comprometidos com a excelência, sempre prontos para levar sua presença digital a um novo patamar.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-6">O Que Fazemos e Nosso Foco</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Na CBAAP, unimos tecnologia e criatividade para desenvolver estratégias digitais que realmente funcionam. Nossa expertise abrange desde a criação e gestão de campanhas de tráfego pago até a implementação de soluções avançadas de analytics, tudo pensado para maximizar o retorno sobre o investimento (ROI) e impulsionar o crescimento do seu negócio.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    Cada projeto é tratado como uma oportunidade única de inovar e superar limites. Nós não apenas implementamos estratégias digitais, nós as transformamos em resultados mensuráveis para o seu negócio.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Inovação",
                        description: "Estamos sempre na vanguarda das tecnologias e estratégias de marketing digital, buscando soluções criativas e eficazes."
                      },
                      {
                        title: "Resultados",
                        description: "Focamos em métricas que importam, garantindo que cada estratégia implementada gere valor real e mensurável para nossos clientes."
                      },
                      {
                        title: "Transparência",
                        description: "Acreditamos na comunicação clara e honesta, mantendo nossos clientes sempre informados sobre o progresso e os resultados das campanhas."
                      }
                    ].map((value, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl"
                >
                  <h2 className="text-3xl font-bold mb-6">Nossa Localização</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Sediados em Belo Horizonte, Minas Gerais, atendemos clientes em todo o Brasil e América Latina, levando expertise em marketing digital para empresas de todos os tamanhos e segmentos.
                  </p>
                  <p className="text-gray-600">
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
