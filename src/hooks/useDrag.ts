import { useCallback, useEffect, useState } from 'react';
import { Position } from '../types';
import { useAudio } from './useAudio';

interface UseDragProps {
  initialPosition: Position;
  boundary?: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  onDragStart?: () => void;
  onDragEnd?: (position: Position) => void;
}

export const useDrag = ({
  initialPosition,
  boundary,
  onDragStart,
  onDragEnd
}: UseDragProps) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const { playSound } = useAudio();
  
  // Handle drag state
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
    onDragStart?.();
    playSound('drag');
  }, [onDragStart, playSound]);
  
  // Handle position update during drag
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    let newX = e.clientX;
    let newY = e.clientY;
    
    // Apply boundaries if provided
    if (boundary) {
      newX = Math.min(Math.max(newX, boundary.minX), boundary.maxX);
      newY = Math.min(Math.max(newY, boundary.minY), boundary.maxY);
    }
    
    setPosition({ x: newX, y: newY });
  }, [isDragging, boundary]);
  
  // Handle drag end
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd?.(position);
      playSound('drop');
    }
  }, [isDragging, onDragEnd, position, playSound]);
  
  // Similar handlers for touch events
  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
    onDragStart?.();
    playSound('drag');
  }, [onDragStart, playSound]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    let newX = touch.clientX;
    let newY = touch.clientY;
    
    if (boundary) {
      newX = Math.min(Math.max(newX, boundary.minX), boundary.maxX);
      newY = Math.min(Math.max(newY, boundary.minY), boundary.maxY);
    }
    
    setPosition({ x: newX, y: newY });
  }, [isDragging, boundary]);
  
  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd?.(position);
      playSound('drop');
    }
  }, [isDragging, onDragEnd, position, playSound]);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);
  
  return {
    position,
    setPosition,
    isDragging,
    handlers: {
      onMouseDown: handleMouseDown,
      onTouchStart: handleTouchStart
    }
  };
};