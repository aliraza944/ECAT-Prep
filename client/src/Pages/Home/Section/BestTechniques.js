import React from "react";
import Section from "./Section";
import bestTechniquesSection from "../../../Images/bestTechniquesSection.png";

export default function BestTechniques() {
  return (
    <div>
      <Section
        title="THE BEST TECHNIQUES FOR EACH SECTION."
        description=" Our wonderful team of UCAT Exams Ninja instructors have written
              comprehensive guides to each of the 5 sections of the UCAT
              (UKCAT). You'll learn top tips for tackling the Verbal Reasoning,
              strategies to nail Decision Making, great techniques to maximise
              your mark in Quantitative Reasoning, systematic methods to make
              sense of Abstract Reasoning, and the best ways to answer the
              seemingly arbitrary Situational Judgment questions."
        imageUrl={bestTechniquesSection}
      />
    </div>
  );
}
