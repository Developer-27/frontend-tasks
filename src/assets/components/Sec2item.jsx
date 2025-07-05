import Section2 from './Section2'

const Sec2item = () => {
  return (
    <div className="flex gap-10 mt-15">
        <Section2
          name="Brand Strategy"
          text="We help businesses define their unique brand message and branding positioning."
          about="About Strategy"
        />
        <Section2
          name="Visual Identity"
          text="We create visual elements such as logos, packaging, and marketing materials for your brand."
          about="About Identity"
        />
        <Section2
          name="Digital Marketing"
          text="We help businesses to promote their brand online and create engaging digital experiences.
         "
          about="About Marketing"
        />
        <Section2
          name="Brand Manage­ment"
          text="We help businesses to implement their brand across all touchpoints and ensure consistency."
          about="About Management"
        />
      </div>
  )
}

export default Sec2item
