import * as S from "./Steps.styles";
import Checkbox from "@mui/material/Checkbox";
// import Checkbox from "@material-ui/core/Checkbox";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
} from "../../../assets/index";

const StepFour = () => {
  return (
    <>
      <S.Title>Select Chain</S.Title>
      <Checkbox
        icon={<img src={Image1} />}
        checkedIcon={
          <img
            src={Image1}
            style={{
              borderRadius: "50px",
              border: "2px solid green",
            }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image2} />}
        checkedIcon={
          <img
            src={Image2}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image3} />}
        checkedIcon={
          <img
            src={Image3}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image4} />}
        checkedIcon={
          <img
            src={Image4}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image5} />}
        checkedIcon={
          <img
            src={Image5}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image5} />}
        checkedIcon={
          <img
            src={Image5}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image6} />}
        checkedIcon={
          <img
            src={Image6}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image7} />}
        checkedIcon={
          <img
            src={Image7}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image8} />}
        checkedIcon={
          <img
            src={Image8}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
      <Checkbox
        icon={<img src={Image9} />}
        checkedIcon={
          <img
            src={Image9}
            style={{ borderRadius: "50px", border: "2px solid green" }}
          />
        }
      />
    </>
  );
};

export default StepFour;
