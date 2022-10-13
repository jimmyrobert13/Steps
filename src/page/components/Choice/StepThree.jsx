import TextField from "@mui/material/TextField";
import * as S from "./Steps.styles";
import { useState } from "react";

const StepThree = () => {
  const initial = { NAME: "", AMOUNT: "" };
  const [distribution, setDistribution] = useState([{ ...initial }]);

  const addProduto = () => {
    setDistribution((state) => [...state, { ...initial }]);
  };

  const changeValue = (e, ix, arr) => {
    console.log("gg e", e.target.value);
    console.log("gg ix", ix);

    const { name, value } = e.target;
    let values = [...distribution];
    // arr ? (values[ix][name] = [...value]) : (
    values[ix][name] = value;
    // );
    setDistribution((state) => [...values]);
  };

  console.log("gg", distribution);

  return (
    <div>
      {distribution.map((val, ind) => (
        <div
          key={ind}
          style={{ display: "flex", flexDirection: "row", marginBottom: "8px" }}
        >
          <div style={{ width: "48%", marginRight: "4%" }}>
            <S.TitleDistribution>Name</S.TitleDistribution>
            <S.InputToken
              name="NAME"
              fullWidth
              marginTop={"30px"}
              value={distribution[ind].NAME}
              onChange={(e) => changeValue(e, ind)}
            />
          </div>

          <div style={{ width: "48%" }}>
            <S.TitleDistribution>Amount</S.TitleDistribution>
            <S.InputToken
              name="AMOUNT"
              fullWidth
              marginTop={"30px"}
              value={distribution[ind].AMOUNT}
              onChange={(e) => changeValue(e, ind)}
            />
          </div>
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <S.ButtonSuit variant="contained" onClick={(e) => addProduto()}>
          Add more
        </S.ButtonSuit>
      </div>
    </div>
  );
};

export default StepThree;
