import Box from "@mui/material/Box";
import { useGlobalState } from "../../components/State/index";
import * as S from "./Information.styles";
import { PieChart, Pie } from "recharts";
import { Chart } from "react-google-charts";
import SwitchImage from "../../page/Wizard/components/Choice/SwitchImage";
import Checkbox from "@mui/material/Checkbox";

const Information = () => {
  const Verification = useGlobalState("step1");
  const Verification2 = useGlobalState("step2");
  const Verification3 = useGlobalState("step3");
  const Verification4 = useGlobalState("step4");
  console.log("gg", Verification4);
  const fre = Verification3[0]?.map((val) => {
    return [
      val.NAME,
      val.AMOUNT === "AMOUNT" ? val.AMOUNT : parseInt(val.AMOUNT),
    ];
  });

  return (
    <div>
      <Box sx={{ width: "40%", margin: "auto", paddingTop: "10%" }}>
        <S.Title>Token Resume</S.Title>
        <S.Rows>
          <S.SubTitle>Template:</S.SubTitle>
          <S.Container>{"----"}</S.Container>
        </S.Rows>
        <S.Rows>
          <S.SubTitle>Name:</S.SubTitle>
          <S.Container>{Verification[0]}</S.Container>
        </S.Rows>
        <S.Rows>
          <S.SubTitle>Symbol:</S.SubTitle>
          <S.Container>{Verification2[0]}</S.Container>
        </S.Rows>
        <S.Rows>
          <S.SubTitle>Distribution:</S.SubTitle>
          <S.ContainerChart>
            <Chart
              width={"100%"}
              height={"90%"}
              chartType="PieChart"
              data={fre}
              options={{
                backgroundColor: "transparent",
                borderRadius: "20px",
                is3D: true,
                legend: { textStyle: { color: "#fff" } },
              }}
            />
          </S.ContainerChart>
        </S.Rows>
        <S.Rows>
          <S.SubTitle>Blockchains:</S.SubTitle>
          <S.ContainerImg>
            {Verification4[0]?.map((val) => (
              <Checkbox
                style={{ marginLeft: "2.5%", marginBottom: "2.5%" }}
                disabled
                icon={
                  <SwitchImage id={parseInt(val)} style={{ width: "40px" }} />
                }
              />
            ))}
          </S.ContainerImg>
        </S.Rows>
        <S.RowsButtom>
          <S.ButtonSuit variant="contained">{"Build >"}</S.ButtonSuit>
        </S.RowsButtom>
      </Box>
    </div>
  );
};

export default Information;
