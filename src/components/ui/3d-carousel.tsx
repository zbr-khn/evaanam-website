"use client"

import React, { memo, useEffect, useLayoutEffect, useMemo, useState, useRef } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { Play, Pause, ChevronLeft, ChevronRight, X, Sparkles, Maximize2 } from "lucide-react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// Fallback high-definition curated photography
const DEFAULT_CARDS = [
  "./images/home-highlights/vivo.png",
  "./images/gallery-weddings/IMG-6449-JPG.jpg",
  "./images/home-highlights/indigo.png",
  "./images/gallery-weddings/IMG-6650-JPG.jpg",
  "./images/home-highlights/boman.png",
  "./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg",
  "./images/home-highlights/rajpal.png",
  "./images/gallery-weddings/IMG-2923-JPG.jpg",
  "./images/home-highlights/pronto.png",
  "./images/gallery-corporate/IMG-20260301-WA0012-jpg.jpg",
  "./images/gallery-weddings/IMG-20260301-WA0010-jpg.jpg",
  "./images/gallery-corporate/IMG-20260301-WA0013-jpg.jpg",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
]

const transition = { duration: 0.25, ease: [0.32, 0.72, 0, 1] }
const transitionOverlay = { duration: 0.4, ease: [0.32, 0.72, 0, 1] }

export type ThreeDPhotoCarouselProps = {
  cards?: string[]
  autoRotateSpeed?: number // degrees per second
}

export function ThreeDPhotoCarousel({
  cards: customCards,
  autoRotateSpeed = 12,
}: ThreeDPhotoCarouselProps) {
  const cards = useMemo(() => customCards || DEFAULT_CARDS, [customCards])
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isScreenSizeSm ? 1000 : 1600
  const faceCount = cards.length
  const faceWidth = isScreenSizeSm ? 135 : 185
  const radius = cylinderWidth / (2 * Math.PI)

  const rotation = useMotionValue(0)
  const rotateYStyle = useTransform(rotation, (val) => `${val}deg`)

  // Auto-rotation animation loop with requestAnimationFrame
  useEffect(() => {
    let animId: number
    let lastTime: number | null = null

    const step = (now: number) => {
      if (lastTime !== null) {
        const deltaSec = (now - lastTime) / 1000
        if (!isPaused && !isDragging && !isHovered && !activeImg && isCarouselActive) {
          const deltaAngle = autoRotateSpeed * deltaSec
          rotation.set(rotation.get() - deltaAngle)
        }
      }
      lastTime = now
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [isPaused, isDragging, isHovered, activeImg, isCarouselActive, autoRotateSpeed, rotation])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  const handleNudge = (direction: "left" | "right") => {
    const angleStep = 360 / faceCount
    const current = rotation.get()
    const target = direction === "left" ? current + angleStep : current - angleStep
    animate(rotation, target, {
      type: "spring",
      stiffness: 140,
      damping: 24,
      mass: 0.3,
    })
  }

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-night-950/85 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-10 cursor-pointer"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close Preview"
                className="absolute -top-12 right-0 p-2 text-cream-100 hover:text-bronze-400 bg-night-900/80 hover:bg-night-800 rounded-full border border-bronze-500/30 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.img
                src={activeImg}
                alt="Enlarged 3D Gallery Frame"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-2 border-bronze-500/40"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <span className="mt-4 text-xs font-mono uppercase tracking-widest text-bronze-400 bg-night-900/90 px-4 py-1.5 rounded-full border border-bronze-500/30">
                Click anywhere to return to 3D reel
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Scene Viewport */}
      <div
        className="relative h-[480px] sm:h-[540px] w-full flex items-center justify-center overflow-visible"
        style={{
          perspective: "1200px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragStart={() => setIsDragging(true)}
          onDrag={(_, info) => {
            if (isCarouselActive) {
              // Smooth 1:1 angular drag tracking
              const sensitivity = 0.28
              rotation.set(rotation.get() + info.delta.x * sensitivity)
            }
          }}
          onDragEnd={(_, info) => {
            setIsDragging(false)
            // Fling momentum physics
            const velocityOffset = info.velocity.x * 0.12
            const target = rotation.get() + velocityOffset
            animate(rotation, target, {
              type: "spring",
              stiffness: 90,
              damping: 24,
              mass: 0.2,
            })
          }}
          className="relative flex h-full items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            rotateY: rotateYStyle,
            width: `${cylinderWidth}px`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {cards.map((imgUrl, i) => {
            const angle = i * (360 / faceCount)
            return (
              <div
                key={`facet-${imgUrl}-${i}`}
                className="absolute flex items-center justify-center"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                }}
              >
                <div
                  onClick={() => handleClick(imgUrl)}
                  className="group relative w-full p-2 bg-cream-100/90 dark:bg-night-850/90 border border-chocolate-700/20 dark:border-bronze-500/40 rounded-2xl shadow-xl hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-night-900">
                    <img
                      src={imgUrl}
                      alt={`Deployment Showcase ${i + 1}`}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2.5">
                      <span className="flex items-center space-x-1.5 text-[10px] font-mono text-cream-50 bg-bronze-600/90 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Floating Interactive Controls Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 z-10">
        <button
          type="button"
          onClick={() => handleNudge("left")}
          aria-label="Rotate Previous"
          className="p-2.5 rounded-full bg-cream-100 dark:bg-night-800 text-chocolate-800 dark:text-cream-100 hover:text-amber-500 border border-chocolate-700/15 dark:border-bronze-500/30 shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-cream-100 dark:bg-night-800 text-chocolate-800 dark:text-cream-100 hover:text-amber-500 border border-chocolate-700/15 dark:border-bronze-500/30 shadow-md hover:scale-105 active:scale-95 transition-all text-xs font-mono font-medium"
        >
          {isPaused ? (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span>Resume Spin</span>
            </>
          ) : (
            <>
              <Pause className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Pause Spin</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNudge("right")}
          aria-label="Rotate Next"
          className="p-2.5 rounded-full bg-cream-100 dark:bg-night-800 text-chocolate-800 dark:text-cream-100 hover:text-amber-500 border border-chocolate-700/15 dark:border-bronze-500/30 shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default ThreeDPhotoCarousel
