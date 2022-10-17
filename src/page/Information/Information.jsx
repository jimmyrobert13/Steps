import Box from "@mui/material/Box";
import { useGlobalState } from "../../components/State/index";
import * as S from "./Information.styles";
import { PieChart, Pie } from "recharts";

const Information = () => {
  const Verification = useGlobalState("step1");
  const Verification2 = useGlobalState("step2");
  const Verification3 = useGlobalState("step3");

  console.log("gg", Verification3);
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <Box sx={{ width: "40%", margin: "auto", paddingTop: "10%" }}>
      <S.Title>Token Resume</S.Title>
      <S.Rows>
        <S.SubTitle>Template:</S.SubTitle>
        <S.Container>{"nada"}</S.Container>
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
        {/* <S.Container> */}
        {/* <PieChart width={100} height={100}>
          <Pie
            data={Verification3[0]}
            dataKey="AMOUNT"
            outerRadius={250}
            fill="green"
          />
        </PieChart> */}
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey="students" fill="green" />
        </PieChart>
        {/* </S.Container> */}
      </S.Rows>
      <S.Rows>
        <S.SubTitle>Blockchains:</S.SubTitle>
        <S.Container>{"nada"}</S.Container>
      </S.Rows>
    </Box>
  );
};

export default Information;
