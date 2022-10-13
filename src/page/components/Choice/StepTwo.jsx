import TextField from "@mui/material/TextField";
import * as S from "./Steps.styles";

const StepTwo = () => {
  return (
    <>
      <S.Title>Token Symbol</S.Title>
      <S.InputToken id="token_symbol" fullWidth />
    </>
  );
};

export default StepTwo;
