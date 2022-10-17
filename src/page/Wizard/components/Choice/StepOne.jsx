import * as S from "./Steps.styles";
import { setGlobalState } from "../../../../components/State/index.jsx";

const StepOne = (props) => {
  const changeValue = (e) => {
    setGlobalState("step1", e);
  };

  return (
    <>
      <S.Title>Token Name</S.Title>
      <S.InputToken
        id="token"
        fullWidth
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
};

export default StepOne;
