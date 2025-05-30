interface IPhysicsConfig {
  fixedTimestep: number;
  gravity: {
    x: number;
    y: number;
    scale: number;
  };
  velocityIterations: number;
  positionIterations: number;
  worldBounds: {
    min: { x: number; y: number };
    max: { x: number; y: number };
  };
}

const physicsConfig: IPhysicsConfig = {
  fixedTimestep: 1000 / 60,
  gravity: { x: 0, y: 0, scale: 0 },
  velocityIterations: 1,
  positionIterations: 1,
  worldBounds: {
    min: { x: 50, y: 50 },
    max: { x: 2100, y: 750 },
  },
};

export default physicsConfig;
