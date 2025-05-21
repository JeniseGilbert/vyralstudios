export interface Position {
  x: number;
  y: number;
}

export interface StationProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  position: Position;
  color: string;
  glowColor: string;
  isActive: boolean;
  onActivate: (id: string) => void;
}

export interface AvatarProps {
  position: Position;
  setPosition: (position: Position) => void;
  activeStation: string | null;
}

export type SoundType = 'hover' | 'click' | 'drag' | 'drop';