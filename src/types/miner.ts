export interface Miner {
  _id: string;
  name: string;
  planet: {
    name: string
  };
  x: number;
  y: number;
  angle: number;
  carryCapacity: number;
  travelSpeed: number;
  miningSpeed: number;
  status: number;
  minerals: number;
  __v: number;
  target: string;
  targetType: string;
}

export interface MinerHistory {
  _id: string;
  year: number,
  updatedAt: string;
  name: string;
  status: number;
  capacity: { current: number; max: number };
  speed: { mining: number; travel: number };
  position: { x: number; y: number };
}
