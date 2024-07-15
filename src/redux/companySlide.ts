import { createSlice } from "@reduxjs/toolkit";

export type Company = {
  id: string;
  description: string;
};

const initialState: Company[] = [
  {
    id: "aspira",
    description:
      "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.",
  },
  {
    id: "climeworks",
    description:
      "ClimeWorks uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.",
  },
];

const company = createSlice({
  name: "company",
  initialState: initialState,
  reducers: {},
});

export default company.reducer;
