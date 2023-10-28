import Clipboard from 'clipboard'

/**
 * - description: 复制文本到剪切板
 * - param {string} text
 * - return {boolean} 是否复制成功
 */
export default function copyText(text: string): Promise<boolean> {
  const btn = document.createElement('button')
  const clipboard = new Clipboard(btn, {
    text: () => text,
  })
  return new Promise((resolve) => {
    clipboard.on('success', () => {
      resolve(true)
      clipboard.destroy()
    })
    clipboard.on('error', () => {
      resolve(false)
      clipboard.destroy()
    })
    btn.click()
  })
}
