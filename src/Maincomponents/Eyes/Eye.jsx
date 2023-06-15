import React, { useRef, useEffect } from "react";

function Eye() {
  const eyeRef = useRef(null);

  useEffect(() => {
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