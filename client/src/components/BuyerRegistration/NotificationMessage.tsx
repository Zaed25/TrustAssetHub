import React from 'react';
import { CheckCircle } from 'lucide-react';

interface NotificationMessageProps {
  message: string;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({ message }) => (
  <div className="p-6 bg-mint/20 border border-mint text-deep-navy rounded-md">
    <div className="flex items-center gap-3">
      <CheckCircle className="w-6 h-6 text-teal" />
      <p className="text-lg font-medium">{message}</p>
    </div>
    <p className="mt-4 text-slate">
      Our AI-powered system will analyze your preferences and match you with the best available options.
      You'll receive personalized recommendations shortly.
    </p>
  </div>
);

export default NotificationMessage;