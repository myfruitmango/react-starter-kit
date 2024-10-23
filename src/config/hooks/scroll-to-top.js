// ** React Imports
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location])
}
