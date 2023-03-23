module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      ["module-resolver", {
        root: ".",
        alias: {
          "@hooks": "./src/hooks",
          "@redux": "./src/redux",
          "@app": "./app",
          "@components": "./src/components"
        }
      }]
    ],
  };
};
