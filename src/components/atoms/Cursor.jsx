import { useEffect, useRef } from 'react'

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      const target = e.target.closest('[data-cursor="hover"]')
      if (ringRef.current) {
        ringRef.current.style.width = target ? '56px' : '28px'
        ringRef.current.style.height = target ? '56px' : '28px'
        ringRef.current.style.borderColor = target ? '#D4FF3F' : '#FF4520'
      }
    }

    let raf
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-bone rounded-full pointer-events-none z-[70] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 border rounded-full pointer-events-none z-[70] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
        style={{ borderColor: '#FF4520' }}
      />
    </div>
  )
}

export default Cursor
