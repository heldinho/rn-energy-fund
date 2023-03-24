import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type Asset = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
  title?: string;
  svg?: string;
  price?: string;
  variation?: string;
  signal?: "positive" | "negative";
  acronym: string;
  year: number;
  dailyPrice: string;
  dailyVariation: string;
  aum: string;
  issueDate: string;
  vintageRange: string;
  ter: string;
  closePrice: string;
  openPrice: string;
}

type Fund = {
  selectedAsset: Asset;
  portfolio: string
  account: string;
  increase: string;
  timeFilter: string[];
  funds: Asset[]
}

const initialState: Fund = {
  selectedAsset: null,
  timeFilter: ["1h", "1d", "1w", "1m", "1y", "All"],
  account: "$1,457.23",
  portfolio: "$1,245.23",
  increase: "31.82%",
  funds: [
    {
      icon: "weather-windy",
      color: "#4a88d0",
      title: "Wind Fund",
      svg: "Windy",
      price: "$1032.23",
      variation: "3.51%",
      signal: "positive",
      acronym: "WNFD",
      year: 2023,
      dailyPrice: "$18.23",
      dailyVariation: "3.51% ($1.21)",
      aum: "$430.88m",
      issueDate: "18/04/2022",
      vintageRange: "2019 – 2022",
      ter: "0.15%",
      closePrice: "$17.68",
      openPrice: "$17.74"
    }, {
      icon: "weather-sunny",
      color: "#f0b719",
      title: "Solar Fund",
      svg: "Sunny",
      price: "$963.61",
      variation: "0.13%",
      signal: "negative",
      acronym: "SFFD",
      year: 2022,
      dailyPrice: "$10.00",
      dailyVariation: "10.40% ($3.54)",
      aum: "$20.42m",
      issueDate: "03/06/2022",
      vintageRange: "2019 – 2022",
      ter: "0.50%",
      closePrice: "$820.02",
      openPrice: "$738.00"
    }, {
      icon: "leaf",
      color: "#0fef8f",
      title: "Nature",
      svg: "Nature",
      price: "$1122.95",
      variation: "0.30%",
      signal: "positive",
      acronym: "LEFD",
      year: 2021,
      dailyPrice: "$5.72",
      dailyVariation: "40.40% ($9.54)",
      aum: "$200.58m",
      issueDate: "11/11/2021",
      vintageRange: "2019 – 2021",
      ter: "1.30%",
      closePrice: "$17.68",
      openPrice: "$12.00"
    }
  ]
}

const fundSlice = createSlice({
  name: "fund",
  initialState: initialState,
  reducers: {
    selectAsset(state, action: PayloadAction<Asset>) {
      state.selectedAsset = action.payload
    },
  }
});

export const { selectAsset } = fundSlice.actions
export default fundSlice.reducer