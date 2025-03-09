import React from 'react';
import { motion } from 'framer-motion';
import InputField from './InputField';
import FileUpload from './FileUpload';
import { validateName, validateEmail, validatePhone, validateBankAccount } from '../../utils/validations';

interface BasicCredentialsFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    profilePic: File | null;
    bankAccount: string;
  };
  errors: {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    bankAccount?: string | null;
  };
  onChange: (field: string, value: string | File) => void;
  onValidate: (field: string) => void;
}

const BasicCredentialsForm: React.FC<BasicCredentialsFormProps> = ({
  formData,
  errors,
  onChange,
  onValidate
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6">
        <motion.h2 
          className="text-xl font-bold text-deep-navy mb-1"
          variants={itemVariants}
        >
          Create Your Account
        </motion.h2>
        <motion.p 
          className="text-slate text-sm"
          variants={itemVariants}
        >
          Let's get started with your basic information
        </motion.p>
      </div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          onBlur={() => onValidate('name')}
          error={errors.name}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onValidate('email')}
          error={errors.email}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          onBlur={() => onValidate('phone')}
          error={errors.phone}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FileUpload 
          onFileChange={(file) => onChange('profilePic', file)} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Bank Account Number"
          type="text"
          value={formData.bankAccount}
          onChange={(e) => onChange('bankAccount', e.target.value)}
          onBlur={() => onValidate('bankAccount')}
          error={errors.bankAccount}
        />
      </motion.div>
    </motion.div>
  );
};

export default BasicCredentialsForm;