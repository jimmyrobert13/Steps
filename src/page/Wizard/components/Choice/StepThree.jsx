import TextField from "@mui/material/TextField";
import * as S from "./Steps.styles";
import { useState } from "react";
import { setGlobalState } from "../../../../components/State/index.jsx";

const StepThree = () => {
  const initial = { NAME: "", AMOUNT: "" };
  const [distribution, setDistribution] = useState([{ ...initial }]);

  const addProduto = () => {
    setDistribution((state) => [...state, { ...initial }]);
  };

  const changeValue = (e, ix, arr) => {
    const { name, value } = e.target;
    let values = [...distribution];
    values[ix][name] = value;
    setDistribution((state) => [...values]);
    setGlobalState("step3", [{ NAME: "NAME", AMOUNT: "AMOUNT" }, ...values]);
  };

  return (
    <div>
      {distribution.map((val, ind) => (
        <S.Container key={ind}>
          <S.InputContainer marginRight={"4%"}>
            <S.TitleDistribution>Name</S.TitleDistribution>
            <S.InputToken
              name="NAME"
              fullWidth
              marginTop={"30px"}
              value={distribution[ind].NAME}
              onChange={(e) => changeValue(e, ind)}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.TitleDistribution>Amount</S.TitleDistribution>
            <S.InputToken
              name="AMOUNT"
              type={"number"}
              fullWidth
              marginTop={"30px"}
              value={distribution[ind].AMOUNT}
              onChange={(e) => changeValue(e, ind)}
            />
          </S.InputContainer>
        </S.Container>
      ))}

      <S.ButtonGrup>
        <S.ButtonSuit variant="contained" onClick={(e) => addProduto()}>
          Add more
        </S.ButtonSuit>
      </S.ButtonGrup>
    </div>
  );
};

export default StepThree;
