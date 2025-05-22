import React, { useState } from 'react';
import { useAudio } from '../hooks/useAudio';

const Instructions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { playSound } = useAudio();
  
  const handleClose = () => {
    playSound('click');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 max-w-md w-full px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
        <h3 className="text-lg font-semibold text-white/90 mb-2">
          Welcome to VYRAL Creative Space
        </h3>
        
        <p className="text-sm text-white/70 mb-3">
          Drag the glowing avatar to explore different services in our virtual studio.
        </p>
        
        <div className="flex items-center justify-between text-xs text-white/60 py-2 px-3 rounded-lg bg-white/5">
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 mr-2"></span>
            <span>Drag me to any station</span>
          </div>
          <div>
            <span className="px-2 py-0.5 rounded bg-white/10 font-mono">Drag</span>
          </div>
        </div>
        
        <button 
          onClick={handleClose}
          className="w-full mt-3 py-2 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default Instructions;