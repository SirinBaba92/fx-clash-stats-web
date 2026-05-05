/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const REAR_WINGS: Part[] = [
  {
    id: 0,
    name: 'Starter',
    rarity: 'stock',
    series: 1,
    stats: [
      {
        level: 1,
        speed: 1,
        cornering: 1,
        powerUnit: 1,
        qualifying: 1,
        pitStopTime: 1,
      },
    ],
  },
  {
    id: 1,
    name: 'Wobble',
    rarity: 'rare',
    series: 1,
    stats: [
      { level: 1, speed: 3, cornering: 2, powerUnit: 4, qualifying: 2, pitStopTime: 0.90 },
      { level: 2, speed: 4, cornering: 3, powerUnit: 5, qualifying: 3, pitStopTime: 0.85 },
      { level: 3, speed: 6, cornering: 4, powerUnit: 6, qualifying: 4, pitStopTime: 0.80 },
      { level: 4, speed: 7, cornering: 5, powerUnit: 7, qualifying: 5, pitStopTime: 0.75 },
      { level: 5, speed: 8, cornering: 7, powerUnit: 8, qualifying: 6, pitStopTime: 0.70 },
      { level: 6, speed: 9, cornering: 8, powerUnit: 9, qualifying: 6, pitStopTime: 0.65 },
      { level: 7, speed: 11, cornering: 9, powerUnit: 10, qualifying: 7, pitStopTime: 0.61 },
      { level: 8, speed: 12, cornering: 10, powerUnit: 11, qualifying: 8, pitStopTime: 0.56 },
      { level: 9, speed: 13, cornering: 11, powerUnit: 12, qualifying: 9, pitStopTime: 0.51 },
    ],
  },
  {
    id: 2,
    name: 'Tailwind',
    rarity: 'common',
    series: 3,
    stats: [
      { level: 1, speed: 2, cornering: 5, powerUnit: 2, qualifying: 2, pitStopTime: 0.88 },
      { level: 2, speed: 3, cornering: 6, powerUnit: 3, qualifying: 3, pitStopTime: 0.83 },
      { level: 3, speed: 3, cornering: 7, powerUnit: 3, qualifying: 4, pitStopTime: 0.78 },
      { level: 4, speed: 4, cornering: 8, powerUnit: 4, qualifying: 4, pitStopTime: 0.74 },
      { level: 5, speed: 4, cornering: 9, powerUnit: 5, qualifying: 5, pitStopTime: 0.69 },
      { level: 6, speed: 5, cornering: 10, powerUnit: 5, qualifying: 6, pitStopTime: 0.64 },
      { level: 7, speed: 5, cornering: 11, powerUnit: 6, qualifying: 7, pitStopTime: 0.59 },
      { level: 8, speed: 6, cornering: 13, powerUnit: 7, qualifying: 8, pitStopTime: 0.55 },
      { level: 9, speed: 7, cornering: 14, powerUnit: 8, qualifying: 8, pitStopTime: 0.50 },
      { level: 10, speed: 7, cornering: 15, powerUnit: 8, qualifying: 9, pitStopTime: 0.45 },
      { level: 11, speed: 8, cornering: 16, powerUnit: 9, qualifying: 10, pitStopTime: 0.41 },
    ],
  },
  {
    id: 3,
    name: 'Air Channel',
    rarity: 'common',
    series: 4,
    stats: [
      { level: 1, speed: 4, cornering: 3, powerUnit: 7, qualifying: 6, pitStopTime: 0.93 },
      { level: 2, speed: 5, cornering: 4, powerUnit: 8, qualifying: 7, pitStopTime: 0.91 },
      { level: 3, speed: 5, cornering: 4, powerUnit: 9, qualifying: 8, pitStopTime: 0.88 },
      { level: 4, speed: 6, cornering: 5, powerUnit: 11, qualifying: 10, pitStopTime: 0.86 },
      { level: 5, speed: 7, cornering: 5, powerUnit: 12, qualifying: 11, pitStopTime: 0.83 },
      { level: 6, speed: 8, cornering: 6, powerUnit: 14, qualifying: 12, pitStopTime: 0.81 },
      { level: 7, speed: 8, cornering: 6, powerUnit: 15, qualifying: 13, pitStopTime: 0.78 },
      { level: 8, speed: 9, cornering: 7, powerUnit: 16, qualifying: 14, pitStopTime: 0.76 },
      { level: 9, speed: 10, cornering: 8, powerUnit: 18, qualifying: 16, pitStopTime: 0.73 },
      { level: 10, speed: 10, cornering: 8, powerUnit: 19, qualifying: 17, pitStopTime: 0.71 },
      { level: 11, speed: 11, cornering: 9, powerUnit: 20, qualifying: 18, pitStopTime: 0.69 },
    ],
  },
  {
    id: 4,
    name: 'Vibe Lift',
    rarity: 'common',
    series: 6,
    stats: [
      { level: 1, speed: 11, cornering: 5, powerUnit: 6, qualifying: 5, pitStopTime: 0.69 },
      { level: 2, speed: 13, cornering: 6, powerUnit: 7, qualifying: 5, pitStopTime: 0.64 },
      { level: 3, speed: 14, cornering: 6, powerUnit: 7, qualifying: 6, pitStopTime: 0.59 },
      { level: 4, speed: 15, cornering: 7, powerUnit: 8, qualifying: 7, pitStopTime: 0.55 },
      { level: 5, speed: 17, cornering: 8, powerUnit: 9, qualifying: 7, pitStopTime: 0.50 },
      { level: 6, speed: 18, cornering: 8, powerUnit: 10, qualifying: 8, pitStopTime: 0.46 },
      { level: 7, speed: 19, cornering: 9, powerUnit: 10, qualifying: 8, pitStopTime: 0.41 },
      { level: 8, speed: 21, cornering: 10, powerUnit: 11, qualifying: 9, pitStopTime: 0.37 },
      { level: 9, speed: 22, cornering: 11, powerUnit: 12, qualifying: 10, pitStopTime: 0.32 },
      { level: 10, speed: 23, cornering: 11, powerUnit: 12, qualifying: 10, pitStopTime: 0.28 },
      { level: 11, speed: 25, cornering: 12, powerUnit: 13, qualifying: 11, pitStopTime: 0.23 },
    ],
  },
  {
    id: 5,
    name: 'Impact',
    rarity: 'rare',
    series: 7,
    stats: [
      { level: 1, speed: 10, cornering: 24, powerUnit: 8, qualifying: 11, pitStopTime: 0.79 },
      { level: 2, speed: 11, cornering: 26, powerUnit: 9, qualifying: 12, pitStopTime: 0.76 },
      { level: 3, speed: 11, cornering: 29, powerUnit: 10, qualifying: 13, pitStopTime: 0.73 },
      { level: 4, speed: 12, cornering: 31, powerUnit: 11, qualifying: 13, pitStopTime: 0.70 },
      { level: 5, speed: 13, cornering: 33, powerUnit: 12, qualifying: 14, pitStopTime: 0.67 },
      { level: 6, speed: 14, cornering: 35, powerUnit: 12, qualifying: 15, pitStopTime: 0.64 },
      { level: 7, speed: 14, cornering: 38, powerUnit: 13, qualifying: 16, pitStopTime: 0.61 },
      { level: 8, speed: 15, cornering: 40, powerUnit: 14, qualifying: 16, pitStopTime: 0.58 },
      { level: 9, speed: 16, cornering: 42, powerUnit: 15, qualifying: 17, pitStopTime: 0.55 },
    ],
  },
  {
    id: 6,
    name: 'Downforce',
    rarity: 'epic',
    series: 9,
    stats: [
      { level: 1, speed: 33, cornering: 11, powerUnit: 14, qualifying: 13, pitStopTime: 0.62 },
      { level: 2, speed: 36, cornering: 12, powerUnit: 15, qualifying: 14, pitStopTime: 0.59 },
      { level: 3, speed: 38, cornering: 13, powerUnit: 16, qualifying: 15, pitStopTime: 0.56 },
      { level: 4, speed: 41, cornering: 14, powerUnit: 17, qualifying: 16, pitStopTime: 0.53 },
      { level: 5, speed: 44, cornering: 14, powerUnit: 18, qualifying: 17, pitStopTime: 0.50 },
      { level: 6, speed: 47, cornering: 15, powerUnit: 19, qualifying: 18, pitStopTime: 0.47 },
      { level: 7, speed: 49, cornering: 16, powerUnit: 20, qualifying: 19, pitStopTime: 0.44 },
      { level: 8, speed: 52, cornering: 17, powerUnit: 21, qualifying: 20, pitStopTime: 0.41 },
    ],
  },
  {
    id: 7,
    name: 'Dominus',
    rarity: 'epic',
    series: 11,
    stats: [
      { level: 1, speed: 14, cornering: 16, powerUnit: 42, qualifying: 17, pitStopTime: 0.51 },
      { level: 2, speed: 15, cornering: 17, powerUnit: 45, qualifying: 18, pitStopTime: 0.48 },
      { level: 3, speed: 16, cornering: 18, powerUnit: 48, qualifying: 19, pitStopTime: 0.45 },
      { level: 4, speed: 17, cornering: 19, powerUnit: 51, qualifying: 20, pitStopTime: 0.42 },
      { level: 5, speed: 17, cornering: 20, powerUnit: 53, qualifying: 21, pitStopTime: 0.39 },
      { level: 6, speed: 18, cornering: 21, powerUnit: 56, qualifying: 22, pitStopTime: 0.36 },
      { level: 7, speed: 19, cornering: 22, powerUnit: 59, qualifying: 23, pitStopTime: 0.33 },
      { level: 8, speed: 20, cornering: 23, powerUnit: 62, qualifying: 24, pitStopTime: 0.30 },
    ],
  },
] as Part[];

const createRearWings = () => {
  const rearWingsToSave = preparePartData(REAR_WINGS);

  console.log('Creating rear wings file >>');
  createFile('src/features/parts/constants/rearWings.json', rearWingsToSave);
};

export default createRearWings;
