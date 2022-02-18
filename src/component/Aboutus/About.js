import React, { useEffect } from "react";
import Aboutus from "../DividedComponents/Aboutus";
import Services from "../DividedComponents/Services";
import Skills from "../DividedComponents/Skills";

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Aboutus />
      <Skills />
    </div>
  );
}
