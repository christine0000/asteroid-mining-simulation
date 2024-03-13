import { View } from "@tarojs/components";

export default function MinerTitle({ years }) {
  return (
    <View className="minerTitleContainer">
      <View className="minerTitle">{years} YEARS</View>
    </View>
  );
}
