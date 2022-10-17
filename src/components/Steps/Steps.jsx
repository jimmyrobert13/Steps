import { Steps, Panel, Placeholder } from "rsuite";
import { useState } from "react";
import * as S from "./Steps.styles";
import { setGlobalState } from "../State";

const StepsComponent = (props) => {
  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 4 ? 3 : nextStep);
    nextStep == 4 && setGlobalState("information", true);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <S.Container>
      <Steps current={step} small={true}>
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
      </Steps>
      <Panel style={{ marginTop: "40px" }}>{props.choice(step)}</Panel>
      <S.StackGrup direction="row" spacing={2}>
        <S.ButtonSuit
          variant="contained"
          onClick={onPrevious}
          disabled={step === 0}
        >
          Previous
        </S.ButtonSuit>
        <S.ButtonSuit
          variant="contained"
          onClick={onNext}
          disabled={step === 4}
        >
          {"Next >"}
        </S.ButtonSuit>
      </S.StackGrup>
      <S.Footer>
        {props?.menssagen.map((val) => {
          return step === val.step && val.text;
        })}
      </S.Footer>
    </S.Container>
  );
};

export default StepsComponent;
