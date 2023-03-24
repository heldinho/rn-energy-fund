import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const TimeFilter = () => {
  const time = useSelector((state) => state.fund.timeFilter);
  const selected = Math.floor(Math.random() * time.length);

  return (
    <View className="flex-row">
      {time.map((o, index) => (
        <View
          key={o}
          className={`radius mx-2 flex h-9 w-9 flex-1 items-center justify-center ${
            selected === index ? "bg-violet-50" : "bg-white"
          }  p-2`}
        >
          <Text
            className={`flex-1 font-medium ${
              selected === index ? "text-purple-700" : "text-neutral-400"
            }`}
          >
            {o}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TimeFilter;
