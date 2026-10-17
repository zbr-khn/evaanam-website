import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="min-h-[500px] flex flex-col justify-center border border-dashed border-bronze-500/30 rounded-2xl space-y-4 bg-night-950/30 p-2 sm:p-4 backdrop-blur-sm">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}

export default ThreeDPhotoCarouselDemo
