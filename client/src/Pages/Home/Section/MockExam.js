import React from "react";
import Section from "./Section";
import mockExam from "../../../Images/mockExam.png";
const MockExam = () => {
  return (
    <div>
      <Section
        title="CUSTOM-BUILT MOCK EXAMS."
        description="We've created 2 full mock exams that closely mimic the actual exam. Once you're done with the practice questions, you can take the timed mock exams and compare your scores with others.

Everything on UCAT (UKCAT) Ninja works across all devices and browser, so you can practice questions while you're at your desk, in the car or on the toilet."
        imageUrl={mockExam}
      />
    </div>
  );
};

export default MockExam;
