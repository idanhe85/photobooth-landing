"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

// Singleton: engine initialised once for the whole app
let engineReady = false;
let enginePromise: Promise<void> | null = null;

function getEngine(): Promise<void> {
  if (engineReady) return Promise.resolve();
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => { engineReady = true; });
  }
  return enginePromise;
}

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#C9A84C",
  particleDensity = 80,
}: SparklesProps) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    getEngine().then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60,
            interactivity: { events: { resize: { enable: true } } },
            particles: {
              collisions: { enable: false },
              color: { value: particleColor },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: { min: 0.1, max: speed },
                straight: false,
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity,
              },
              opacity: {
                value: { min: 0.1, max: 0.9 },
                animation: { enable: true, speed: speed * 0.8, sync: false },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize, max: maxSize } },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
