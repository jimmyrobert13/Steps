import Styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Container = Styled.div`
  .rs-steps-item-status-process .rs-steps-item-icon-wrapper {
      border: 5px solid rgba(255, 255, 255, 0.5);
      background: transparent;
  }
  .rs-steps-item-icon-wrapper > .rs-steps-item-icon {
      background: transparent;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 48px;
  }
  .rs-steps-small {
      min-height: 70px;
  }
  .rs-steps-small .rs-steps-item-icon-wrapper {
      width: 70px;
      height: 70px;
  }
  .rs-steps-small .rs-steps-item {
    padding-left: 80px;
    padding-top: 20px;
  } 
  .rs-steps-small.rs-steps-horizontal .rs-steps-item:not(:first-child) {
    padding-left: 90px;
  }
`;

export const StackGrup = Styled(Stack)`
  justify-content : flex-end;
`;

export const ButtonSuit = Styled(Button)`
  background-color: #050E15 !important;
  color: white !important;
  &.Mui-disabled {
    color: transparent !important;
  }
`;

export const Footer = Styled.div`
  width: 680px;
  height: 20px;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;

  color: rgba(255, 255, 255, 0.55);
  margin: 40px 0 0 22px !important;
  padding: 30px 0 !important
`;
