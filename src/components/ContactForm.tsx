
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
        <ContactFormFields
          formData={formData}
          fieldErrors={fieldErrors}
          handleInputChange={handleInputChange}
        />

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
