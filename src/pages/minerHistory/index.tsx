import { View } from "@tarojs/components";
import { useState } from "react";
import { useLoad, useRouter } from "@tarojs/taro";
import NavBar from "../../components/common/NavBar";
import MinerTitle from "../../components/miners/MinerTitle";
import Miners from "../../services/miners";
import HistoryList from "../../components/minerHistory/HistoryList";
import HistoryTopCard from "../../components/minerHistory/HistoryTopCard";
import { titleBarHeight } from "../../constant";
import "./index.scss";

export default function MinerDetails() {
  const [currentTick, setCurrentTick] = useState<number>(0);
  const [minerHistory, setMinerHistory] = useState<any[]>([]);
  const router = useRouter();
  const { id, name } = router.params;
  useLoad(() => {
    new Miners().getMinerHistory(id).then((data) => {
      setCurrentTick((data as any[])[0].year);
      setMinerHistory(
        (data as any[]).map((item) => ({
          ...item,
          planet: { name: decodeURIComponent(name as string) },
        })) as any[]
      );
    });
  });
  return (
    <View
      className="history-list"
      style={{
        paddingTop: `calc(${titleBarHeight} + 75px)`,
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
