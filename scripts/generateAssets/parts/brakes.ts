/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const BRAKES: Part[] = [
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
    name: 'Anchor',
    rarity: 'common',
    series: 1,
    stats: [
      { level: 1, speed: 2, cornering: 2, powerUnit: 2, qualifying: 2, pitStopTime: 0.98 },
      { level: 2, speed: 2, cornering: 2, powerUnit: 3, qualifying: 3, pitStopTime: 0.95 },
      { level: 3, speed: 3, cornering: 3, powerUnit: 4, qualifying: 4, pitStopTime: 0.92 },
      { level: 4, speed: 4, cornering: 4, powerUnit: 5, qualifying: 5, pitStopTime: 0.89 },
      { level: 5, speed: 5, cornering: 5, powerUnit: 6, qualifying: 6, pitStopTime: 0.86 },
      { level: 6, speed: 6, cornering: 5, powerUnit: 7, qualifying: 7, pitStopTime: 0.83 },
      { level: 7, speed: 7, cornering: 6, powerUnit: 8, qualifying: 8, pitStopTime: 0.79 },
      { level: 8, speed: 7, cornering: 7, powerUnit: 10, qualifying: 9, pitStopTime: 0.76 },
      { level: 9, speed: 8, cornering: 8, powerUnit: 11, qualifying: 10, pitStopTime: 0.73 },
      { level: 10, speed: 9, cornering: 8, powerUnit: 12, qualifying: 11, pitStopTime: 0.70 },
      { level: 11, speed: 10, cornering: 9, powerUnit: 13, qualifying: 12, pitStopTime: 0.67 },
    ],
  },
  {
    id: 2,
    name: 'Flow 2K',
    rarity: 'common',
    series: 2,
    stats: [
      { level: 1, speed: 2, cornering: 2, powerUnit: 5, qualifying: 5, pitStopTime: 0.97 },
      { level: 2, speed: 3, cornering: 3, powerUnit: 6, qualifying: 6, pitStopTime: 0.94 },
      { level: 3, speed: 3, cornering: 3, powerUnit: 7, qualifying: 7, pitStopTime: 0.91 },
      { level: 4, speed: 4, cornering: 4, powerUnit: 8, qualifying: 9, pitStopTime: 0.88 },
      { level: 5, speed: 4, cornering: 5, powerUnit: 9, qualifying: 10, pitStopTime: 0.85 },
      { level: 6, speed: 5, cornering: 5, powerUnit: 10, qualifying: 11, pitStopTime: 0.83 },
      { level: 7, speed: 5, cornering: 6, powerUnit: 11, qualifying: 13, pitStopTime: 0.80 },
      { level: 8, speed: 6, cornering: 7, powerUnit: 13, qualifying: 14, pitStopTime: 0.77 },
      { level: 9, speed: 7, cornering: 8, powerUnit: 14, qualifying: 15, pitStopTime: 0.74 },
      { level: 10, speed: 7, cornering: 8, powerUnit: 15, qualifying: 17, pitStopTime: 0.71 },
      { level: 11, speed: 8, cornering: 9, powerUnit: 16, qualifying: 18, pitStopTime: 0.69 },
    ],
  },
  {
    id: 3,
    name: 'Aegis',
    rarity: 'common',
    series: 3,
    stats: [
      { level: 1, speed: 12, cornering: 5, powerUnit: 3, qualifying: 4, pitStopTime: 0.83 },
      { level: 2, speed: 14, cornering: 5, powerUnit: 4, qualifying: 5, pitStopTime: 0.80 },
      { level: 3, speed: 16, cornering: 6, powerUnit: 4, qualifying: 5, pitStopTime: 0.78 },
      { level: 4, speed: 18, cornering: 7, powerUnit: 5, qualifying: 6, pitStopTime: 0.75 },
      { level: 5, speed: 20, cornering: 8, powerUnit: 5, qualifying: 6, pitStopTime: 0.73 },
      { level: 6, speed: 22, cornering: 8, powerUnit: 6, qualifying: 7, pitStopTime: 0.70 },
      { level: 7, speed: 23, cornering: 9, powerUnit: 7, qualifying: 8, pitStopTime: 0.68 },
      { level: 8, speed: 25, cornering: 10, powerUnit: 7, qualifying: 8, pitStopTime: 0.65 },
      { level: 9, speed: 27, cornering: 11, powerUnit: 8, qualifying: 9, pitStopTime: 0.63 },
      { level: 10, speed: 29, cornering: 11, powerUnit: 8, qualifying: 9, pitStopTime: 0.60 },
      { level: 11, speed: 31, cornering: 12, powerUnit: 9, qualifying: 10, pitStopTime: 0.58 },
    ],
  },
  {
    id: 4,
    name: 'Scramble',
    rarity: 'rare',
    series: 5,
    stats: [
      { level: 1, speed: 14, cornering: 8, powerUnit: 7, qualifying: 16, pitStopTime: 0.72 },
      { level: 2, speed: 16, cornering: 9, powerUnit: 8, qualifying: 17, pitStopTime: 0.69 },
      { level: 3, speed: 17, cornering: 10, powerUnit: 8, qualifying: 19, pitStopTime: 0.66 },
      { level: 4, speed: 19, cornering: 10, powerUnit: 9, qualifying: 21, pitStopTime: 0.63 },
      { level: 5, speed: 20, cornering: 11, powerUnit: 10, qualifying: 23, pitStopTime: 0.60 },
      { level: 6, speed: 22, cornering: 12, powerUnit: 11, qualifying: 24, pitStopTime: 0.57 },
      { level: 7, speed: 23, cornering: 13, powerUnit: 11, qualifying: 26, pitStopTime: 0.54 },
      { level: 8, speed: 25, cornering: 13, powerUnit: 12, qualifying: 28, pitStopTime: 0.51 },
      { level: 9, speed: 26, cornering: 14, powerUnit: 13, qualifying: 29, pitStopTime: 0.48 },
    ],
  },
  {
    id: 5,
    name: 'Aura Lock',
    rarity: 'rare',
    series: 6,
    stats: [
      { level: 1, speed: 10, cornering: 11, powerUnit: 27, qualifying: 9, pitStopTime: 0.68 },
      { level: 2, speed: 11, cornering: 12, powerUnit: 29, qualifying: 10, pitStopTime: 0.65 },
      { level: 3, speed: 12, cornering: 13, powerUnit: 32, qualifying: 11, pitStopTime: 0.62 },
      { level: 4, speed: 13, cornering: 14, powerUnit: 34, qualifying: 12, pitStopTime: 0.59 },
      { level: 5, speed: 14, cornering: 15, powerUnit: 36, qualifying: 13, pitStopTime: 0.56 },
      { level: 6, speed: 14, cornering: 15, powerUnit: 38, qualifying: 13, pitStopTime: 0.53 },
      { level: 7, speed: 15, cornering: 16, powerUnit: 41, qualifying: 14, pitStopTime: 0.50 },
      { level: 8, speed: 16, cornering: 17, powerUnit: 43, qualifying: 15, pitStopTime: 0.47 },
      { level: 9, speed: 17, cornering: 18, powerUnit: 45, qualifying: 16, pitStopTime: 0.44 },
    ],
  },
  {
    id: 6,
    name: 'Pressure Point',
    rarity: 'epic',
    series: 8,
    stats: [
      { level: 1, speed: 36, cornering: 15, powerUnit: 13, qualifying: 14, pitStopTime: 0.56 },
      { level: 2, speed: 38, cornering: 16, powerUnit: 14, qualifying: 14, pitStopTime: 0.53 },
      { level: 3, speed: 41, cornering: 17, powerUnit: 15, qualifying: 15, pitStopTime: 0.51 },
      { level: 4, speed: 43, cornering: 17, powerUnit: 15, qualifying: 16, pitStopTime: 0.48 },
      { level: 5, speed: 45, cornering: 18, powerUnit: 16, qualifying: 17, pitStopTime: 0.45 },
      { level: 6, speed: 47, cornering: 19, powerUnit: 17, qualifying: 18, pitStopTime: 0.42 },
      { level: 7, speed: 50, cornering: 20, powerUnit: 18, qualifying: 19, pitStopTime: 0.39 },
      { level: 8, speed: 54, cornering: 21, powerUnit: 19, qualifying: 20, pitStopTime: 0.34 },
    ],
  },
  {
    id: 7,
    name: 'Stabilix',
    rarity: 'epic',
    series: 11,
    stats: [
      { level: 1, speed: 14, cornering: 42, powerUnit: 18, qualifying: 15, pitStopTime: 0.48 },
      { level: 2, speed: 15, cornering: 44, powerUnit: 19, qualifying: 16, pitStopTime: 0.45 },
      { level: 3, speed: 15, cornering: 47, powerUnit: 20, qualifying: 17, pitStopTime: 0.41 },
      { level: 4, speed: 16, cornering: 49, powerUnit: 21, qualifying: 18, pitStopTime: 0.38 },
      { level: 5, speed: 17, cornering: 51, powerUnit: 22, qualifying: 19, pitStopTime: 0.34 },
      { level: 6, speed: 17, cornering: 53, powerUnit: 22, qualifying: 20, pitStopTime: 0.30 },
      { level: 7, speed: 18, cornering: 56, powerUnit: 23, qualifying: 21, pitStopTime: 0.27 },
      { level: 8, speed: 19, cornering: 60, powerUnit: 25, qualifying: 23, pitStopTime: 0.20 },
    ],
  },
] as Part[];

const createBrakes = () => {
  const brakesToSave = preparePartData(BRAKES);

  console.log('Creating brakes file >>');
  createFile('src/features/parts/constants/brakes.json', brakesToSave);
};

export default createBrakes;
