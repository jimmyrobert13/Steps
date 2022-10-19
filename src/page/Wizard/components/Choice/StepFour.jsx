import * as S from "./Steps.styles";
import Checkbox from "@mui/material/Checkbox";
import SwitchImage from "./SwitchImage";
import { useState } from "react";
import { setGlobalState } from "../../../../components/State/index.jsx";

const StepFour = () => {
  const [clickChain, setClickChain] = useState([]);
  const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const changeImage = (status, id) => {
    status === true && setClickChain([...clickChain, id]);
    status === false && setClickChain(clickChain.filter((e) => e !== id));
  };
  setGlobalState("step4", clickChain);

  return (
    <>
      <S.Title>Select Chain</S.Title>
      <S.GrupCheck>
        {imageArray?.map((val) => (
          <Checkbox
            style={{ marginLeft: "5%" }}
            onChange={(e) => changeImage(e.target.checked, val)}
            icon={<SwitchImage id={val} />}
            checkedIcon={<SwitchImage id={val} check={true} />}
          />
        ))}
      </S.GrupCheck>
    </>
  );
};

export default StepFour;
