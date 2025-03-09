import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, MapPin, Home, Car, Check } from 'lucide-react';

interface PreferencesFormProps {
  formData: {
    maxAmount: string;
    monthlySavings: string;
    location: string;
    propertyType: string;
    features: string[];
  };
  onChange: (field: string, value: string | string[]) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ formData, onChange }) => {
  const propertyTypes = ['Apartment', 'House', 'Villa', 'Townhouse', 'Vehicle'];
  
  const getFeatures = (type: string) => {
    if (type === 'Vehicle') {
      return [
        'Automatic', 
        'Hybrid/Electric', 
        'Leather Seats', 
        'Navigation', 
        'Backup Camera', 
        'Bluetooth',
        'Sunroof',
        'Premium Audio'
      ];
    }
    return [
      'Garage',
      'Pool',
      'Garden',
      'Security',
      'Smart Home',
      'Furnished',
      'Balcony',
      'Storage'
    ];
  };

  const formatCurrency = (value: string) => {
    const amount = parseInt(value) || 0;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

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

  // Clear features when property type changes
  const handlePropertyTypeChange = (type: string) => {
    onChange('propertyType', type);
    onChange('features', []);
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6">
        <motion.h2 
          className="text-xl font-bold text-deep-navy mb-1"
          variants={itemVariants}
        >
          Personalize Your Experience
        </motion.h2>
        <motion.p 
          className="text-slate text-sm"
          variants={itemVariants}
        >
          Help us find the perfect options for you
        </motion.p>
      </div>

      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.div className="space-y-2" variants={itemVariants}>
          <label className="flex items-center text-charcoal text-sm font-medium gap-2">
            <Sliders className="w-4 h-4 text-teal" />
            Budget Range
          </label>
          <input
            type="range"
            min={formData.propertyType === 'Vehicle' ? '5000' : '50000'}
            max={formData.propertyType === 'Vehicle' ? '200000' : '1000000'}
            step={formData.propertyType === 'Vehicle' ? '1000' : '10000'}
            value={formData.maxAmount}
            onChange={(e) => onChange('maxAmount', e.target.value)}
            className="w-full h-1.5 bg-light-gray rounded-lg appearance-none cursor-pointer accent-teal"
          />
          <div className="text-slate text-xs text-center">
            Up to {formatCurrency(formData.maxAmount)}
          </div>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label className="flex items-center text-charcoal text-sm font-medium gap-2">
            <MapPin className="w-4 h-4 text-teal" />
            Preferred Location
          </label>
          <select
            value={formData.location}
            onChange={(e) => onChange('location', e.target.value)}
            className="w-full p-2 text-sm border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-teal/30 transition-all"
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="Seattle">Seattle</option>
          </select>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label className="flex items-center text-charcoal text-sm font-medium gap-2">
            {formData.propertyType === 'Vehicle' ? (
              <Car className="w-4 h-4 text-teal" />
            ) : (
              <Home className="w-4 h-4 text-teal" />
            )}
            {formData.propertyType === 'Vehicle' ? 'Vehicle Type' : 'Property Type'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <motion.button
                key={type}
                onClick={(e) => {
                  e.preventDefault();
                  handlePropertyTypeChange(type);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-2 text-sm rounded-md border transition-all ${
                  formData.propertyType === type
                    ? 'border-teal bg-teal/10 text-teal'
                    : 'border-light-gray hover:border-teal'
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label className="flex items-center text-charcoal text-sm font-medium gap-2">
            <Check className="w-4 h-4 text-teal" />
            {formData.propertyType === 'Vehicle' ? 'Vehicle Features' : 'Property Features'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {getFeatures(formData.propertyType).map((feature) => (
              <motion.button
                key={feature}
                onClick={(e) => {
                  e.preventDefault();
                  const newFeatures = formData.features.includes(feature)
                    ? formData.features.filter((f) => f !== feature)
                    : [...formData.features, feature];
                  onChange('features', newFeatures);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-2 text-sm rounded-md border transition-all ${
                  formData.features.includes(feature)
                    ? 'border-teal bg-teal/10 text-teal'
                    : 'border-light-gray hover:border-teal'
                }`}
              >
                {feature}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PreferencesForm;