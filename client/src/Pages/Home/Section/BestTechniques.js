import React from "react";
import Section from "./Section";
import bestTechniquesSection from "../../../Images/bestTechniquesSection.png";

export default function BestTechniques() {
  return (
    <div>
      <Section
        title="THE BEST TECHNIQUES FOR EACH SECTION."
        description=" Our wonderful team of ECAT & MCAT Exams Ninja instructors have written
              comprehensive questions to each of the 4 subjects of the ECAT and MCAT
              . You'll learn top tips for tackling the Physics numericals,
              strategies to nail Decision Making, great techniques to maximise
              your mark in Chemistry, systematic methods to make
              sense of Maths, and the best ways to answer the
              biology subject."
        imageUrl={bestTechniquesSection}
      />
    </div>
  );
}
