import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Huge Database",
              description:
                "As all of the data in the Amero is crowdsourced. There is a large amount of questions available.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Managed by Community",
              description:
                "The Amero is managed by the community. So, you can be rest assured that it always stays up and maintained.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "Crowd Sourced ",
              description:
                "All of the data in the Amero is crowd sourced by the people that use it.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "Accessible",
              description:
                "The Amero can be easily accesed from any device and very fast and light.",
              image: "https://uploads.divjoy.com/undraw-directions_x53j.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
