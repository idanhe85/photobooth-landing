'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, PanInfo } from 'framer-motion'

interface Card {
  id: number
  src: string
  zIndex: number
}

interface ImgStackProps {
  images: string[]
}

export default function ImageStack({ images }: ImgStackProps) {
  const [cards, setCards] = useState<Card[]>(
    images.map((src, index) => ({
      id: index,
      src,
      zIndex: 50 - index * 10,
    }))
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const minDragDistance = 50

  const getCardStyles = (index: number) => ({
    x: index * -14,
    y: index * -10,
    rotate: index === 0 ? 0 : -(2 + index * 3),
    scale: 1,
    transition: { duration: 0.5 },
  })

  const handleDragStart = (_: unknown, info: PanInfo) => {
    dragStartPos.current = { x: info.point.x, y: info.point.y }
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const dist = Math.sqrt(
      Math.pow(info.point.x - dragStartPos.current.x, 2) +
        Math.pow(info.point.y - dragStartPos.current.y, 2)
    )
    if (isAnimating || dist < minDragDistance) return
    setIsAnimating(true)
    setCards((prev) => {
      const next = [...prev]
      const moved = next.shift()!
      next.push(moved)
      return next.map((card, i) => ({ ...card, zIndex: 50 - i * 10 }))
    })
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="relative flex items-center justify-center w-80 h-96 md:w-96 md:h-[28rem]">
      {cards.map((card, index) => {
        const isTop = index === 0
        return (
          <motion.div
            key={card.id}
            className="absolute w-56 md:w-64 origin-bottom overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
            style={{
              zIndex: card.zIndex,
              aspectRatio: '4/5',
              border: '2px solid rgba(201,168,76,0.4)',
            }}
            animate={getCardStyles(index)}
            drag={isTop && !isAnimating}
            dragElastic={0.2}
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileHover={isTop ? { scale: 1.04, transition: { duration: 0.2 } } : {}}
            whileDrag={{
              scale: 1.08,
              rotate: 0,
              zIndex: 100,
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              transition: { duration: 0.1 },
            }}
          >
            <Image
              src={card.src}
              alt={`Photo ${card.id + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 224px, 256px"
              draggable={false}
            />
            {isTop && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <span className="text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  גרור להחלפה
                </span>
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
