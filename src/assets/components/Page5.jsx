import React from "react";
import Page5dets from "./Page5dets";
import { useState } from "react";

const Page5 = () => {

  return (
    <div className="mt-45">
      <h1 className="text-[12px] mb-3 tracking-widest">OUR TEAM</h1>
      <div className="w-[82vw] bg-[#efeded] h-[1.5px]"></div>
      <div className="flex justify-between items-center mt-8 mb-20">
        <h3 className=" text-[50px] font-[270] ">Our Team of Experts</h3>
        <button className="mt-[-7px] h-10 w-25 rounded-full border text-[15px] hover:bg-black hover:text-white">
          About Us
        </button>
      </div>
      <div className="flex gap-14 flex-wrap ">
        <Page5dets
          bgco="#F1F6F5"
          change={{ border: "none", height: "0" }}
          color={{ padding: "35px", backgroundColor: "#F1F6F5" }}
          heading="JOIN THE TEAM"
          buttonText="Apply Now"
          about="Want to shape the future of branding?"
          text="Join us and shape the future of branding today!"
        />
        <Page5dets
          img="https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ecddac415070de2e8_team-01-p-800.webp"
          name="Annette Black"
          btn="Branding"
        />
        <div style={{ pointerEvents: "none", opacity: "0"}}>
          <Page5dets />
        </div>
        <div style={{ pointerEvents: "none", opacity: "0"}}>
          <Page5dets />
        </div>
        <Page5dets
          img="https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2e0a57ab81ad90f31f_team-02-p-800.webp"
          name="Devon Lane"
          btn="Branding"
        />
        <Page5dets
          img="https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ed7fe4b9a5bef7ee1_team-03-p-800.webp"
          name="Chris Watson"
          btn="Marketing"
        />
      </div>
    </div>
  );
};

export default Page5;
