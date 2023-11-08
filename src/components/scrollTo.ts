// 参考：https://gsap.com/docs/v3/Plugins/ScrollToPlugin

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export function scrollTo(position: gsap.TweenVars['scrollTo'], target?: gsap.TweenTarget) {
  return gsap.to(target || window, { duration: 1, scrollTo: position })
}

export default scrollTo
