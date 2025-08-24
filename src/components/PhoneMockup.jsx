import React from 'react';

export default function PhoneMockup({ screenshot, alt, isVideo = false, videoRef, scale = 1, className = "" }) {
  const baseWidth = 256; // 64 * 4 = 256px
  const baseHeight = 520;
  
  const scaledWidth = baseWidth * scale;
  const scaledHeight = baseHeight * scale;
  
  return (
    <div 
      className={`bg-black rounded-[3rem] p-2 shadow-2xl ${className}`}
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`
      }}
    >
      <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
        {isVideo ? (
          <video
            ref={videoRef}
            src={screenshot}
            alt={alt}
            className="absolute top-0 left-0 w-full h-full object-contain bg-black"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          />
        ) : (
          <img
            src={screenshot}
            alt={alt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        {/* <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-1">
          <img
            src="/assets/Images/iphone-statusbar.png"
            alt="Status Bar"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </div>
  );
}