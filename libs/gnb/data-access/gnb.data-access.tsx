import { useCallback, useEffect, useState } from 'react'

import { throttleHelper } from '@/libs/_shared/helpers/throttle.helper'

const useGnbView = () => {
  const [position, setPosition] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    const moving = window.scrollY
    setVisible(position > moving)
    setPosition(moving)
  }, [position])

  useEffect(() => {
    window.addEventListener('scroll', throttleHelper(300, handleScroll))
    return () => {
      window.removeEventListener('scroll', throttleHelper(300, handleScroll))
    }
  }, [handleScroll])

  return {
    visible,
    position,
  }
}

export default useGnbView
