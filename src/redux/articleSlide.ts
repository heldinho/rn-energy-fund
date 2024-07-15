import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Article = {
  id: number;
  title: string;
  content: string;
};

const initialState: Article[] = [
  {
    id: 1,
    title: "Why should you invest here?",
    content: `The demand for renewable energy is on the rise, driven by increasing concern over climate change and the need to transition away from fossil fuels. As a result, the renewable energy market is expected to continue to grow, presenting potential investment opportunities.`,
  },
  {
    id: 2,
    title: "Why Invest in Eletric Vehicles?",
    content: `EVs have a lower carbon footprint compared to traditional gasoline-powered vehicles, and investing in them can help reduce greenhouse gas emissions and combat climate change.`,
  },
  {
    id: 3,
    title: "Why should you invest in Solar?",
    content: `Solar panels generate electricity from the sun's energy, which is a free and renewable resource. Once installed, solar panels require very little maintenance, and the cost of producing electricity from solar panels has been declining steadily over the years, making it more cost-competitive with traditional forms of energy.`,
  },
  {
    id: 4,
    title: "Why Invest in Vertical Farming?",
    content: `Vertical farming allows for precise control of environmental factors such as temperature, humidity, and light, which can lead to consistent crop yields year-round. This can reduce the risks associated with traditional farming such as crop failures due to weather or pests.`,
  },
];

const articleSlide = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {},
});

export default articleSlide.reducer;
