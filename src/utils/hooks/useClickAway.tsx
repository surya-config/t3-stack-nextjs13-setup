import { useEffect, useRef, useState } from "react";

function useClickAway() {
  const [active, setActive] = useState(false);
  const ref = useRef<any>(null);

  function toggle() {
    setActive(!active);
  }

  function handleClick(e: { target: any }) {
    if (!ref.current.contains(e.target)) setActive(false);
  }

  useEffect(() => {
    if (active) document.addEventListener("mousedown", handleClick);
    else document.removeEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active]);

  return { ref, active, setActive, toggle };
}

export default useClickAway;
