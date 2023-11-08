import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * - description:  统计数值动画
 */
const Statistic = ({ number, option }: { number?: number | string; option?: gsap.TweenVars }) => {
  const span = useRef(null)
  const [state, setState] = useState({
    number: 0,
  })
  useEffect(() => {
    const tl = gsap.to(state, {
      duration: 1,
      paused: true,
      number: number || 0,
      onUpdate() {
        setState({ number: Math.floor(state.number) })
      },
      scrollTrigger: {
        trigger: span.current,
        toggleActions: 'restart resume resume resume',
      },
      ...option,
    })
    return () => {
      tl.kill()
    }
  }, [])

  return <span ref={span}>{state.number}</span>
}

export default Statistic
