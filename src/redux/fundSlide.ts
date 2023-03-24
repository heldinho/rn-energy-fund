import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type Asset = {
  icon: string;
  color: string;
  title: string;
  svg: string;
  price: string;
  variation: string;
  signal: "positive" | "negative";
}

type Fund = {
  portfolio: string
  account: string;
  increase: string;
  funds: Asset[]
}

const initialState: Fund = {
  account: "$1,457.23",
  portfolio: "$1,245.23",
  increase: "31.82%",
  funds: [
    {
      icon: "weather-windy",
      color: "#4A88D0",
      title: "Wind Fund",
      svg: "Windy",
      price: "$1032.23",
      variation: "3.51%",
      signal: "positive"
    }, {
      icon: "weather-sunny",
      color: "#F0A719",
      title: "Solar Fund",
      svg: "Sunny",
      price: "$963.61",
      variation: "0.13%",
      signal: "negative",
    }, {
      icon: "leaf",
      color: "#0FDF8F",
      title: "Nature",
      svg: "Nature",
      price: "$1122.95",
      variation: "0.30%",
      signal: "positive",
    }
  ]
}

const fundSlice = createSlice({
  name: "fund",
  initialState: initialState,
  reducers: {}
});

export default fundSlice.reducer