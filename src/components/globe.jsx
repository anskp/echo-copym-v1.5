"use client"

import createGlobe from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "../lib/utils"

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const [webglSupported, setWebglSupported] = useState(true)

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current && canvasRef.current.offsetWidth > 0) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported, falling back to static display');
      setWebglSupported(false);
      return;
    }

    window.addEventListener("resize", onResize)
    
    // Add a small delay to ensure canvas is properly mounted
    const initTimer = setTimeout(() => {
      onResize()
      
      try {
        if (!canvasRef.current) {
          console.warn('Canvas ref not available');
          return;
        }
        
        const globe = createGlobe(canvasRef.current, {
          ...config,
          width: width * 2,
          height: width * 2,
          onRender,
        })

        setTimeout(() => {
          if (canvasRef.current) {
            canvasRef.current.style.opacity = "1"
          }
        })
        
        // Store globe reference for cleanup
        const globeRef = { current: globe };
        
        return () => {
          try {
            if (globeRef.current) {
              globeRef.current.destroy()
            }
          } catch (error) {
            console.warn('Error destroying globe:', error)
          }
        }
      } catch (error) {
        console.warn('Error creating globe:', error)
        // Fallback to static display
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
        }
      }
    }, 100)

    return () => {
      clearTimeout(initTimer)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Fallback static globe when WebGL is not supported
  if (!webglSupported) {
    return (
      <div
        className={cn(
          "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[300px] md:max-w-[450px]",
          className,
        )}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-300"></div>
            {/* Static markers */}
            <div className="absolute top-3 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute top-6 right-4 w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-6 left-4 w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-3 right-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full transform translate-x-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[300px] md:max-w-[450px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
