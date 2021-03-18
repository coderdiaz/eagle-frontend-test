import { useEffect, useState } from "react";


const useInactive = (alertTime: number, inactiveTime: number, callback: () => void) => {
  const [time, setTime] = useState<any>(null);
  const [timeAlert, setTimeAlert] = useState<any>(null);
  const [inactive, setInactive] = useState(false);

  const resetTime = () => {
    clearTimeout(timeAlert);
    clearTimeout(time);
    setInactive(false);

    const timer = setTimeout(() => {
      setInactive(true);
    }, 1000 * alertTime);
    setTimeAlert(timer);

    const longTimer = setTimeout(() => callback, 1000 * inactiveTime)
    setTime(longTimer);
  }

  useEffect(() => {
    // events
    window.onload = resetTime;
    window.onclick = resetTime;
    window.onkeypress = resetTime;
    window.ontouchstart = resetTime;
    window.onmousemove = resetTime;
    window.onmousedown = resetTime;
    window.addEventListener('scroll', resetTime, true);

    return () => {
      window.removeEventListener('scroll', resetTime, true);
    };
  }, []);

  return { inactive };
};

export default useInactive;
