
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import WordCounter from './WordCounter';

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);

  // Calculate metrics on text change
  useEffect(() => {
    // Count words (any sequence of non-whitespace characters)
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
    
    // Count characters (including spaces)
    setCharCount(text.length);
  }, [text]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <Card className="glass-card border-neuro-violet/20 neon-glow overflow-hidden">
        <CardContent className="p-0">
          <textarea
            className="w-full min-h-[400px] bg-transparent p-6 text-lg outline-none resize-none scrollbar-none text-foreground"
            placeholder="Begin typing to see your writing metrics..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </CardContent>
      </Card>
      
      <WordCounter wordCount={wordCount} charCount={charCount} />
    </div>
  );
};

export default TextEditor;
