import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  information: false,
  step1: "",
  step2: "",
  step3: "",
  step4: "",
});

export { setGlobalState, useGlobalState };
