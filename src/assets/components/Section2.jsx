import React from "react";

const Section2 = (props) => {
  return (
      <div className="w-60 bg-[#F8F8F8] p-8">
        <h2 className="text-2xl font-[350] pr-2">{props.name}</h2>
        <p className="text-[16px] mt-5 leading-7 pr-4 text-[#999b9b]">
          {props.text}
        </p>
        <h5 className="mt-8 text-[15px] border-b w-fit mb-2">{props.about}</h5>
      </div>
  );
};

export default Section2;
