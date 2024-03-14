import { View } from "@tarojs/components";
import { MyContext } from "@/app";
import { useContext } from "react";
import "./MinerTitle.scss";

export default function MinerTitle({ years }:{years: number}) {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  const { titleBarHeight } = context;
  return (
    <View
      className="miner-title-container"
      style={{ top: `calc(${titleBarHeight})` }}
    >
      <View className="miner-title" style={{ fontSize: "16px" }}>
        {years} YEARS
      </View>
    </View>
  );
}
