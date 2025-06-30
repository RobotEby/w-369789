
import React, { useState } from 'react';
import { Mail, MapPin, Send, User, MessageSquare, Phone, Building, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        description: "Por favor, preencha os campos obrigatórios (nome, email e mensagem).",
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
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
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
      
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
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
    <section id="contact-info" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-wrlds-teal/10 text-wrlds-dark rounded-full text-sm font-semibold">
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-wrlds-dark">
            Fale com Nossa Equipe CBAAP
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Tem dúvidas sobre nossas estratégias de marketing digital? Entre em contato com a CBAAP e vamos discutir como podemos impulsionar seus resultados e transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Contato - Maior */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-wrlds-dark mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-wrlds-teal" />
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-wrlds-dark text-sm font-semibold mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-wrlds-dark text-sm font-semibold mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu.email@exemplo.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-wrlds-dark text-sm font-semibold mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-wrlds-dark text-sm font-semibold mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-wrlds-dark text-sm font-semibold mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Orçamento">Solicitar Orçamento</option>
                    <option value="Consultoria">Consultoria em Marketing Digital</option>
                    <option value="Tráfego Pago">Campanhas de Tráfego Pago</option>
                    <option value="SEO">Otimização para Buscadores (SEO)</option>
                    <option value="Social Media">Gestão de Redes Sociais</option>
                    <option value="Outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-wrlds-dark text-sm font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wrlds-teal focus:border-transparent text-wrlds-dark resize-none transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-wrlds-dark hover:bg-wrlds-dark/80 text-white py-4 px-8 rounded-lg transition-all flex items-center justify-center disabled:opacity-70 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* Contato por Email */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wrlds-teal rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-wrlds-dark mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-3">Para consultas e orçamentos:</p>
                  <a 
                    href="mailto:cbaap.agencia@gmail.com" 
                    className="text-wrlds-teal hover:text-wrlds-dark font-semibold transition-colors"
                  >
                    cbaap.agencia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wrlds-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-wrlds-dark mb-2">Localização</h3>
                  <p className="text-gray-600">
                    Belo Horizonte - MG<br />
                    Minas Gerais, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-wrlds-dark mb-4">Redes Sociais</h3>
              <p className="text-gray-600 mb-4">Conecte-se conosco:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/cbaap.agencia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white transition-transform hover:scale-110"
                  aria-label="Instagram CBAAP"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/cbaap/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white transition-transform hover:scale-110"
                  aria-label="LinkedIn CBAAP"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/cbaap.agencia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white transition-transform hover:scale-110"
                  aria-label="Facebook CBAAP"
                >
                  <Facebook size={20} />
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
