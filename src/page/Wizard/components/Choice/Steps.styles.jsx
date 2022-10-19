import Styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const InputToken = Styled(TextField)`
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + "!important" : "60px !important"};
  height: 40px !important;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #FFFFFF;
  border-radius: 20px !important;
  box-sizing: border-box;
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 20px !important;
    height: 40px !important;
    color: #fff !important;

  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 8px 14px !important
  }
`;

export const Title = Styled.h1`
  display: flex;
  justify-content: center;

  height: 48px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;

  color: rgba(255, 255, 255, 0.8);
`;

export const TitleDistribution = Styled.h1`
  display: flex;
  justify-content: center;

  height: 29px;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: rgba(255, 255, 255, 0.8) !important;
`;

export const ButtonSuit = Styled(Button)`
  background-color: #050E15 !important;
  color: white !important;
  width: fit-content;
  box-shadow: 0 !important;
  &.Mui-disabled {
    color: transparent !important;
  }
  & > .hover{
    background-color: #050E15 !important;
  }
`;

export const InputContainer = Styled.div`
  width: 48%;
  margin-right: ${(props) => props.marginRight};
`;

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ButtonGrup = Styled.div`
  display: flex; 
  justify-content: space-around;
`;

export const GrupCheck = Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
`;
