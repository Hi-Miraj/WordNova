
import React from 'react';
import { Card } from '@/components/ui/card';

interface WordCounterProps {
  wordCount: number;
  charCount: number;
}

const WordCounter: React.FC<WordCounterProps> = ({ wordCount, charCount }) => {
  return (
    <Card className="glass-card border-neuro-violet/20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="glass p-4 rounded-xl w-full sm:w-auto">
            <p className="text-sm text-muted-foreground font-medium">Words</p>
            <p className="text-3xl font-bold text-gradient">{wordCount}</p>
          </div>
        </div>
        
        <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="glass p-4 rounded-xl w-full sm:w-auto">
            <p className="text-sm text-muted-foreground font-medium">Characters</p>
            <p className="text-3xl font-bold text-gradient">{charCount}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WordCounter;
