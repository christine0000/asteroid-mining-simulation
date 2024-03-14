import { View, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import socket from "../../utils/socket";
import PlanetItem from "./PlanetItem";
import asteroidIconSrc from "../../static/images/asteroid-icon.svg";
import "./MapContent.scss";

export default function MapContent() {
  const [mapInfo, setMapInfo] = useState<any>({});
  useEffect(() => {
    socket.on("tick", (...args) => {
      setMapInfo({ ...args[0] });
    });
  }, []);
  return (
    <View className="map-container">
      <View className="map-content">
        {mapInfo.planets &&
          mapInfo.planets.map((planet) => (
            <View
              className="planet-item"
              key={planet._id}
              style={{
                left: `${(planet.position.x * 100) / 1000}%`,
                top: `${(planet.position.y * 100) / 1000}%`,
              }}
            >
              <PlanetItem planet={planet}></PlanetItem>
            </View>
          ))}

        {mapInfo.asteroids &&
          mapInfo.asteroids.map((asteroid) => (
            <View
              className="asteroid-container"
              key={asteroid._id}
              style={{
                left: `${(asteroid.position.x * 100) / 1000}%`,
                top: `${(asteroid.position.y * 100) / 1000}%`,
              }}
            >
              <Image src={asteroidIconSrc} className="asteroid-img" />
            </View>
          ))}

        {mapInfo.miners &&
          mapInfo.miners.map((miner) => (
            <View
              className="iconfont icon-Vector-miner icon-miner"
              key={miner._id}
              style={{
                left: `${(miner.x * 100) / 1000}%`,
                top: `${(miner.y * 100) / 1000}%`,
                transform: `translate(-50%, -50%) rotate(${
                  miner.angle + 90
                }deg)`,
              }}
            ></View>
          ))}
      </View>
    </View>
  );
}
