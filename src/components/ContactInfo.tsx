
import React, { useState } from 'react';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Equipe CBAAP',
        reply_to: formData.email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e retornaremos em breve.",
        variant: "default"
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Formulário de Contato */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-2">Para consultas e orçamentos:</p>
                  <a 
                    href="mailto:cbaap.agencia@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    cbaap.agencia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Localização</h3>
                  <p className="text-gray-600">
                    Belo Horizonte - MG<br />
                    Minas Gerais, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
