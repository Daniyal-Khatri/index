import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star, Moon, Sun, Coffee, Music2, Heart } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-1000 ${isNight ? 'bg-gray-900' : 'bg-gradient'}`}>
      {/* Floating Icons */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {i % 4 === 0 && <Sparkles className="text-yellow-300" size={24} />}
            {i % 4 === 1 && <Star className="text-purple-400" size={24} />}
            {i % 4 === 2 && <Music2 className="text-pink-400" size={24} />}
            {i % 4 === 3 && <Heart className="text-red-400" size={24} />}
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-64 h-64 rounded-full pointer-events-none mix-blend-multiply blur-xl"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `radial-gradient(circle, rgba(255,107,107,0.4) 0%, rgba(78,205,196,0.2) 100%)`,
          transition: 'all 0.1s ease',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsNight(!isNight)}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            {isNight ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-800" />}
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-7xl font-bold mb-8 animate-pulse-slow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            CRAZY VIBES
          </h1>

          <div className="flex gap-6 mb-12">
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <Zap className="text-yellow-400" size={48} />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <Coffee className="text-orange-400" size={48} />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.6s' }}>
              <Music2 className="text-purple-400" size={48} />
            </div>
          </div>

          <p className="text-xl mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            Welcome to the craziest corner of the web! Where colors dance, icons float, and your mouse paints the air with rainbow trails. 
            Dive into a world of pure imagination and digital artistry.
          </p>

          <button className="px-8 py-4 text-xl font-bold rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all transform hover:scale-110">
            EMBRACE THE CHAOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;