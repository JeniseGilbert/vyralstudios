import React, { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { useDrag } from './hooks/useDrag';
import { stationsData } from './components/stations';
import Background from './components/Background';
import Particles from './components/Particles';
import Avatar from './components/Avatar';
import Station from './components/Station';
import Header from './components/Header';
import Instructions from './components/Instructions';
import CustomCursor from './components/CustomCursor';

// Main app canvas where all interactions happen
const Canvas: React.FC = () => {
  const { 
    activeStation, 
    setActiveStation, 
    avatarPosition, 
    setAvatarPosition,
    windowSize
  } = useApp();
  
  const [stations, setStations] = useState(stationsData);
  const [isDragging, setIsDragging] = useState(false);
  
  // Initialize drag functionality
  const { position, handlers } = useDrag({
    initialPosition: avatarPosition,
    boundary: {
      minX: 0,
      maxX: windowSize.width,
      minY: 0,
      maxY: windowSize.height
    },
    onDragStart: () => setIsDragging(true),
    onDragEnd: () => setIsDragging(false)
  });
  
  // Update avatar position when drag position changes
  useEffect(() => {
    setAvatarPosition(position);
  }, [position, setAvatarPosition]);
  
  // Position stations relative to window size
  useEffect(() => {
    if (windowSize.width === 0) return;
    
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    
    // Adjust station positions based on window size
    const updatedStations = stationsData.map(station => {
      let xOffset = station.position.x;
      let yOffset = station.position.y;
      
      // Scale for smaller screens
      if (windowSize.width < 768) {
        xOffset = xOffset * 0.7;
        yOffset = yOffset * 0.7;
      }
      
      return {
        ...station,
        position: {
          x: centerX + xOffset,
          y: centerY + yOffset
        }
      };
    });
    
    setStations(updatedStations);
  }, [windowSize]);
  
  // Check if avatar is close to a station
  useEffect(() => {
    const checkProximity = () => {
      // Don't check when actively dragging
      if (isDragging) return;
      
      let closestStationId = null;
      let minDistance = 100; // Threshold for activation
      
      stations.forEach(station => {
        const distance = Math.sqrt(
          Math.pow(avatarPosition.x - station.position.x, 2) +
          Math.pow(avatarPosition.y - station.position.y, 2)
        );
        
        if (distance < minDistance) {
          minDistance = distance;
          closestStationId = station.id;
        }
      });
      
      setActiveStation(closestStationId);
    };
    
    checkProximity();
  }, [avatarPosition, isDragging, stations, setActiveStation]);
  
  const handleStationActivate = (id: string) => {
    setActiveStation(id);
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Background />
      <Particles />
      
      {/* Stations */}
      {stations.map(station => (
        <Station
          key={station.id}
          {...station}
          isActive={activeStation === station.id}
          onActivate={handleStationActivate}
        />
      ))}
      
      {/* Draggable Avatar */}
      <Avatar
        position={avatarPosition}
        activeStation={activeStation}
        {...handlers}
      />
      
      {/* Show cursor on desktop only */}
      {windowSize.width > 768 && (
        <CustomCursor isDragging={isDragging} />
      )}
    </div>
  );
};

// Root App component
function App() {
  return (
    <AppProvider>
      <div className="font-sans text-slate-800 cursor-none">
        <Header />
        <Canvas />
        <Instructions />
      </div>
    </AppProvider>
  );
}

export default App;