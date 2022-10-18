import * as I from "../../../../assets/index";

const imageChoice = (props) => {
  switch (props.id) {
    case 1:
      return props.check ? (
        <img src={I.Frame1} />
      ) : (
        <img src={I.Image1} style={props.style && props.style} />
      );
    case 2:
      return props.check ? (
        <img src={I.Frame2} />
      ) : (
        <img src={I.Image2} style={props.style && props.style} />
      );
    case 3:
      return props.check ? (
        <img src={I.Frame3} />
      ) : (
        <img src={I.Image3} style={props.style && props.style} />
      );
    case 4:
      return props.check ? (
        <img src={I.Frame4} />
      ) : (
        <img src={I.Image4} style={props.style && props.style} />
      );
    case 5:
      return props.check ? (
        <img src={I.Frame5} />
      ) : (
        <img src={I.Image5} style={props.style && props.style} />
      );
    case 6:
      return props.check ? (
        <img src={I.Frame6} />
      ) : (
        <img src={I.Image6} style={props.style && props.style} />
      );
    case 7:
      return props.check ? (
        <img src={I.Frame7} />
      ) : (
        <img src={I.Image7} style={props.style && props.style} />
      );
    case 8:
      return props.check ? (
        <img src={I.Frame8} />
      ) : (
        <img src={I.Image8} style={props.style && props.style} />
      );
    case 9:
      return props.check ? (
        <img src={I.Frame9} />
      ) : (
        <img src={I.Image9} style={props.style && props.style} />
      );
    default:
      return "";
  }
};

export default imageChoice;
