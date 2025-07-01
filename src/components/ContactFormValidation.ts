
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
  message: boolean;
}

export const validateForm = (formData: FormData): FieldErrors => {
  return {
    name: !formData.name.trim(),
    email: !formData.email.trim(),
    message: !formData.message.trim()
  };
};

export const hasErrors = (errors: FieldErrors): boolean => {
  return Object.values(errors).some(error => error);
};
