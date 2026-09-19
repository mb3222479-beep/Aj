import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ArrowLeftRight, Info } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Before image: older kitchen with worn laminate & dark compartmentalized cabinets
  // After image: bright open modernized kitchen with quartz countertops & island
  const beforeImage = "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80";
  const afterImage = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-white border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Interactive Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            See the Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transforming outdated, cramped layouts into functional, light-filled, and durable living spaces designed for modern life. Drag the slider to compare.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#f8fbfe] border border-[#e2ecf4] text-slate-700 text-xs font-medium">
            <Info className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Placeholder comparison for demonstration. Actual A&J client project photos can be connected directly.</span>
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            id="before-after-interactive-container"
            className="relative h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-xl border border-[#d4e4f2] select-none cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Before and after transformation slider"
          >
            {/* After Image (Full background) */}
            <img
              src={afterImage}
              alt="After remodeling: Modern renovated kitchen layout"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              decoding="async"
            />

            {/* After Badge */}
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#081d33]/85 backdrop-blur-xs text-white text-xs font-extrabold tracking-wider uppercase border border-white/20 shadow-md">
              After Renovation
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeImage}
                alt="Before remodeling: Outdated kitchen prior to renovation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                draggable={false}
                decoding="async"
              />

              {/* Before Badge */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-xs text-[#132537] text-xs font-extrabold tracking-wider uppercase border border-[#d4e4f2] shadow-md">
                Before Remodel
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] transform -translate-x-1/2 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Handle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0d3356] border-2 border-[#307ab4] shadow-2xl flex items-center justify-center pointer-events-auto transform hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#307ab4]" />
              </div>
            </div>

            {/* Instruction tooltip overlay on hover */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#081d33]/75 backdrop-blur-xs text-white text-xs font-medium pointer-events-none flex items-center gap-1.5 border border-white/10">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#4ea5dc]" />
              <span>Drag or slide left and right</span>
            </div>
          </div>

          {/* Accessible Range Input Control for Keyboard Navigation */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
            <span>Before (0%)</span>
            <div className="flex-1 mx-4">
              <label htmlFor="before-after-slider-input" className="sr-only">
                Adjust comparison slider percentage
              </label>
              <input
                type="range"
                id="before-after-slider-input"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#307ab4]"
              />
            </div>
            <span>After (100%)</span>
          </div>

        </div>

      </div>
    </section>
  );
};
