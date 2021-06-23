import { throttle } from './commen'

export const remBase = 14

let htmlFontSize

function calc(){
  const maxFontSize = 18
  const minFontSize = 14
  const html = document.getElementsByTagName('html')[0]
  const width = html.clientWidth
  let size = remBase * (width / 1440)
  size = Math.min(maxFontSize, size)
  size = Math.max(minFontSize, size)
  html.style.fontSize = size + 'px'
  htmlFontSize = size
}
calc()
window.addEventListener('resize', throttle(calc, 500))

// 静态
export function toRem(px){
  return `${px / remBase}rem`
}
// 动态
export function toCurrentRem(px) {
  return `${px / htmlFontSize}rem`
}
