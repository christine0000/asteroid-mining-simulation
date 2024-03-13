// TabBar.tsx

import React, { useState } from "react";
import { View } from "@tarojs/components";
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
        Miners
      </View>
      {/* <View
        className={`tab ${activeTab === "Asteroids" && "active"}`}
        onClick={() => handleTabClick("Asteroids")}
      >
        Asteroids
      </View>
      <View
        className={`tab ${activeTab === "Planets" && "active"}`}
        onClick={() => handleTabClick("Planets")}
      >
        Planets
      </View> */}
      <View
        className="indicator"
        style={{
          left:
            activeTab === "Asteroids"
              ? "6%"
              : activeTab === "Miners"
              ? "39.333%"
              : "72.666%",
        }}
      ></View>
    </View>
  );
}
