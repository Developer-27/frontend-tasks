import React from "react";
 
const Page5dets = (props) => {
     
  return (
    <div className="group relative h-[470px] w-[314px]">
      <div className="social absolute bottom-20 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <i className="ri-instagram-line bg-black text-white p-2.5 mr-3 rounded-full text-[19px]"></i>
        <i className="ri-twitter-fill bg-black text-white p-2.5 mr-3 rounded-full text-[19px]"></i>
        <i class="ri-behance-fill bg-black text-white p-2.5 mr-3 rounded-full text-[19px]"></i>
      </div>
      <img
        style={props.change}
        className="members  w-full h-[90%] object-cover cursor-pointer "
        src={props.img}
        alt="Member Images"
      />

      <div className="relative" style={props.color}>
        <h5 className="text-[12px] ">{props.heading}</h5>
        {props.about && (
          <h3 className="text-[26px] mt-3 font-[350] pr-10 leading-9">
            {props.about}
          </h3>
        )}

        {props.text && (
          <h3 className="text-[15px] mt-3 font-[350] text-[#747676] leading-7 tracking-wider">
            {props.text}
          </h3>
        )}

        {props.buttonText && (
          <button className="px-6 py-3 bg-black text-white mt-25 text-[15px] rounded-full">
            {props.buttonText}
          </button>
        )}
      </div>

      <div className="flex justify-between items-center pt-4">
        <h1 className="text-[20px] font-[300]">{props.name}</h1>
        <button
          className="h-7 w-21 rounded-full border text-[13px] hover:bg-black hover:text-white"
          style={props.change}
        >
          {props.btn}
        </button>
      </div>
    </div>
  );
};

export default Page5dets;
