import { View, Text } from "@tarojs/components";
import "./index.scss"

export default function MinerProperty({
  title,
  content,
  contentColor = "#fff",
}) {
  return (
    <View className="minerProperty">
      <Text style={{ color: "#C7CED199", fontSize: "9px" }}>{title}</Text>
      <Text style={{ color: contentColor, fontSize: "14px" }}>{content}</Text>
    </View>
  );
}
