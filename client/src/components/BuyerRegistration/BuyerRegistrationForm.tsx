import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerBuyer, BuyerData } from '../../services/apiService';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateBankAccount,
} from '../../utils/validations';
import BasicCredentialsForm from './BasicCredentialsForm';
import PreferencesForm from './PreferencesForm';
import NotificationMessage from './NotificationMessage';
import { ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';

interface FormErrors {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  bankAccount?: string | null;
}

const BuyerRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [skipPreferences, setSkipPreferences] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profilePic: null as File | null,
    bankAccount: '',
    maxAmount: '500000',
    monthlySavings: '5000',
    location: '',
    propertyType: '',
    features: [] as string[],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (field: string) => {
    const validations: { [key: string]: () => string | null } = {
      name: () => validateName(formData.name),
      email: () => validateEmail(formData.email),
      phone: () => validatePhone(formData.phone),
      bankAccount: () => validateBankAccount(formData.bankAccount),
    };

    if (validations[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validations[field](),
      }));
    }
  };

  const handleChange = (field: string, value: string | File | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateBasicCredentials = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      bankAccount: validateBankAccount(formData.bankAccount),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step === 1 && validateBasicCredentials()) {
      setStep(2);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    setSkipPreferences(true);
    handleSubmit(e as any);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBasicCredentials()) return;
    
    setIsSubmitting(true);
    try {
      const submitData: BuyerData = {
        ...formData,
        profilePic: formData.profilePic ? formData.profilePic.name : null,
        skipPreferences,
      };
      await registerBuyer(submitData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto p-6 bg-pure-white rounded-lg shadow-lg"
      >
        <NotificationMessage 
          message={
            skipPreferences 
              ? "Registration successful! Note: You can set up your preferences later to receive personalized recommendations."
              : "Registration successful! You will receive tailored offers based on your preferences."
          } 
        />
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-pure-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <motion.div
              animate={{
                scale: step === 1 ? 1.1 : 1,
                backgroundColor: step === 1 ? '#3AAFA9' : '#F8F9FA'
              }}
              className="w-3 h-3 rounded-full"
            />
            <motion.div
              animate={{
                scale: step === 2 ? 1.1 : 1,
                backgroundColor: step === 2 ? '#3AAFA9' : '#F8F9FA'
              }}
              className="w-3 h-3 rounded-full"
            />
          </div>
          <div className="text-slate text-sm">
            Step {step} of 2
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <BasicCredentialsForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onValidate={validateField}
              />
            </motion.div>
          ) : (
            <motion.div
              key="preferences"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PreferencesForm
                formData={formData}
                onChange={handleChange}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {step === 1 && (
          <motion.div 
            className="flex items-center p-3 bg-mint/10 rounded-md border border-mint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
            <p className="text-xs text-slate">
              Setting up preferences helps us provide personalized recommendations. You can skip this step and set them up later.
            </p>
          </motion.div>
        )}

        <motion.div 
          className="flex justify-between gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {step === 2 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center justify-center px-4 py-2 border border-teal text-teal rounded-md hover:bg-teal/5 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          )}
          
          {step === 1 ? (
            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                onClick={handleSkip}
                className="flex items-center justify-center px-4 py-2 border border-slate text-slate rounded-md hover:bg-slate/5 transition-colors text-sm"
              >
                Skip Preferences
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center justify-center px-4 py-2 bg-gradient-cta text-white rounded-md hover:opacity-90 transition-opacity text-sm"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center px-4 py-2 rounded-md text-white ml-auto text-sm ${
                isSubmitting
                  ? 'bg-slate cursor-not-allowed'
                  : 'bg-gradient-cta hover:opacity-90 transition-opacity'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Complete Registration'}
            </button>
          )}
        </motion.div>
      </form>
    </div>
  );
};

export default BuyerRegistrationForm;