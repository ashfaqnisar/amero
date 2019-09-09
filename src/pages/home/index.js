import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import ClientsSection from "./../../components/ClientsSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Amero"
        subtitle="Amero contains a large dataset of all the aplitude, quant and logical reasoning question and answers built with the help of the crowdsourcing"
        buttonText="Register Now"
        buttonOnClick={() => {
          router.push("/signup");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the awesome features of the Amero"
      />
      <ClientsSection
        color="light"
        size="medium"
        title="Developed with ❤ by"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default HomePage;
