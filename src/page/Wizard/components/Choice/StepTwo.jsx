import TextField from "@mui/material/TextField";
import * as S from "./Steps.styles";
import { setGlobalState } from "../../../../components/State/index.jsx";

const StepTwo = () => {
  const changeValue = (e) => {
    setGlobalState("step2", e);
  };

  return (
    <>
      <S.Title>Token Symbol</S.Title>
      <S.InputToken
        id="token_symbol"
        fullWidth
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
};

export default StepTwo;
