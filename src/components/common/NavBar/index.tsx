import { View, Text } from "@tarojs/components";
import "./index.scss";
import { titleBarHeight } from "../../../constant";

interface Props {
  backgroundColor?: string;
}
export default function NavBar({ backgroundColor = "#241B2D" }: Props) {
  return (
    <View>
      <View
        className="nav-bar"
        style={{
          height: titleBarHeight,
          backgroundColor: backgroundColor,
        }}
      >
        <Text className="iconfont icon-Star03" style={{fontSize: "20px"}}></Text>
      </View>
      <View style={{ height: titleBarHeight }}></View>
    </View>
  );
}
