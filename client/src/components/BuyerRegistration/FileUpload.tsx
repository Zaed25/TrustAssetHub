import React, { useState } from 'react';

interface FileUploadProps {
  onFileChange: (file: File) => void;
  error?: string | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, error }) => {
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-medium">Profile Picture</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md"
      />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="w-24 h-24 object-cover rounded-md mt-2" />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FileUpload;