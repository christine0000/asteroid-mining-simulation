// TabBar.tsx

import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface TabBarProps {
  onSelectTab: (tab: string) => void;
}

export default function TabBar({ onSelectTab }) {
  const [activeTab, setActiveTab] = useState("Miners");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onSelectTab(tab);
  };
  return (
    <View className="tab-bar">
      <View
        className={`tab ${activeTab === "Miners" && "active"}`}
        onClick={() => handleTabClick("Miners")}
      >
        <View className="tab-content">
          <Text
            className={`iconfont ${
              activeTab === "Miners" ? "icon-miners-on" : "icon-miners-off"
            }`}
          ></Text>
          <Text>Miners</Text>
        </View>
      </View>
      <View
        className={`tab ${activeTab === "Asteroids" && "active"}`}
        onClick={() => handleTabClick("Asteroids")}
      >
        <View className="tab-content">
          <Text
            className={`iconfont ${
              activeTab === "Asteroids"
                ? "icon-asteroids-on"
                : "icon-asteroids-off"
            }`}
          ></Text>
          <Text>Asteroids</Text>
        </View>
      </View>
      <View
        className={`tab ${activeTab === "Planets" && "active"}`}
        onClick={() => handleTabClick("Planets")}
      >
        <View className="tab-content">
          <Text
            className={`iconfont ${
              activeTab === "Planets" ? "icon-planets-on" : "icon-planets-off"
            }`}
          ></Text>
          <Text>Planets</Text>
        </View>
      </View>
      <View
        className="indicator"
        style={{
          left:
            activeTab === "Miners"
              ? "6%"
              : activeTab === "Asteroids"
              ? "39.333%"
              : "72.666%",
        }}
      ></View>
    </View>
  );
}
