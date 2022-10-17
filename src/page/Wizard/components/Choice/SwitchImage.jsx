// import {
//   Image1,
//   Image2,
//   Image3,
//   Image4,
//   Image5,
//   Image6,
//   Image7,
//   Image8,
//   Image9,
//   Frame1,
//   Frame2,
//   Frame3,
// } from "../../../assets/index";

import * as I from "../../../../assets/index";

const imageChoice = (props) => {
  switch (props.id) {
    case 1:
      return props.check ? <img src={I.Frame1} /> : <img src={I.Image1} />;
    case 2:
      return props.check ? <img src={I.Frame2} /> : <img src={I.Image2} />;
    case 3:
      return props.check ? <img src={I.Frame3} /> : <img src={I.Image3} />;
    case 4:
      return props.check ? <img src={I.Frame4} /> : <img src={I.Image4} />;
    case 5:
      return props.check ? <img src={I.Frame5} /> : <img src={I.Image5} />;
    case 6:
      return props.check ? <img src={I.Frame6} /> : <img src={I.Image6} />;
    case 7:
      return props.check ? <img src={I.Frame7} /> : <img src={I.Image7} />;
    case 8:
      return props.check ? <img src={I.Frame8} /> : <img src={I.Image8} />;
    case 9:
      return props.check ? <img src={I.Frame9} /> : <img src={I.Image9} />;
    default:
      return "";
  }
};

export default imageChoice;
