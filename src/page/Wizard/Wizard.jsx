import Box from "@mui/material/Box";
import Steps from "../../components/Steps/Steps";
import Switch from "./components/Switch/Switch";

const Wizard = () => {
  const menssagen = [
    {
      step: 0,
      text: "The token name represents how your is going to be known",
    },
    {
      step: 1,
      text: "The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar",
    },
    {
      step: 2,
      text: "Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with.",
    },
    {
      step: 3,
      text: "Now it is time to select which Blockchain you want to use. Select as many as you want.",
    },
  ];

  return (
    <Box sx={{ width: "50%", margin: "auto", paddingTop: "15%" }}>
      <Steps choice={(e) => <Switch step={e} />} menssagen={menssagen} />
    </Box>
  );
};

export default Wizard;
