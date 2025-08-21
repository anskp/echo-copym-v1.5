import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const handleMouseMove = (event) => {
      // Only enable mouse interaction on larger screens
      if (window.innerWidth >= 640) {
        const rect = mountRef.current.getBoundingClientRect();
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(-28, 0, 150);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4a90e2, 1, 100);
    pointLight.position.set(-10, 10, 10);
    scene.add(pointLight);

    const loader = new GLTFLoader();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x4a90e2, transparent: true, opacity: 0.8 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    loader.load(
      '/assets/glb/copym-logo.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(60, 60, 60);
        model.position.set(3, -1, 0);
        model.castShadow = true;
        model.receiveShadow = true;

        scene.remove(cube);
        scene.add(model);
        modelRef.current = model;

        // gsap.fromTo(model.rotation, { y: 0 }, { y: Math.PI * 2, duration: 20, ease: 'none', repeat: -1 });

        gsap.fromTo(model.scale, { x: 0, y: 0, z: 0 }, {
          x: 60, y: 60, z: 60,
          duration: 1.5,
          ease: 'back.out(1.7)'
        });
      },
      undefined,
      (error) => {
        console.error('GLB load error:', error);

        gsap.fromTo(cube.rotation, { y: 0 }, { y: Math.PI * 2, duration: 10, ease: 'none', repeat: -1 });

        gsap.fromTo(cube.position, { y: -0.5 }, {
          y: 0.5,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1
        });
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        // Center the model on mobile screens, use mouse interaction on larger screens
        if (window.innerWidth < 640) {
          modelRef.current.position.x = -21;
          modelRef.current.position.y = -5;
        } else {
          modelRef.current.position.x = (mouseRef.current.x * 1.5) + 2.2;
          modelRef.current.position.y = (mouseRef.current.y * 1) - 3;
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-0 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250" stroke="currentColor" strokeWidth="2" className="text-black" />
          <path d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450" stroke="currentColor" strokeWidth="2" className="text-black" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-100 mix-blend-multiply">
            <img
              src="/assets/Images/cover.png"
              alt="Background"
              className="w-full h-full object-cover sm:object-center"
              style={{ objectPosition: '92% center' }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
            <div className="text-center lg:text-left lg:-mt-12 lg:ml-4 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span
                  className="text-[#ffffff]"
                  // style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.4)' }}
                >
                  Unlock Exclusive Assets, Invest With{' '}
                </span>
                <span
                  className="text-[#ffffff]"
                  // style={{ textShadow: '2px 2px 3px rgba(223, 223, 223, 0.4)' }}
                >
                  Confidence
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 mt-3 sm:mt-4 max-w-lg mx-auto lg:mx-0">
                Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 font-semibold text-white btn-gradient text-sm sm:text-base"
                >
                  Start Investing
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 font-semibold text-white btn-gradient-secondary text-sm sm:text-base"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500">
                <div>
                  <div className="font-semibold text-black text-base sm:text-lg">500K+</div>
                  <div>Active Users</div>
                </div>
                <div>
                  <div className="font-semibold text-black text-base sm:text-lg">$2.5B+</div>
                  <div>Assets Managed</div>
                </div>
                <div>
                  <div className="font-semibold text-black text-base sm:text-lg">15.2%</div>
                  <div>Avg. Returns</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <div
                ref={mountRef}
                className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <video
              src="/assets/videos/how-it-works.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}