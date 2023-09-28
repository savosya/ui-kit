export const STICKY_CANVAS_CLASS = 'STICKY_CANVAS_CLASS'
export const stickyCanvasObj = {
  className: STICKY_CANVAS_CLASS,
  withToolbar: false
}

export const stickCanvas = () => {
  const canvas: HTMLDivElement = document.querySelector(`.${STICKY_CANVAS_CLASS}`)

  if (!canvas) {
    console.warn('[stickCanvas]: Canvas not found.')
    return
  }

  canvas.style.position = 'sticky'
  canvas.style.top = '0'
  canvas.style.zIndex = '100'
}

export const unstickCanvas = () => {
  const canvas: HTMLDivElement = document.querySelector(`.${STICKY_CANVAS_CLASS}`)

  if (!canvas) {
    console.warn('[unstickCanvas]: Canvas not found.')
    return
  }

  canvas.style.position = 'relative'
}
