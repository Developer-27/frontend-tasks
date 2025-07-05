import Page3 from "./Page3";
import Page4 from "./Page4";

const Page3and4 = () => {
  return (
    <div className="mt-20">
      <h1 className="text-[12px] mb-3 tracking-widest">OUR WORK</h1>
      <div className="w-[82vw] bg-[#efeded] h-[1.5px]"></div>
      <div className="flex justify-between items-center mt-8 mb-15">
        <h3 className=" text-[50px] font-[270] ">Selected Work</h3>
        <button className="mt-[-7px] h-10 w-25 rounded-full border text-[15px] hover:bg-black hover:text-white">
          All Work
        </button>
      </div>
      <div>
        <div className="flex gap-10 flex-wrap" style={{ cursor: "none" }}>
          <Page3
            img="https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp"
            product="Invision Studio"
            btn="Marketing"
          />
          <Page3
            img="https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp"
            product="Square Media"
            btn="Branding"
          />
          <Page3
            img="https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp"
            product="Vision Design"
            btn="Social Media"
          />
          <Page3
            img="https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp"
            product="Design Bros"
            btn="Branding"
          />
        </div>
      </div>
      <h1 className="text-[12px] mt-40 mb-3 tracking-widest">OUR VALUES</h1>
      <div className="w-[82vw] bg-[#efeded] h-[1.5px] mb-20"></div>
      <div className="flex gap-12 flex-wrap mt-7">
        <Page4
          bgco="#F1F5F9"
          heading="SERVICES"
          buttonText="About Øliv"
          about="Our Approach to Branding."
          style={{ padding: "9px", paddingRight: "8px" }}
        />
        <Page4
          bgco="#F1F6F5"
          heading="HELPING BRANDS STAND OUT"
          text="Bold Moves, Big Impact."
          style={{ padding: "9px", paddingRight: "8px" }}
        />
        <Page4
          bgco="#f5f5f5"
          heading="HOW WE WORK WITH OUR CLIENTS"
          text="Honesty is the Best Policy."
        />
        <Page4
          bgco="#F8F8F8"
          heading="COLLABORAION IS KEY"
          text="Building Strong Partnerships."
        />
        <Page4
          bgco="#F8EDE3"
          heading="OUR APPROACH"
          text="Achieving Real Results."
        />
        <Page4
          bgco="#FFFAE7"
          heading="OUR PHILOSOPHY"
          text="Building Trust, Not Pitching."
        />
      </div>
      <div className="flex justify-end w-full mt-20">
        <div className="w-[65%]">
          <h4 className=" text-[43px] leading-14 font-[300]">
            Crafting Exceptional Digital Experiences Across All Platforms: Our
            Goal at Øliv.
          </h4>
          <div className="mt-10 flex gap-14   leading-7 font-[300]">
            <p>
              At Øliv, our goal is to craft exceptional digital experiences
              across all platforms. In today's digitally driven world, having a
              strong online presence is paramount for businesses to connect with
              their target audience effectively. We understand the importance of
              delivering seamless and engaging experiences that leave a lasting
              impression.
            </p>

            <p>
              Our team of skilled designers, developers, and digital strategists
              collaborate to create customized digital solutions tailored to
              your unique business needs. Whether it's designing a user-friendly
              website, developing a mobile application, or enhancing your
              e-commerce platform, we strive to provide solutions that not only
              meet but exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3and4;
