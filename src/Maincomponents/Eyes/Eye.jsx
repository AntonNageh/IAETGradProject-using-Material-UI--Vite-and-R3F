import React, { useRef, useEffect } from "react";

function Eye() {
  //Using useRef hook to change the eyeRef variable.
  const eyeRef = useRef(null);
  //UseEffect for rendering the changes, which results on changing the eyes position.
  useEffect(() => {
    //Getting the actual position of eye. 
    const eye = eyeRef.current;
    const handleMouseMove = e => {
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let x = e.clientX;
      let y = e.clientY;
      let radian = Math.atan2(x - eyeX, y - eyeY);
      let rotationAngle = radian * (180 / Math.PI) * -1 + 152;
      rotationAngle = Math.max(-360, Math.min(360, rotationAngle));
      eye.style.transform = `rotate(${rotationAngle}deg)`;
    };
    //Once the user moves the mouse, the function handleMouseMove re-runs to get the mouse position to update the eyes position.
    document.addEventListener("mousemove", handleMouseMove);

    return () =>{
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eye" ref={eyeRef}>
      <div className="eyeball"></div>
    </div>
  );
}

export default Eye;