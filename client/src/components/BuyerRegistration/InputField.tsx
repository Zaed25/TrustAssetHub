import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, onBlur, error }) => (
  <div className="flex flex-col gap-1">
    <label className="text-charcoal text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal/30 transition-all ${
        error ? 'border-coral' : 'border-light-gray'
      }`}
    />
    {error && <span className="text-coral text-xs">{error}</span>}
  </div>
);

export default InputField;