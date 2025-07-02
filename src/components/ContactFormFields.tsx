
import React from 'react';
import { User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import FormField from './FormField';
import { FormData, FieldErrors, getErrorMessage } from './ContactFormValidation';

interface ContactFormFieldsProps {
  formData: FormData;
  fieldErrors: FieldErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  formData,
  fieldErrors,
  handleInputChange
}) => {
  const subjectOptions = [
    { value: 'marketing-digital', label: 'Marketing Digital' },
    { value: 'trafego-pago', label: 'Tráfego Pago' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'branding', label: 'Branding' },
    { value: 'consultoria', label: 'Consultoria' },
    { value: 'outros', label: 'Outros' }
  ];

  return (
    <div className="space-y-6">
      {/* Nome e Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="name"
          name="name"
          label="Nome Completo"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Seu nome completo"
          type="text"
          icon={User}
          required
          hasError={fieldErrors.name}
          errorMessage={getErrorMessage('name', formData)}
        />

        <FormField
          id="email"
          name="email"
          label="E-mail Corporativo"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="seu.email@empresa.com"
          type="email"
          icon={Mail}
          required
          hasError={fieldErrors.email}
          errorMessage={getErrorMessage('email', formData)}
        />
      </div>

      {/* Telefone e Empresa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="phone"
          name="phone"
          label="Telefone/WhatsApp"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(11) 99999-9999"
          type="tel"
          icon={Phone}
          required
          hasError={fieldErrors.phone}
          errorMessage={getErrorMessage('phone', formData)}
        />

        <FormField
          id="company"
          name="company"
          label="Empresa"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Nome da sua empresa"
          type="text"
          icon={Building}
          required
          hasError={fieldErrors.company}
          errorMessage={getErrorMessage('company', formData)}
        />
      </div>

      {/* Assunto */}
      <FormField
        id="subject"
        name="subject"
        label="Assunto"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder="Selecione um assunto"
        type="select"
        icon={Building}
        required
        hasError={fieldErrors.subject}
        errorMessage={getErrorMessage('subject', formData)}
        options={subjectOptions}
      />

      {/* Mensagem */}
      <FormField
        id="message"
        name="message"
        label="Mensagem"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
        type="textarea"
        icon={MessageSquare}
        required
        hasError={fieldErrors.message}
        errorMessage={getErrorMessage('message', formData)}
        rows={6}
      />
    </div>
  );
};

export default ContactFormFields;
