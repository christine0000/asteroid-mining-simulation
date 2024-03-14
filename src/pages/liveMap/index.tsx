import { View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useContext } from "react";
import NavBar from "../../components/common/NavBar";
import TabBar from "../../components/common/TabBar";
import MinerTitle from "../../components/miners/MinerTitle";
import { MyContext } from "../../app";
import { tabList } from "../../constant";
import "./index.scss";

export default function Index() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  useLoad(() => {
    const { updateTab } = context;
    const pages = Taro.getCurrentPages();
    const currentPageUrl = pages[pages.length - 1].route;
    updateTab(tabList.findIndex((tab) => tab.url === currentPageUrl));
  });
  return (
    <View className="live-map">
      <NavBar />
      <MinerTitle years={100} />
      <TabBar />
    </View>
  );
}
