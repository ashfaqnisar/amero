import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Ezerka",
              image:
                "https://ezerka.in/wp-content/uploads/2019/07/side-by-side-black.png",
              width: "150px"
            },

            {
              name: "DSS",
              image: "https://i.imgur.com/bOQEfsz.png",
              width: "70px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
