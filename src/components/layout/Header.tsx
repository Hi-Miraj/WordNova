
import React from 'react';
import { Pen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Pen className="h-8 w-8 text-neuro-blue animate-pulse-glow" />
          <h1 className="text-2xl font-bold text-gradient">
            Neuro<span className="text-neuro-violet">Type</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
