import TextField from "@mui/material/TextField";
import * as S from "./Steps.styles";

const StepOne = () => {
  return (
    <>
      <S.Title>Token Name</S.Title>
      <S.InputToken id="token" fullWidth />
    </>
  );
};

export default StepOne;
