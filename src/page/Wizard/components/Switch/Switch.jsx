import { StepOne, StepTwo, StepThree, StepFour } from "../Choice";
import { useState } from "react";

const SwitchContainer = (props) => {
  switch (props.step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
      return <StepFour />;
    default:
      return "Unknown step";
  }
};

export default SwitchContainer;
