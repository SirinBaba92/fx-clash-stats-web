export interface DriverWeights {
  overtaking: number;
  defending: number;
  qualifying: number;
  raceStart: number;
  tireManagement: number;
}

export interface PartWeights {
  speed: number;
  powerUnit: number;
  cornering: number;
  qualifying: number;
  pitStopTime: number;
}

export interface SeriesWeights {
  drivers: DriverWeights;
  parts: PartWeights;
}

export const SERIES_WEIGHTS: Record<number, SeriesWeights> = {
  1: {
    drivers: { overtaking: 5, qualifying: 2, defending: 1, raceStart: 1, tireManagement: 1 },
    parts: { speed: 5, powerUnit: 4, qualifying: 2, pitStopTime: 2, cornering: 1 },
  },
  2: {
    drivers: { raceStart: 3, overtaking: 3, defending: 3, qualifying: 2, tireManagement: 1 },
    parts: { cornering: 5, qualifying: 2, pitStopTime: 2, speed: 1, powerUnit: 1 },
  },
  3: {
    drivers: { tireManagement: 5, qualifying: 2, overtaking: 1, defending: 1, raceStart: 1 },
    parts: { speed: 4, powerUnit: 3, cornering: 3, qualifying: 2, pitStopTime: 2 },
  },
  4: {
    drivers: { overtaking: 4, defending: 4, qualifying: 2, raceStart: 1, tireManagement: 1 },
    parts: { speed: 5, qualifying: 2, pitStopTime: 2, powerUnit: 1, cornering: 1 },
  },
  5: {
    drivers: { tireManagement: 4, raceStart: 3, overtaking: 3, qualifying: 2, defending: 1 },
    parts: { powerUnit: 5, pitStopTime: 2, qualifying: 2, speed: 1, cornering: 1 },
  },
  6: {
    drivers: { defending: 5, qualifying: 2, overtaking: 1, raceStart: 1, tireManagement: 1 },
    parts: { speed: 4, powerUnit: 3, cornering: 3, qualifying: 2, pitStopTime: 2 },
  },
  7: {
    drivers: { raceStart: 5, qualifying: 2, overtaking: 1, defending: 1, tireManagement: 1 },
    parts: { cornering: 5, speed: 3, qualifying: 2, pitStopTime: 2, powerUnit: 1 },
  },
  8: {
    drivers: { overtaking: 5, qualifying: 2, defending: 1, raceStart: 1, tireManagement: 1 },
    parts: { speed: 4, cornering: 3, powerUnit: 3, qualifying: 2, pitStopTime: 2 },
  },
  9: {
    drivers: { tireManagement: 4, defending: 4, qualifying: 2, overtaking: 1, raceStart: 1 },
    parts: { speed: 5, qualifying: 2, pitStopTime: 2, powerUnit: 1, cornering: 1 },
  },
  10: {
    drivers: { overtaking: 5, qualifying: 2, defending: 1, raceStart: 1, tireManagement: 1 },
    parts: { powerUnit: 4, cornering: 3, speed: 3, qualifying: 2, pitStopTime: 2 },
  },
  11: {
    drivers: { raceStart: 5, qualifying: 2, overtaking: 1, defending: 1, tireManagement: 1 },
    parts: { cornering: 4, speed: 3, powerUnit: 3, qualifying: 2, pitStopTime: 2 },
  },
  12: {
    drivers: { defending: 5, qualifying: 2, overtaking: 1, raceStart: 1, tireManagement: 1 },
    parts: { speed: 4, cornering: 4, qualifying: 2, pitStopTime: 2, powerUnit: 1 },
  },
};
