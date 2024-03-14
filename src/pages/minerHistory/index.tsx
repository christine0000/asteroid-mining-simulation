import { View } from "@tarojs/components";
import { useContext, useState } from "react";
import Taro, { useLoad, useRouter } from "@tarojs/taro";
import NavBar from "../../components/common/NavBar";
import MinerTitle from "../../components/miners/MinerTitle";
import Miners from "../../services/miners";
import HistoryList from "../../components/minerHistory/HistoryList";
import HistoryTopCard from "../../components/minerHistory/HistoryTopCard";
import { MyContext } from "../../app";
import { tabList } from "../../constant";
import "./index.scss";

export default function MinerDetails() {
  const [currentTick, setCurrentTick] = useState<number>(0);
  const [minerHistory, setMinerHistory] = useState<any[]>([]);
  const titleBarHeight = Taro.getStorageSync("titleBarHeight");
  const statusBarHeight = Taro.getStorageSync("statusBarHeight");
  const router = useRouter();
  const { id, name } = router.params;
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  useLoad(() => {
    const { updateTab } = context;
    const pages = Taro.getCurrentPages();
    const currentPageUrl = pages[pages.length - 1].route;
    updateTab(tabList.findIndex((tab) => tab.url === currentPageUrl));
    new Miners().getMinerHistory(id).then((data) => {
      setCurrentTick((data as any[])[0].year);
      setMinerHistory(
        (data as any[]).map((item) => ({
          ...item,
          name: decodeURIComponent(name as string),
        })) as any[]
      );
    });
  });
  return (
    <View
      className="miner-item"
      style={{
        paddingTop: `calc(${titleBarHeight} + ${statusBarHeight} + 75px)`,
      }}
    >
      <NavBar />
      <MinerTitle years={currentTick} />
      {!!minerHistory.length && (
        <>
          <HistoryTopCard miner={minerHistory[0]} />
          <HistoryList minerHistory={minerHistory} />
        </>
      )}
    </View>
  );
}
