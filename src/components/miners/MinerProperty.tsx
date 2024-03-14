import { View, Text } from "@tarojs/components";
import "./MinerProperty.scss";

interface Props {
  title: string;
  content: string;
  contentColor?: string;
}
export default function MinerProperty({
  title,
  content,
  contentColor = "#fff",
}:Props) {
  return (
    <View className="minerProperty">
      <Text style={{ color: "#C7CED199", fontSize: "9px" }}>{title}</Text>
      <Text style={{ color: contentColor, fontSize: "14px" }}>{content}</Text>
    </View>
  );
}
