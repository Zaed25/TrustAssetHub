import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-50 mt-8">
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TrustAsset Hub. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;