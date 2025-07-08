
import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
              <a 
                href="mailto:cbaap.agencia@gmail.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                cbaap.agencia@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
              <p className="text-gray-600">
                Belo Horizonte - MG<br />
                Minas Gerais, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactDetails;
