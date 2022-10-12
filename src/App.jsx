import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <div className="App">
      <Box sx={{ width: "60%", margin: "auto", paddingTop: "20%" }}>
        <Steps />
      </Box>
    </div>
  );
}

export default App;
