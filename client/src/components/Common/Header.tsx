import React from 'react';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center">
      <Building2 className="h-8 w-8 text-green-600 mr-2" />
      <h1 className="text-2xl font-bold text-gray-900">TrustAsset Hub</h1>
    </div>
  </header>
);

export default Header;