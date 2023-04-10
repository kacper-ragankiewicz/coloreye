import { number } from "prop-types";
import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, state, change) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        change()
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    }
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  if(props.state === true || props.state === number) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useOutsideAlerter(wrapperRef, props.state, props.change);
  }
  return <div ref={wrapperRef}>{props.children}</div>;
}