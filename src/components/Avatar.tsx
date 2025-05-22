import React from 'react';
import { AvatarProps } from '../types';
import { Star, Sparkles } from 'lucide-react';

const Avatar: React.FC<AvatarProps & React.HTMLAttributes<HTMLDivElement>> = ({
  position,
  activeStation,
  ...props
}) => {
  // Calculate transform style based on position
  const style = {
    transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
    transition: props.onMouseDown ? 'none' : 'transform 0.1s ease-out',
  };

  return (
    <div
      className={`fixed top-0 left-0 w-12 h-12 cursor-grab z-40 ${
        props.onMouseDown ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={style}
      {...props}
    >
      {/* Avatar body */}
      <div className="w-full h-full relative">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300 to-amber-200 opacity-80 blur-md animate-pulse" />
        
        {/* Main circle */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-amber-100 to-rose-200 shadow-lg z-10">
          {/* Icon */}
          <Sparkles size={18} className="text-rose-800" strokeWidth={2.5} />
        </div>
        
        {/* Outer ring */}
        <div className="absolute inset-[-2px] rounded-full border-2 border-white/30 animate-spin-slow" />
        
        {/* Orbit particles */}
        <div className="absolute inset-[-8px] animate-reverse-spin-slow">
          <Star 
            size={12} 
            className="absolute top-1 right-1 text-amber-200" 
            fill="currentColor" 
          />
          <Star 
            size={10} 
            className="absolute bottom-2 left-0 text-rose-300" 
            fill="currentColor" 
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;