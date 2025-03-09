export const validateName = (name: string): string | null => {
  if (!name.trim()) return 'Full Name is required';
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Invalid email format';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return 'Phone Number is required';
  const phoneRegex = /^\+?[0-9\s\-]{8,}$/;
  if (!phoneRegex.test(phone)) return 'Invalid phone number';
  return null;
};

export const validateBankAccount = (account: string): string | null => {
  if (!account.trim()) return 'Bank Account is required';
  return null;
};

export const validateAmount = (amount: string): string | null => {
  if (!amount) return 'This field is required';
  if (isNaN(Number(amount)) || Number(amount) <= 0) return 'Must be a positive number';
  return null;
};

export const validateLocation = (location: string): string | null => {
  if (!location) return 'Location is required';
  return null;
};