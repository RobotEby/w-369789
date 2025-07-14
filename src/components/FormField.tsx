
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  icon: LucideIcon;
  required?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  icon: Icon,
  required = false,
  hasError = false,
  errorMessage,
  options,
  rows
}) => {
  const baseClasses = `w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent transition-all duration-300 text-gray-900 focus:outline-none focus:border-gray-500 ${
    hasError 
      ? 'border-red-500 shadow-red-100' 
      : 'hover:border-gray-400'
  }`;

  const selectClasses = `w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent transition-all duration-300 text-gray-900 focus:outline-none focus:border-gray-500 ${
    hasError 
      ? 'border-red-500' 
      : 'hover:border-gray-400'
  }`;

  const textareaClasses = `w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent resize-none transition-all duration-300 text-gray-900 focus:outline-none focus:border-gray-500 ${
    hasError 
      ? 'border-red-500 shadow-red-100' 
      : 'hover:border-gray-400'
  }`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label} {required && '*'}
      </label>
      
      {type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={selectClasses}
          autoComplete="off"
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <Icon className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-300 ${
            hasError ? 'text-red-500' : 'text-gray-400'
          }`} />
          {type === 'textarea' ? (
            <textarea
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows}
              className={textareaClasses}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          ) : (
            <input
              type={type === 'tel' ? 'text' : type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onKeyPress={type === 'tel' ? (e) => {
                // Permite apenas números, +, espaços, parênteses e hífens para telefones
                if (!/[\d\+\s\(\)\-]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                  e.preventDefault();
                }
              } : undefined}
              placeholder={placeholder}
              className={baseClasses}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          )}
        </div>
      )}
      
      {hasError && errorMessage && (
        <p className="text-red-500 text-xs mt-1 transition-opacity duration-300">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormField;
