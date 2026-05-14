"use client";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface ImageData {
  src: string;
  alt: string;
  id: string;
}

interface ScatterPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface ImageStackProps {
  images?: ImageData[];
  maxRotation?: number;
  seed?: number;
  className?: string;
  onReshuffle?: () => void;
  compact?: boolean; // mobile mode — tighter scatter
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0, staggerChildren: 1.2 },
  },
};

const cardVariants = {
  hidden: (custom: { zIndex: number }) => ({
    x: 0, y: 0, rotate: 0, scale: 1, zIndex: custom.zIndex,
  }),
  visible: (custom: { position: ScatterPosition; zIndex: number; springConfig: object }) => ({
    x: custom.position.x,
    y: custom.position.y,
    rotate: custom.position.rotation,
    scale: custom.position.scale,
    zIndex: 10,
    transition: custom.springConfig,
  }),
};

const PolaroidStack = React.forwardRef<{ reshuffle: () => void }, ImageStackProps>(
  ({ images = [], maxRotation = 15, seed = 12345, className = "", onReshuffle, compact = false }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [imagesLoaded, setImagesLoaded] = React.useState(false);
    const [scatterPositions, setScatterPositions] = React.useState<ScatterPosition[]>([]);
    const [currentSeed, setCurrentSeed] = React.useState(seed);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const spacing = compact ? 120 : 185;
    const height = compact ? 420 : 620;

    const generateScatterPositions = React.useCallback(() => {
      const count = images.length;
      return images.map((_, i) => {
        const offset = (i - (count - 1) / 2) * spacing;
        const tilt = (i - (count - 1) / 2) * (maxRotation / (count - 1 || 1));
        const bob = i % 2 === 0 ? 10 : 30;
        return { x: offset, y: bob, rotation: tilt, scale: 1 };
      });
    }, [images, maxRotation, spacing]);

    React.useEffect(() => {
      const preload = async () => {
        await Promise.allSettled(
          images.map(img => new Promise<void>(res => {
            const i = new window.Image();
            i.onload = i.onerror = () => res();
            i.src = img.src;
          }))
        );
        setImagesLoaded(true);
      };
      preload();
    }, [images]);

    React.useEffect(() => {
      setScatterPositions(generateScatterPositions());
    }, [currentSeed, generateScatterPositions]);

    React.useEffect(() => {
      if (!imagesLoaded) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
        { threshold: 0.2 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, [imagesLoaded]);

    const reshuffle = React.useCallback(() => {
      setCurrentSeed(Math.floor(Math.random() * 1_000_000));
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 120);
      onReshuffle?.();
    }, [onReshuffle]);

    React.useImperativeHandle(ref, () => ({ reshuffle }), [reshuffle]);

    const springConfig = prefersReducedMotion
      ? { type: "tween", duration: 0.3 }
      : { type: "spring", stiffness: 100, damping: 20 };

    return (
      <div
        className={`relative w-full flex items-center justify-center ${className}`}
        style={{ height: `${height}px` }}
      >
        <motion.div
          ref={containerRef}
          className="relative w-full h-full"
          style={{ perspective: "1000px" }}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {images.map((image, index) => {
            const position = scatterPositions[index];
            if (!position) return null;
            return (
              <motion.div
                key={`${image.id}-${currentSeed}`}
                className="absolute"
                variants={cardVariants}
                custom={{ position, zIndex: images.length - index, springConfig }}
                style={{ left: "50%", top: "60%", marginLeft: "-80px", marginTop: "-240px", width: 160 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block shadow-2xl"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23000033'/%3E%3C/svg%3E";
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
);
PolaroidStack.displayName = "PolaroidStack";

const galleryImages: ImageData[] = [
  { id: "1", src: "/gallery/Photo1.png", alt: "Wedding Day" },
  { id: "2", src: "/gallery/Photo2.png", alt: "Sweet Sixteen" },
  { id: "3", src: "/gallery/Photo3.png", alt: "Holiday Party" },
  { id: "4", src: "/gallery/Photo4.png", alt: "Gerard's 65th" },
  { id: "5", src: "/gallery/Photo5.png", alt: "80s & 90s Party" },
  { id: "6", src: "/gallery/Photo6.png", alt: "Golden Years" },
  { id: "7", src: "/gallery/Photo7.png", alt: "Corporate Event" },
  { id: "8", src: "/gallery/Photo8.png", alt: "Wedding Vibes" },
  { id: "9", src: "/gallery/Photo9.png", alt: "Sweet 16" },
];

const stacks = [
  { images: galleryImages.slice(0, 3), seed: 42 },
  { images: galleryImages.slice(3, 6), seed: 99 },
  { images: galleryImages.slice(6, 9), seed: 777 },
];

export default function PolaroidGallery() {
  const refs = [
    React.useRef<{ reshuffle: () => void }>(null),
    React.useRef<{ reshuffle: () => void }>(null),
    React.useRef<{ reshuffle: () => void }>(null),
  ];

  return (
    <section id="gallery" className="bg-navy-light py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative"
          style={{ zIndex: 30 }}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-5">
            Moments That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Last Forever
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Watch the polaroids come alive — real shots from real events.
          </p>
        </motion.div>

        {/* ── Desktop: 3 stacks side by side ── */}
        <div className="hidden lg:flex items-center justify-center gap-8 relative" style={{ zIndex: 1 }}>
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col items-center gap-4 flex-1"
            >
              <PolaroidStack ref={refs[i]} images={stack.images} seed={stack.seed} />
              <button
                onClick={() => refs[i].current?.reshuffle()}
                className="flex items-center gap-2 text-white/40 hover:text-gold text-xs transition-colors"
              >
                <RefreshCw size={12} /> Shuffle
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile: infinite auto-scroll film reel ── */}
        <div className="lg:hidden relative overflow-hidden" style={{ zIndex: 1 }}>
          <style>{`
            @keyframes film-reel {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .film-reel-track {
              animation: film-reel 28s linear infinite;
            }
            .film-reel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #000044 30%, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #000044 30%, transparent)' }} />

          {/* duplicated strip — translateX(-50%) = exactly one full set → seamless loop */}
          <div className="film-reel-track flex gap-4 py-8" style={{ width: 'max-content' }}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                  marginTop: i % 2 === 0 ? 0 : 24,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="block shadow-xl rounded-sm"
                  style={{ width: 110, height: 330, objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='330'%3E%3Crect width='100%25' height='100%25' fill='%23000033'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
