// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThrottleFn = (...args: any[]) => void

export function throttleHelper(delay: number, fn: ThrottleFn): ThrottleFn {
  let timer: NodeJS.Timer | null

  return (...args) => {
    if (timer) return

    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }

  // let lastExecTime = 0
  // const throttledHelper: ThrottleFn = (...args) => {
  //   const now = Date.now()
  //   if (now - lastExecTime >= delay) {
  //     fn(...args)

  //     lastExecTime = now
  //   }
  // }

  // return throttledHelper
}
