import { MouseEventHandler, RefObject, useEffect } from "react";

export function useOnClickOutside(refArray, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (refArray.every((ref) => !ref?.current?.contains(event.target))) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refArray, handler]);
}

export default useOnClickOutside;
