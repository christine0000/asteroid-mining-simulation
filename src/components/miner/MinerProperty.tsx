import { View, Text } from "@tarojs/components";

export default function MinerProperty({
  title,
  content,
  contentColor = "#fff",
}) {
  return (
    <View className="minerProperty">
      <Text style={{ color: "#C7CED199", fontSize: "18rpx" }}>{title}</Text>
      <Text style={{ color: contentColor, fontSize: "28rpx" }}>{content}</Text>
    </View>
  );
}
