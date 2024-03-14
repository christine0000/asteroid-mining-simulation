// TabBar.tsx

import { useContext } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { tabList } from "../../../constant";
import { MyContext } from "../../../app";
import "./index.scss";

export default function TabBar() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  const { tab: currentTabIndex, updateTab } = context;
  const activeTab = currentTabIndex ? tabList[currentTabIndex] : tabList[0];

  const handleTabClick = (currentTab) => {
    Taro.redirectTo({
      url: currentTab.url,
      success() {
        updateTab(tabList.findIndex((tab) => tab.name === currentTab.name));
      },
    });
  };
  return (
    <View className="tab-bar">
      {tabList.map((tab) => (
        <View
          key={tab.name}
          className={`tab ${activeTab.name === tab.name && "active"}`}
          onClick={() => handleTabClick(tab)}
        >
          <View className="tab-content">
            <Text
              className={`iconfont ${
                activeTab.name === tab.name
                  ? tab.activeIconClass
                  : tab.inactiveIconClass
              }`}
              style={{ fontSize: "32px" }}
            ></Text>
            <Text style={{ fontSize: "12px" }}>{tab.name}</Text>
          </View>
        </View>
      ))}
      <View
        className="indicator"
        style={{
          left: activeTab.indicatorPosition,
        }}
      ></View>
    </View>
  );
}
