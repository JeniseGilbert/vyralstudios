import { useCallback, useRef, useState, useEffect } from 'react';

type SoundType = 'hover' | 'click' | 'drag' | 'drop';

// Map of sounds to their respective URLs
const SOUNDS: Record<SoundType, string> = {
  hover: 'https://assets.codepen.io/t-1/pop-up-on.mp3',
  click: 'https://assets.codepen.io/t-1/pop-down.mp3',
  drag: 'https://assets.codepen.io/t-1/pop-up-off.mp3',
  drop: 'https://assets.codepen.io/t-1/pop-selection.mp3'
};

export const useAudio = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const audioElements = useRef<Record<SoundType, HTMLAudioElement>>({} as Record<SoundType, HTMLAudioElement>);

  // Initialize audio elements after user interaction
  const initializeAudio = useCallback(() => {
    if (!isInitialized) {
      Object.entries(SOUNDS).forEach(([key, url]) => {
        const audio = new Audio(url);
        audio.volume = 0.5; // Set volume to 50%
        audioElements.current[key as SoundType] = audio;
      });
      setIsInitialized(true);
      document.removeEventListener('click', initializeAudio);
    }
  }, [isInitialized]);

  useEffect(() => {
    // Add click listener to initialize audio after user interaction
    document.addEventListener('click', initializeAudio);
    return () => {
      document.removeEventListener('click', initializeAudio);
    };
  }, [initializeAudio]);

  const playSound = useCallback((type: SoundType) => {
    if (!isInitialized) {
      return; // Don't play if not initialized
    }
    const sound = audioElements.current[type];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.error('Audio playback failed:', e));
    }
  }, [isInitialized]);

  return { playSound };
};