import { View } from "@tarojs/components";
import { MyContext } from "@/app";
import { useContext } from "react";
import "./index.scss"

export default function MinerTitle({ years }) {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  const { titleBarHeight, statusBarHeight } = context;
  return (
    <View className="minerTitleContainer" style={{top: `calc(${titleBarHeight} + ${statusBarHeight})`}}>
      <View className="minerTitle" style={{fontSize: "16px"}}>{years} YEARS</View>
    </View>
  );
}
