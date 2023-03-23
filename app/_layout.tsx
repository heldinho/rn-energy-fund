import { Slot } from "expo-router";
import { useSelector } from "react-redux";

import { useProtectedRoute } from "@hooks/auth";

import { Provider } from "react-redux";
import { store } from "@redux/store";

const Child = () => {
  const user = useSelector((state) => state.user);
  useProtectedRoute(user);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}
