/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'deep-navy': '#2A3F5F',
        'teal': '#3AAFA9',
        'soft-gold': '#D4AF37',
        
        // Secondary Palette
        'slate': '#6C757D',
        'coral': '#FF6B6B',
        'mint': '#A2D9B1',
        
        // Neutrals
        'pure-white': '#FFFFFF',
        'light-gray': '#F8F9FA',
        'charcoal': '#343A40',
        
        // AI & Tech Accents
        'electric-purple': '#6F42C1',
        'cyan': '#17A2B8'
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #3AAFA9, #17A2B8)',
        'gradient-hero': 'linear-gradient(to right, #2A3F5F, #6F42C1)'
      }
    },
  },
  plugins: [],
};