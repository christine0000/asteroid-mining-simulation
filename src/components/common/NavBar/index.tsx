import { View, Text } from "@tarojs/components";
import { useContext } from "react";
import { MyContext } from "@/app";
import "./index.scss";

export default function NavBar({ backgroundColor = "#241B2D" }) {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  const { titleBarHeight, statusBarHeight } = context;
  return (
    <View>
      <View
        className="nav-bar"
        style={{
          height: titleBarHeight,
          paddingTop: statusBarHeight,
          backgroundColor: backgroundColor,
        }}
      >
        <Text
          className="iconfont icon-Star03"
          style={{ fontSize: "20px" }}
        ></Text>
      </View>
      <View
        style={{ height: titleBarHeight, paddingTop: statusBarHeight }}
      ></View>
    </View>
  );
}
