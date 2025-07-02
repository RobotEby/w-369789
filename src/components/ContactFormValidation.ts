
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
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\(\)\-\+]{10,}$/;

// Lista de palavras ofensivas (pode ser expandida)
const OFFENSIVE_WORDS = [
  'idiota', 'estupido', 'burro', 'imbecil', 'otario', 'babaca', 'merda', 'porra',
  'caralho', 'puta', 'fdp', 'filho da puta', 'desgraça', 'peste', 'lixo',
  'stupid', 'idiot', 'damn', 'shit', 'fuck', 'bitch', 'asshole', 'bastard'
];

const containsOffensiveLanguage = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return OFFENSIVE_WORDS.some(word => lowerText.includes(word.toLowerCase()));
};

export const validateForm = (formData: FormData): FieldErrors => {
  return {
    name: !formData.name.trim(),
    email: !formData.email.trim() || !EMAIL_REGEX.test(formData.email),
    phone: !formData.phone.trim() || !PHONE_REGEX.test(formData.phone.replace(/\D/g, '')),
    company: !formData.company.trim(),
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
      return 'Este campo é obrigatório';
    case 'email':
      if (!formData.email.trim()) return 'Este campo é obrigatório';
      if (!EMAIL_REGEX.test(formData.email)) return 'Email inválido';
      return '';
    case 'phone':
      if (!formData.phone.trim()) return 'Este campo é obrigatório';
      if (!PHONE_REGEX.test(formData.phone.replace(/\D/g, ''))) return 'Telefone deve conter apenas números';
      return '';
    case 'company':
      return 'Este campo é obrigatório';
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
