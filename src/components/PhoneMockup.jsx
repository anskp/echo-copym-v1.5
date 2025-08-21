import React from 'react';

export default function PhoneMockup({ screenshot, alt, isVideo = false, videoRef }) {
  return (
    <div className="w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
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
            autoplay
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