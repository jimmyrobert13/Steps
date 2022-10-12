import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import { useState } from "react";
import * as S from "./Steps.styles";

const StepsComponent = () => {
  const [step, setStep] = useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
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
      <hr />
      <Panel header={`Step: ${step + 1}`}>
        <Placeholder.Paragraph />
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 3}>
          Next
        </Button>
      </ButtonGroup>
    </S.Container>
  );
};

export default StepsComponent;
