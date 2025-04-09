import React from 'react';
import { Github, Linkedin, Instagram, Globe, Youtube } from 'lucide-react';
import Header from '@/components/layout/Header';
import TextEditor from '@/components/TextEditor';

// ... keep existing code (socialLinks array with X logo SVG)

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neuro-dark to-black flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-8 px-4">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Smart Writing Metrics</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              A futuristic writing tool with real-time metrics
            </p>
          </div>
          
          <TextEditor />
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground bg-black/20 backdrop-blur-lg">
        <div className="container relative">
          <p className="mb-2">© {new Date().getFullYear()} WordNova - Smart Writing Metrics</p>
          <div className="flex space-x-3 absolute bottom-0 right-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-neuro-blue transition-colors duration-300 group"
              >
                {React.createElement(link.icon, { 
                  className: typeof link.icon !== 'function' ? "w-4 h-4 group-hover:scale-110 transition-transform" : undefined,
                  strokeWidth: typeof link.icon !== 'function' ? 1.5 : undefined
                })}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
