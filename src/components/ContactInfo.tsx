
import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em resultados excepcionais. Nossa equipe CBAAP está pronta para 
            desenvolver estratégias personalizadas que impulsionem o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
