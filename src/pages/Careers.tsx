
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
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
                Junte-se à Nossa Equipe
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  Se você é apaixonado por marketing digital e acredita no poder da inovação, a CBAAP é o lugar certo para você.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  Aqui, cultivamos um ambiente de criatividade, colaboração e constante aprendizado. Junte-se a nós e faça parte de uma equipe que transforma desafios em oportunidades, contribuindo para o crescimento e a evolução de marcas em um mercado cada vez mais digital.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Por que Trabalhar na CBAAP?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Inovação Constante",
                        description: "Trabalhe com as mais modernas tecnologias e estratégias de marketing digital que estão moldando o futuro."
                      },
                      {
                        title: "Impacto Real",
                        description: "Crie soluções que transformam negócios e geram resultados mensuráveis para nossos clientes."
                      },
                      {
                        title: "Crescimento Profissional",
                        description: "Desenvolva suas habilidades em um campo em rápida expansão com desafios diversos e estimulantes."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Entre em Contato com Nossa Equipe</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108755-2616c2c5608b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="Especialista em Recursos Humanos CBAAP"
                          className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Equipe de Recursos Humanos</h3>
                        <p className="text-gray-600 mb-4">CBAAP</p>
                        <div className="flex flex-col space-y-3">
                          <a href="mailto:carreiras@cbaap.com.br" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Mail className="w-5 h-5 mr-2" />
                            carreiras@cbaap.com.br
                          </a>
                          <a 
                            href="https://www.linkedin.com/company/cbaap/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            Perfil LinkedIn da CBAAP
                          </a>
                          <a href="tel:+5531999999999" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Phone className="w-5 h-5 mr-2" />
                            (31) 99999-9999
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
