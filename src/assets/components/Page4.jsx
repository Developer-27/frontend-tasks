import React from "react";

const Page4 = (props) => {
  return (
    <div
      className="h-[350px] w-[318px] p-10 "
      style={{ backgroundColor: props.bgco }}
    >
      <h5
        className="text-[12px] tracking-widest pr-20 mb-3"
        style={props.style}
      >
        {props.heading}
        </h5>

        {props.about && (
          <h3 className="text-[21px] font-[350] tracking-wide">
            {props.about}
          </h3>
        )}

        {props.buttonText && (
          <button className="px-6 py-3 bg-black text-white mt-30 text-[15px] rounded-full flex items-center gap-2">
            {props.buttonText}
            <i className="ri-arrow-right-up-line text-[19px]"></i>
          </button>
        )}

      <h3 className="text-[21px] mt-45 pr-21 font-[350] tracking-wide">
        {props.text}
      </h3>
    </div>
  );
};

export default Page4;
