import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Slide = ({
  className,
  selector,
  type = 'from',
  option,
  fromTo,
  children,
}: {
  className?: string
  selector?: string
  type?: 'to' | 'from' | 'fromTo'
  option?: gsap.TweenVars
  fromTo?: gsap.TweenVars
  children?: React.ReactNode
}) => {
  const app = useRef(null)
  const content = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = selector ? selector : content.current
      gsap[type](
        el,
        {
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            toggleActions: 'restart resume resume resume',
          },
          ...option,
        },
        { ...fromTo },
      )
    }, app)

    return () => ctx.revert()
  }, [])

  return (
    <div className={`flex ${className}`} ref={app}>
      <div ref={content}>{children}</div>
    </div>
  )
}

export default Slide
