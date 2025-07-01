
import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Remove error state when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim()
    };

    setFieldErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome, e-mail e mensagem.",
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
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos sua mensagem e retornaremos em breve.",
        variant: "default"
      });
      
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setFieldErrors({ name: false, email: false, message: false });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      toast({
        title: "Erro no envio",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900">Solicite seu Orçamento</h3>
        <p className="text-gray-600 mt-2">Preencha o formulário e receba uma proposta personalizada</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Nome e Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
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
                className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 text-gray-900 bg-white focus:outline-none focus:ring-2 ${
                  fieldErrors.name 
                    ? 'border-red-500 ring-2 ring-red-200 animate-pulse' 
                    : 'border-gray-300 focus:ring-gray-500 focus:border-transparent'
                }`}
                required
              />
              {fieldErrors.name && (
                <p className="text-red-500 text-xs mt-1 animate-slide-in">
                  Este campo é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              E-mail Corporativo *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@empresa.com"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 text-gray-900 bg-white focus:outline-none focus:ring-2 ${
                  fieldErrors.email 
                    ? 'border-red-500 ring-2 ring-red-200 animate-pulse' 
                    : 'border-gray-300 focus:ring-gray-500 focus:border-transparent'
                }`}
                required
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-xs mt-1 animate-slide-in">
                  Este campo é obrigatório
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Telefone e Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Telefone/WhatsApp
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Assunto */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
            Assunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
          >
            <option value="">Selecione um assunto</option>
            <option value="marketing-digital">Marketing Digital</option>
            <option value="trafego-pago">Tráfego Pago</option>
            <option value="social-media">Social Media</option>
            <option value="branding">Branding</option>
            <option value="consultoria">Consultoria</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Mensagem *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
              rows={6}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 text-gray-900 bg-white resize-none focus:outline-none focus:ring-2 ${
                fieldErrors.message 
                  ? 'border-red-500 ring-2 ring-red-200 animate-pulse' 
                  : 'border-gray-300 focus:ring-gray-500 focus:border-transparent'
              }`}
              required
            />
            {fieldErrors.message && (
              <p className="text-red-500 text-xs mt-1 animate-slide-in">
                Este campo é obrigatório
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Enviando...
              </div>
            ) : (
              <>
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
