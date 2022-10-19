import Styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const Title = Styled.h1`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  height: 48px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: rgba(255, 255, 255, 0.8);
`;

export const SubTitle = Styled.h1`
  width: 30%;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #fffff;
`;

export const Rows = Styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = Styled.div`
  width: 70%;
  background: #0A131A;
  border-radius: 20px;
  padding: 10px 0 0 10px;
  height: 44px;
  color: white;
`;

export const ContainerImg = Styled.div`
  width: 70%;
  background: #0A131A;
  border-radius: 20px;
  padding: 10px 0 0 10px;
  /* height: 44px; */
  color: white;
`;

export const ContainerChart = Styled.div`
  width: 70%;
  background: #0A131A;
  border-radius: 20px;
  padding: 10px 0 0 10px;
  height: 300px;
  color: white;
`;

export const StackGrup = Styled(Stack)`
  justify-content : flex-end;
`;

export const ButtonSuit = Styled(Button)`
  background-color: transparent !important;
  color: white !important;
  &.Mui-disabled {
    color: transparent !important;
  }
`;

export const RowsButtom = Styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 30px;
  justify-content: flex-end;
`;

export const InputToken = Styled(TextField)`
  height: 44px !important;
  background: #0A131A;
  border: 1px solid #FFFFFF;
  border-radius: 20px !important;
  box-sizing: border-box;
  width: 70% !important;
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 20px !important;
    height: 44px !important;
    color: #fff !important;

  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 8px 14px !important
  }
`;
