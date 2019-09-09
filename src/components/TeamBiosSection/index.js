import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios from "./../TeamBios";
import "./styles.scss";

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios
          people={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Vinay Reddy",
              role: "Web Developer"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Ashfaq Nisar",
              role: "Web Developer"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Manasa Kunduru",
              role: "Back-End Developer"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=5",
              name: "Manogna Rayasam",
              role: "Web Developer"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=6",
              name: "Vamshi Krishna ",
              role: "UI/Ux Designer"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
