import React, { createContext, useContext, useState, useEffect } from 'react';
import { Position } from '../types';

interface AppContextType {
  activeStation: string | null;
  setActiveStation: (stationId: string | null) => void;
  avatarPosition: Position;
  setAvatarPosition: (position: Position) => void;
  windowSize: {
    width: number;
    height: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeStation, setActiveStation] = useState<string | null>(null);
  const [avatarPosition, setAvatarPosition] = useState<Position>({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Set initial avatar position to center of screen
  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      setAvatarPosition({ 
        x: windowSize.width / 2, 
        y: windowSize.height / 2 
      });
    }
  }, [windowSize]);
  
  return (
    <AppContext.Provider
      value={{
        activeStation,
        setActiveStation,
        avatarPosition,
        setAvatarPosition,
        windowSize
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};