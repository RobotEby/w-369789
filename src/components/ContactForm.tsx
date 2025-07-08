
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import ContactFormFields from './ContactFormFields';
import { FormData, FieldErrors, validateForm, hasErrors } from './ContactFormValidation';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: false,
    email: false,
    phone: false,
    company: false,
    subject: false,
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
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleValidation = () => {
    const errors = validateForm(formData);
    setFieldErrors(errors);
    return !hasErrors(errors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!handleValidation()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos corretamente.",
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
      setFieldErrors({ name: false, email: false, phone: false, company: false, subject: false, message: false });
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
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)] rounded-3xl"></div>
      
      <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
        {/* Elegant Header */}
        <div className="relative px-8 py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-20"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Solicite seu Orçamento</h3>
            <p className="text-gray-300 font-light">Transforme suas ideias em resultados excepcionais</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <ContactFormFields
            formData={formData}
            fieldErrors={fieldErrors}
            handleInputChange={handleInputChange}
          />

          {/* Elegant Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              {isSubmitting ? (
                <div className="flex items-center relative z-10">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  <span className="font-medium">Enviando sua mensagem...</span>
                </div>
              ) : (
                <div className="flex items-center relative z-10">
                  <span className="font-medium">Enviar Mensagem</span>
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
