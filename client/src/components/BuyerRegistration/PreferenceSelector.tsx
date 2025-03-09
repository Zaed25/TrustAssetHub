import React from 'react';

interface PreferenceSelectorProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  error?: string | null;
}

const PreferenceSelector: React.FC<PreferenceSelectorProps> = ({
  label,
  value,
  onChange,
  options,
  error,
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-700 font-medium">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    >
      <option value="">Select a location</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default PreferenceSelector;