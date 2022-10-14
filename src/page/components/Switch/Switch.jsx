import { StepOne, StepTwo, StepThree, StepFour } from "../Choice";
import { useState } from "react";

const SwitchContainer = (props) => {
  const [stepOne, setStepOne] = useState("");
  const [stepTwo, setStepTwo] = useState("");
  const [stepThree, setStepThree] = useState("");
  const [stepFour, setStepFour] = useState("");

  const go = () => {
    props.drainData([
      { step: 1, data: [stepOne] },
      // { step: 2, data: [stepTwo] },
      // { step: 3, data: [stepThree] },
      // { step: 4, data: [stepFour] },
    ]);
  };

  switch (props.step) {
    case 0:
      return <StepOne callback={(e) => setStepOne(e)} />;
    // case 1:
    //   return <StepTwo callback={(e) => setStepTwo(e)} />;
    case 2:
      return <StepThree callback={(e) => setStepThree(e)} />;
    case 3:
      return <StepFour callback={(e) => setStepFour(e)} />;
    case 1:
      go();
      break;
    default:
      return "Unknown step";
  }
};

export default SwitchContainer;
