import { useEffect, useRef, useState } from 'react'

export default function useCountUp(target = 0, duration = 1500, start = 0, enabled = true){
  const [value, setValue] = useState(start)
  const raf = useRef(null)
  useEffect(()=>{
    if(!enabled) return setValue(target)
    let startTime = null
    const loop = (t)=>{
      if(!startTime) startTime = t
      const progress = Math.min((t - startTime)/duration,1)
      const current = Math.floor(start + (target - start) * progress)
      setValue(current)
      if(progress<1) raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return ()=> cancelAnimationFrame(raf.current)
  },[target,duration,enabled])
  return value
}
