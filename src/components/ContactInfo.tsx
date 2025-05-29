
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Fale com Nossa Equipe CBAAP
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Tem dúvidas sobre nossas estratégias de marketing digital? Entre em contato com a CBAAP e vamos discutir como podemos impulsionar seus resultados e transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Especialista em Estratégia Digital */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Especialista em Marketing Digital CBAAP"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Equipe de Estratégia</h3>
              <p className="text-gray-600 mb-4">CEO e Estrategista Digital</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:estrategia@cbaap.com.br" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  estrategia@cbaap.com.br
                </a>
                <a 
                  href="https://www.linkedin.com/company/cbaap/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Perfil LinkedIn CBAAP
                </a>
              </div>
            </div>
          </div>

          {/* Especialista em Performance */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c2c5608b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Especialista em Performance CBAAP"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Equipe de Performance</h3>
              <p className="text-gray-600 mb-4">COO e Especialista em Performance</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:performance@cbaap.com.br" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  performance@cbaap.com.br
                </a>
                <a 
                  href="https://www.linkedin.com/company/cbaap/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Perfil LinkedIn CBAAP
                </a>
                <a href="tel:+5531999999999" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  (31) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
