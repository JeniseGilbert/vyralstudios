import React, { useEffect, useState } from 'react';
import { Position } from '../types';

interface CustomCursorProps {
  isDragging: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isDragging }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      className={`fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-150 ${
        isDragging ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div 
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDragging 
            ? 'bg-white/30 backdrop-blur-sm w-8 h-8 border-2 border-white/50' 
            : 'bg-white/80'
        }`}
      >
        {isDragging && (
          <div className="text-[8px] text-white font-bold">
            DRAG
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;