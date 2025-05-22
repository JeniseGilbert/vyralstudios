import React, { useState } from 'react';
import { StationProps } from '../types';
import { useAudio } from '../hooks/useAudio';
import { ChevronRight } from 'lucide-react';

const Station: React.FC<StationProps> = ({
  id,
  name,
  description,
  icon,
  position,
  color,
  glowColor,
  isActive,
  onActivate
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { playSound } = useAudio();
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    playSound('hover');
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    playSound('click');
    onActivate(id);
  };
  
  // Dynamic styles
  const stationWidth = isActive ? 240 : 120;
  const stationHeight = isActive ? 200 : 120;
  
  // Transform for positioning
  const transformX = position.x - stationWidth / 2;
  const transformY = position.y - stationHeight / 2;
  
  return (
    <div
      className={`absolute transition-all duration-500 cursor-pointer flex flex-col items-center
                  ${isActive ? 'z-30' : 'z-20'} overflow-hidden`}
      style={{
        width: `${stationWidth}px`,
        height: `${stationHeight}px`,
        transform: `translate(${transformX}px, ${transformY}px)`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background glow */}
      <div 
        className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-opacity duration-500"
        style={{
          backgroundColor: glowColor,
          opacity: isActive ? 0.6 : isHovered ? 0.3 : 0.1,
          transform: `scale(${isActive ? 1.1 : isHovered ? 1.05 : 0.9})`,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      />
      
      {/* Card body */}
      <div 
        className="w-full h-full flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm p-4 border transition-all duration-500"
        style={{
          backgroundColor: `${color}20`,
          borderColor: `${color}40`,
          boxShadow: isActive || isHovered 
            ? `0 8px 32px -4px ${glowColor}40` 
            : '0 4px 12px -6px rgba(0,0,0,0.1)'
        }}
      >
        {/* Icon */}
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 mb-2"
          style={{ 
            backgroundColor: `${color}30`,
            transform: `scale(${isActive ? 1.2 : 1})`
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        
        {/* Title */}
        <h3 
          className="font-medium text-center transition-all duration-300"
          style={{ 
            color,
            fontSize: isActive ? '1.25rem' : '1rem'
          }}
        >
          {name}
        </h3>
        
        {/* Description (only visible when active) */}
        <div 
          className="w-full overflow-hidden transition-all duration-500 text-center mt-2"
          style={{ 
            maxHeight: isActive ? '80px' : '0',
            opacity: isActive ? 1 : 0,
            color: `${color}90`
          }}
        >
          <p className="text-sm">{description}</p>
          
          {/* Enter button */}
          <button 
            className="mt-3 px-4 py-1.5 rounded-full text-xs font-medium flex items-center justify-center mx-auto hover:scale-105 transition-all"
            style={{ backgroundColor: color, color: '#fff' }}
          >
            Enter <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Station;