import * as S from "./Steps.styles";

const StepOne = (props) => {
  return (
    <>
      <S.Title>Token Name</S.Title>
      <S.InputToken
        id="token"
        fullWidth
        onChange={(e) => props.callback(e.target.value)}
      />
    </>
  );
};

export default StepOne;
