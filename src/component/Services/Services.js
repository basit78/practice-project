import React, { useEffect } from "react";
import Services from "../DividedComponents/Services";
import Skills from "../DividedComponents/Skills";

export default function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Services />
      <Skills />
    </div>
  );
}
