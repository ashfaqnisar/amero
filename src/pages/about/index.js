import React from "react";
import ContentSection from "./../../components/ContentSection";
import StatsSection from "./../../components/StatsSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Built by Students, For the Students"
        subtitle="This site was built to increase the knowlege of the students by having all the aplitude questions at one place. The site is built only for educational purposes"
      />
      <StatsSection
        color="light"
        size="medium"
        items={[
          {
            title: "Active Users",
            stat: "3,456"
          },
          {
            title: "Questions",
            stat: "123"
          },
          {
            title: "Users",
            stat: "456k"
          },
          {
            title: "Visitors",
            stat: "789"
          }
        ]}
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/signup");
        }}
      />
    </>
  );
}

export default AboutPage;
