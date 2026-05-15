"use client";
import * as React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

interface ImageData {
  src: string;
  alt: string;
  id: string;
}


const galleryImages: ImageData[] = [
  { id: "1", src: "/gallery/Photo1.jpg", alt: "Wedding Day" },
  { id: "2", src: "/gallery/Photo2.jpg", alt: "Sweet Sixteen" },
  { id: "3", src: "/gallery/Photo3.jpg", alt: "Holiday Party" },
  { id: "4", src: "/gallery/Photo4.jpg", alt: "Gerard's 65th" },
  { id: "5", src: "/gallery/Photo5.jpg", alt: "80s & 90s Party" },
  { id: "6", src: "/gallery/Photo6.jpg", alt: "Golden Years" },
  { id: "7", src: "/gallery/Photo7.jpg", alt: "Corporate Event" },
  { id: "8", src: "/gallery/Photo8.jpg", alt: "Wedding Vibes" },
  { id: "9", src: "/gallery/Photo9.jpg", alt: "Sweet 16" },
];

export default function PolaroidGallery() {
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

        {/* ── Film reel (all screens) ── */}
        <div className="relative overflow-hidden" style={{ zIndex: 1 }}>
          <style>{`
            @keyframes reel-left {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            @keyframes reel-right {
              from { transform: translateX(-50%); }
              to   { transform: translateX(0); }
            }
            .reel-left  { animation: reel-left  32s linear infinite; }
            .reel-right { animation: reel-right 32s linear infinite; }
            @media (hover: hover) {
              .reel-left:hover, .reel-right:hover { animation-play-state: paused; }
            }
          `}</style>

          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #000044 40%, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #000044 40%, transparent)' }} />

          {/* Row 1 — scrolls left */}
          <div className="reel-left flex gap-4 pb-4 pt-2" style={{ width: 'max-content' }}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={`a-${i}`} className="flex-shrink-0"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`, marginTop: i % 2 === 0 ? 0 : 20 }}>
                <NextImage
                  src={img.src} alt={img.alt}
                  width={140} height={420} quality={85}
                  draggable={false}
                  className="block shadow-xl rounded-sm"
                  style={{ width: 140, height: 420, objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right (desktop only) */}
          <div className="hidden lg:flex reel-right gap-4 pt-4 pb-2" style={{ width: 'max-content' }}>
            {[...[...galleryImages].reverse(), ...[...galleryImages].reverse()].map((img, i) => (
              <div key={`b-${i}`} className="flex-shrink-0"
                style={{ transform: `rotate(${i % 2 === 0 ? 1.5 : -1.5}deg)`, marginTop: i % 2 === 0 ? 20 : 0 }}>
                <NextImage
                  src={img.src} alt={img.alt}
                  width={140} height={420} quality={85}
                  draggable={false}
                  className="block shadow-xl rounded-sm"
                  style={{ width: 140, height: 420, objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
