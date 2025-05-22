import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden perspective-1000">
      {/* 3D Room Container */}
      <div className="relative w-full h-full transform-gpu">
        {/* Back Wall */}
        <div className="absolute inset-0 bg-[#e4eef8]">
          {/* Wall texture */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Logo on wall */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-96">
            <div className="relative">
              {/* 3D effect for logo */}
              <div className="absolute inset-0 blur-lg bg-gradient-to-b from-rose-300/30 to-amber-200/30 transform translate-y-1" />
              <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300 bg-clip-text text-transparent tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                VYRAL
              </h1>
              <p className="text-sm text-center mt-2 text-slate-400 tracking-[0.3em] font-medium">
                FOR INTERNET BREAKERS
              </p>
            </div>
          </div>
        </div>

        {/* Left Wall */}
        <div 
          className="absolute left-0 top-0 w-full h-full origin-left transform-gpu"
          style={{ transform: 'rotateY(60deg) translateX(-50%)', background: 'linear-gradient(to right, #d8e3f0, rgba(216, 227, 240, 0))' }}
        />

        {/* Right Wall */}
        <div 
          className="absolute right-0 top-0 w-full h-full origin-right transform-gpu"
          style={{ transform: 'rotateY(-60deg) translateX(50%)', background: 'linear-gradient(to left, #d8e3f0, rgba(216, 227, 240, 0))' }}
        />

        {/* Floor */}
        <div 
          className="absolute bottom-0 w-full h-[800px] origin-bottom transform-gpu"
          style={{ transform: 'rotateX(60deg) translateY(50%)', perspective: '1000px' }}
        >
          {/* Floor grid */}
          <div className="absolute inset-0 bg-[#e4eef8]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Ambient Lighting */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-rose-200/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-amber-100/20 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: Math.random() > 0.5 ? '#fda4af' : '#fcd34d',
                opacity: Math.random() * 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;