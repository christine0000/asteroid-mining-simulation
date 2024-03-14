import { View, Image } from "@tarojs/components";
import plant1Src from "../../static/images/planet-1.png";
import plant2Src from "../../static/images/planet-2.png";
import plant3Src from "../../static/images/planet-3.png";
import "./PlanetItem.scss";

interface Props {
  planet: { name: string; minerals: number };
}

export default function PlanetItem({ planet }: Props) {
  return (
    <View className="planet-container">
      {planet && planet.name === "Planet 1" && (
        <View className="planet planet1">
          <Image className="planet-img" src={plant1Src} />
        </View>
      )}
      {planet && planet.name == "Planet 2" && (
        <View className="planet planet2">
          <Image className="planet-img" src={plant2Src} />
        </View>
      )}
      {planet && planet.name == "Planet 3" && (
        <View className="planet planet3">
          <Image className="planet-img" src={plant3Src} />
        </View>
      )}

      <View
        className={
          planet && planet.minerals >= 1000
            ? "miner-info finished"
            : "miner-info"
        }
      >
        {planet ? planet.minerals : 0} / 1000
      </View>
    </View>
  );
}
