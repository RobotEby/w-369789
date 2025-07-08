
import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="relative group">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl"></div>
        
        <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/30 p-8 text-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Informações de Contato</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-white/80 to-transparent rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group/item">
              <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover/item:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2 text-lg">E-mail</h4>
                <a 
                  href="mailto:cbaap.agencia@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium group-hover/item:underline"
                >
                  cbaap.agencia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group/item">
              <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover/item:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2 text-lg">Localização</h4>
                <p className="text-gray-300 leading-relaxed font-medium">
                  Belo Horizonte - MG<br />
                  Minas Gerais, Brasil
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
