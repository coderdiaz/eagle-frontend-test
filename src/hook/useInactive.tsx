import { useEffect, useState } from "react";


const useInactive = (alertTime: number, inactiveTime: number, callback: () => void) => {
  const [time, setTime] = useState<any>(null);
  const [timeAlert, setTimeAlert] = useState<any>(null);
  const [inactive, setInactive] = useState(false);

  const resetTime = () => {
    setInactive(false);
    clearTimeout(timeAlert);
    clearTimeout(time);

    setTimeAlert(setTimeout(() => {
      setInactive(true);
    }, 1000 * alertTime));

    setTime(setTimeout(callback, 1000 * inactiveTime));
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
