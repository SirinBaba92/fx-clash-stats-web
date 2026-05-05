/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const SUSPENSIONS: Part[] = [
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
    name: 'Shockwave',
    rarity: 'common',
    series: 1,
    stats: [
      { level: 1, speed: 1, cornering: 1, powerUnit: 2, qualifying: 1, pitStopTime: 0.96 },
      { level: 2, speed: 2, cornering: 2, powerUnit: 3, qualifying: 2, pitStopTime: 0.91 },
      { level: 3, speed: 3, cornering: 2, powerUnit: 5, qualifying: 2, pitStopTime: 0.86 },
      { level: 4, speed: 3, cornering: 3, powerUnit: 6, qualifying: 3, pitStopTime: 0.81 },
      { level: 5, speed: 4, cornering: 3, powerUnit: 7, qualifying: 4, pitStopTime: 0.77 },
      { level: 6, speed: 5, cornering: 4, powerUnit: 8, qualifying: 4, pitStopTime: 0.72 },
      { level: 7, speed: 6, cornering: 4, powerUnit: 9, qualifying: 5, pitStopTime: 0.67 },
      { level: 8, speed: 7, cornering: 5, powerUnit: 10, qualifying: 6, pitStopTime: 0.63 },
      { level: 9, speed: 7, cornering: 6, powerUnit: 12, qualifying: 7, pitStopTime: 0.58 },
      { level: 10, speed: 8, cornering: 6, powerUnit: 13, qualifying: 7, pitStopTime: 0.53 },
      { level: 11, speed: 9, cornering: 7, powerUnit: 14, qualifying: 8, pitStopTime: 0.48 },
    ],
  },
  {
    id: 2,
    name: 'Jumpstart',
    rarity: 'common',
    series: 2,
    stats: [
      { level: 1, speed: 3, cornering: 4, powerUnit: 3, qualifying: 3, pitStopTime: 0.97 },
      { level: 2, speed: 4, cornering: 5, powerUnit: 4, qualifying: 4, pitStopTime: 0.94 },
      { level: 3, speed: 5, cornering: 6, powerUnit: 5, qualifying: 5, pitStopTime: 0.91 },
      { level: 4, speed: 6, cornering: 7, powerUnit: 5, qualifying: 6, pitStopTime: 0.88 },
      { level: 5, speed: 7, cornering: 8, powerUnit: 6, qualifying: 7, pitStopTime: 0.85 },
      { level: 6, speed: 8, cornering: 9, powerUnit: 7, qualifying: 8, pitStopTime: 0.83 },
      { level: 7, speed: 9, cornering: 10, powerUnit: 8, qualifying: 8, pitStopTime: 0.80 },
      { level: 8, speed: 10, cornering: 11, powerUnit: 9, qualifying: 9, pitStopTime: 0.77 },
      { level: 9, speed: 11, cornering: 12, powerUnit: 9, qualifying: 10, pitStopTime: 0.74 },
      { level: 10, speed: 12, cornering: 13, powerUnit: 10, qualifying: 11, pitStopTime: 0.71 },
      { level: 11, speed: 13, cornering: 14, powerUnit: 11, qualifying: 12, pitStopTime: 0.69 },
    ],
  },
  {
    id: 3,
    name: 'Stability Unit',
    rarity: 'common',
    series: 3,
    stats: [
      { level: 1, speed: 4, cornering: 9, powerUnit: 3, qualifying: 9, pitStopTime: 0.86 },
      { level: 2, speed: 5, cornering: 10, powerUnit: 4, qualifying: 10, pitStopTime: 0.84 },
      { level: 3, speed: 5, cornering: 11, powerUnit: 4, qualifying: 12, pitStopTime: 0.81 },
      { level: 4, speed: 6, cornering: 12, powerUnit: 5, qualifying: 13, pitStopTime: 0.79 },
      { level: 5, speed: 7, cornering: 13, powerUnit: 6, qualifying: 14, pitStopTime: 0.76 },
      { level: 6, speed: 7, cornering: 15, powerUnit: 6, qualifying: 16, pitStopTime: 0.74 },
      { level: 7, speed: 8, cornering: 16, powerUnit: 7, qualifying: 17, pitStopTime: 0.71 },
      { level: 8, speed: 9, cornering: 17, powerUnit: 8, qualifying: 18, pitStopTime: 0.69 },
      { level: 9, speed: 10, cornering: 18, powerUnit: 8, qualifying: 20, pitStopTime: 0.66 },
      { level: 10, speed: 10, cornering: 19, powerUnit: 9, qualifying: 21, pitStopTime: 0.64 },
      { level: 11, speed: 11, cornering: 20, powerUnit: 10, qualifying: 23, pitStopTime: 0.62 },
    ],
  },
  {
    id: 4,
    name: 'Equilibrium',
    rarity: 'rare',
    series: 5,
    stats: [
      { level: 1, speed: 7, cornering: 6, powerUnit: 18, qualifying: 5, pitStopTime: 0.79 },
      { level: 2, speed: 8, cornering: 7, powerUnit: 20, qualifying: 6, pitStopTime: 0.76 },
      { level: 3, speed: 9, cornering: 8, powerUnit: 23, qualifying: 7, pitStopTime: 0.72 },
      { level: 4, speed: 10, cornering: 9, powerUnit: 25, qualifying: 7, pitStopTime: 0.69 },
      { level: 5, speed: 11, cornering: 10, powerUnit: 27, qualifying: 8, pitStopTime: 0.65 },
      { level: 6, speed: 12, cornering: 10, powerUnit: 29, qualifying: 9, pitStopTime: 0.62 },
      { level: 7, speed: 13, cornering: 11, powerUnit: 32, qualifying: 10, pitStopTime: 0.58 },
      { level: 8, speed: 14, cornering: 12, powerUnit: 34, qualifying: 10, pitStopTime: 0.55 },
      { level: 9, speed: 15, cornering: 13, powerUnit: 36, qualifying: 11, pitStopTime: 0.51 },
    ],
  },
  {
    id: 5,
    name: 'Curver 3.0',
    rarity: 'epic',
    series: 7,
    stats: [
      { level: 1, speed: 11, cornering: 27, powerUnit: 12, qualifying: 9, pitStopTime: 0.72 },
      { level: 2, speed: 12, cornering: 29, powerUnit: 13, qualifying: 10, pitStopTime: 0.68 },
      { level: 3, speed: 13, cornering: 31, powerUnit: 14, qualifying: 11, pitStopTime: 0.64 },
      { level: 4, speed: 14, cornering: 33, powerUnit: 15, qualifying: 12, pitStopTime: 0.60 },
      { level: 5, speed: 16, cornering: 34, powerUnit: 17, qualifying: 14, pitStopTime: 0.56 },
      { level: 6, speed: 17, cornering: 36, powerUnit: 18, qualifying: 15, pitStopTime: 0.52 },
      { level: 7, speed: 18, cornering: 38, powerUnit: 19, qualifying: 16, pitStopTime: 0.48 },
      { level: 8, speed: 19, cornering: 40, powerUnit: 20, qualifying: 17, pitStopTime: 0.44 },
    ],
  },
  {
    id: 6,
    name: 'Motion Link V2',
    rarity: 'rare',
    series: 9,
    stats: [
      { level: 1, speed: 11, cornering: 30, powerUnit: 10, qualifying: 11, pitStopTime: 0.62 },
      { level: 2, speed: 12, cornering: 32, powerUnit: 11, qualifying: 12, pitStopTime: 0.58 },
      { level: 3, speed: 13, cornering: 35, powerUnit: 12, qualifying: 13, pitStopTime: 0.55 },
      { level: 4, speed: 13, cornering: 37, powerUnit: 12, qualifying: 14, pitStopTime: 0.51 },
      { level: 5, speed: 14, cornering: 40, powerUnit: 13, qualifying: 15, pitStopTime: 0.48 },
      { level: 6, speed: 15, cornering: 42, powerUnit: 14, qualifying: 15, pitStopTime: 0.44 },
      { level: 7, speed: 16, cornering: 44, powerUnit: 15, qualifying: 16, pitStopTime: 0.41 },
      { level: 8, speed: 16, cornering: 47, powerUnit: 15, qualifying: 17, pitStopTime: 0.37 },
      { level: 9, speed: 17, cornering: 49, powerUnit: 16, qualifying: 18, pitStopTime: 0.34 },
    ],
  },
  {
    id: 7,
    name: 'Bounce',
    rarity: 'epic',
    series: 12,
    stats: [
      { level: 1, speed: 39, cornering: 13, powerUnit: 16, qualifying: 14, pitStopTime: 0.44 },
      { level: 2, speed: 42, cornering: 14, powerUnit: 17, qualifying: 15, pitStopTime: 0.41 },
      { level: 3, speed: 44, cornering: 15, powerUnit: 18, qualifying: 16, pitStopTime: 0.38 },
      { level: 4, speed: 47, cornering: 16, powerUnit: 19, qualifying: 17, pitStopTime: 0.35 },
      { level: 5, speed: 49, cornering: 17, powerUnit: 19, qualifying: 18, pitStopTime: 0.32 },
      { level: 6, speed: 52, cornering: 18, powerUnit: 20, qualifying: 19, pitStopTime: 0.29 },
      { level: 7, speed: 54, cornering: 19, powerUnit: 21, qualifying: 20, pitStopTime: 0.26 },
      { level: 8, speed: 57, cornering: 20, powerUnit: 22, qualifying: 21, pitStopTime: 0.23 },
    ],
  },
] as Part[];

const createSuspensions = () => {
  const suspensionsToSave = preparePartData(SUSPENSIONS);

  console.log('Creating suspensions file >>');
  createFile('src/features/parts/constants/suspensions.json', suspensionsToSave);
};

export default createSuspensions;
