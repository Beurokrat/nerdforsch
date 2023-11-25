'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

export default function ShowReel() {
  const el = useRef<HTMLDivElement>(null)
  return (
    <section ref={el} className="clipped-corners md:aspect-16/9 md:aspect-video">
      <iframe
        src="https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1"
        className="pointer-events-none h-full w-full"
      />
    </section>
  )
}