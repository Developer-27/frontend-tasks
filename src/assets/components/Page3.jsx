import React, { useState } from "react";

const Page3 = (props) => {
  const [move, setMove] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const cursorMoving = (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - 15, // Centering the cursor effect
      y: e.clientY - rect.top - 15,
    });
  };

  return (
    <div className="h-[400px] w-[500px] overflow-hidden ">
      {/* Cursor Effect */}

      {/* Image Wrapper with Hover Scale */}
      <div
        onMouseEnter={() => setMove(true)}
        onMouseLeave={() => setMove(false)}
        onMouseMove={cursorMoving}
        className={`relative w-full h-[80%] overflow-hidden transition-transform duration-300 ${
          move ? "scale-107" : "scale-100 "
        }`}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${
              move ? 1.5 : 1
            })`,
            opacity: move ? 1 : 0,
            transition: "transform 150ms ease-out",
          }}
          className="absolute w-[32px] h-[32px] bg-black pointer-events-none rounded-full "
        ><i className="ri-arrow-right-up-line absolute left-1.5 top-1 text-[#ededed] font-thin text-[18px]"></i></div>
        <img className="" src={props.img} alt="Product" />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-center mt-9">
        <h1 className="text-[22px] font-[300]">{props.product}</h1>
        <button className="h-8 px-4 rounded-full border text-[13px] hover:bg-black hover:text-white transition-all duration-300">
          {props.btn}
        </button>
      </div>
    </div>
  );
};

export default Page3;
