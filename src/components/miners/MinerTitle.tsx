import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss"

export default function MinerTitle({ years }) {
  const titleBarHeight = Taro.getStorageSync("titleBarHeight");
  const statusBarHeight = Taro.getStorageSync("statusBarHeight");
  return (
    <View className="minerTitleContainer" style={{top: `calc(${titleBarHeight} + ${statusBarHeight})`}}>
      <View className="minerTitle" style={{fontSize: "16px"}}>{years} YEARS</View>
    </View>
  );
}
