
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
  const baseClasses = `w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 text-gray-900 bg-white focus:outline-none focus:ring-2 ${
    hasError 
      ? 'border-red-500 ring-2 ring-red-200 animate-pulse' 
      : 'border-gray-300 focus:ring-gray-500 focus:border-transparent'
  }`;

  const selectClasses = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white`;

  const textareaClasses = `w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-200 text-gray-900 bg-white resize-none focus:outline-none focus:ring-2 ${
    hasError 
      ? 'border-red-500 ring-2 ring-red-200 animate-pulse' 
      : 'border-gray-300 focus:ring-gray-500 focus:border-transparent'
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
          <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          {type === 'textarea' ? (
            <textarea
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows}
              className={textareaClasses}
            />
          ) : (
            <input
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={baseClasses}
            />
          )}
        </div>
      )}
      
      {hasError && errorMessage && (
        <p className="text-red-500 text-xs mt-1 animate-fade-in">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormField;
