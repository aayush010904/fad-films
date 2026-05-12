import { useEffect, useState } from 'react'

export default function useScrolled(threshold=80){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>threshold)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[threshold])
  return scrolled
}
