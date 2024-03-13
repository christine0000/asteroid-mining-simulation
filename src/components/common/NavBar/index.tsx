import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default function NavBar({backgroundColor="#241B2D"}) {
  const titleBarHeight = Taro.getStorageSync("titleBarHeight");
  const statusBarHeight = Taro.getStorageSync("statusBarHeight");
  return (
    <View>
      <View
        className="nav-bar"
        style={{
          height: titleBarHeight,
          paddingTop: statusBarHeight,
          backgroundColor: backgroundColor
        }}
      >
        <Text
          className="iconfont icon-Star03"
          style={{fontSize: "20px"}}
        ></Text>
      </View>
      <View
        style={{ height: titleBarHeight, paddingTop: statusBarHeight }}
      ></View>
    </View>
  );
}
