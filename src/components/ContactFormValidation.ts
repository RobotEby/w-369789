
export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface FieldErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
  company: boolean;
  subject: boolean;
  message: boolean;
}

// Regex patterns
const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]+$/; // Apenas letras e espaços (incluindo acentos)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email mais rigoroso
const PHONE_REGEX = /^(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?[9]?\d{4}[-\s]?\d{4}$|^\+?[1-9]\d{1,14}$/; // Aceita DDDs do Brasil (67) e internacionais, até 14 dígitos
const COMPANY_REGEX = /^[a-zA-ZÀ-ÿ0-9\s&.-]+$/; // Letras, números, espaços e caracteres comuns de empresa

// Lista expandida de palavras ofensivas
const OFFENSIVE_WORDS = [
  'idiota', 'estupido', 'burro', 'imbecil', 'otario', 'babaca', 'merda', 'porra',
  'caralho', 'puta', 'fdp', 'filho da puta', 'desgraça', 'peste', 'lixo',
  'stupid', 'idiot', 'damn', 'shit', 'fuck', 'bitch', 'asshole', 'bastard',
  'retardado', 'retard', 'gay', 'viado', 'bicha', 'corno', 'cornudo',
  'safado', 'vagabundo', 'prostituta', 'piranha', 'vadia', 'puto'
];

const containsOffensiveLanguage = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return OFFENSIVE_WORDS.some(word => lowerText.includes(word.toLowerCase()));
};

const isValidPhoneNumber = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  // Verifica se tem entre 10 e 14 dígitos e se corresponde ao padrão
  return PHONE_REGEX.test(phone) && cleanPhone.length >= 10 && cleanPhone.length <= 14;
};

export const validateForm = (formData: FormData): FieldErrors => {
  return {
    name: !formData.name.trim() || !NAME_REGEX.test(formData.name) || containsOffensiveLanguage(formData.name),
    email: !formData.email.trim() || !EMAIL_REGEX.test(formData.email),
    phone: !formData.phone.trim() || !isValidPhoneNumber(formData.phone),
    company: !formData.company.trim() || !COMPANY_REGEX.test(formData.company),
    subject: !formData.subject.trim(),
    message: !formData.message.trim() || containsOffensiveLanguage(formData.message)
  };
};

export const hasErrors = (errors: FieldErrors): boolean => {
  return Object.values(errors).some(error => error);
};

export const getErrorMessage = (field: keyof FieldErrors, formData: FormData): string => {
  switch (field) {
    case 'name':
      if (!formData.name.trim()) return 'Este campo é obrigatório';
      if (!NAME_REGEX.test(formData.name)) return 'Nome deve conter apenas letras';
      if (containsOffensiveLanguage(formData.name)) return 'Nome contém linguagem inapropriada';
      return '';
    case 'email':
      if (!formData.email.trim()) return 'Este campo é obrigatório';
      if (!EMAIL_REGEX.test(formData.email)) return 'Formato de email inválido';
      return '';
    case 'phone':
      if (!formData.phone.trim()) return 'Este campo é obrigatório';
      if (!isValidPhoneNumber(formData.phone)) return 'Número de telefone inválido (10-14 dígitos)';
      return '';
    case 'company':
      if (!formData.company.trim()) return 'Este campo é obrigatório';
      if (!COMPANY_REGEX.test(formData.company)) return 'Nome da empresa contém caracteres inválidos';
      return '';
    case 'subject':
      return 'Este campo é obrigatório';
    case 'message':
      if (!formData.message.trim()) return 'Este campo é obrigatório';
      if (containsOffensiveLanguage(formData.message)) return 'Mensagem contém linguagem inapropriada';
      return '';
    default:
      return 'Este campo é obrigatório';
  }
};
