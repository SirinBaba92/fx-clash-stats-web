/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const GEARBOXES: Part[] = [
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
    name: 'Cadence',
    rarity: 'common',
    series: 1,
    stats: [
      { level: 1, speed: 2, cornering: 2, powerUnit: 2, qualifying: 2, pitStopTime: 0.98 },
      { level: 2, speed: 3, cornering: 2, powerUnit: 2, qualifying: 3, pitStopTime: 0.95 },
      { level: 3, speed: 4, cornering: 3, powerUnit: 3, qualifying: 4, pitStopTime: 0.92 },
      { level: 4, speed: 5, cornering: 4, powerUnit: 4, qualifying: 5, pitStopTime: 0.89 },
      { level: 5, speed: 6, cornering: 5, powerUnit: 5, qualifying: 6, pitStopTime: 0.86 },
      { level: 6, speed: 7, cornering: 6, powerUnit: 5, qualifying: 8, pitStopTime: 0.83 },
      { level: 7, speed: 8, cornering: 7, powerUnit: 6, qualifying: 9, pitStopTime: 0.79 },
      { level: 8, speed: 9, cornering: 7, powerUnit: 7, qualifying: 10, pitStopTime: 0.76 },
      { level: 9, speed: 10, cornering: 8, powerUnit: 8, qualifying: 11, pitStopTime: 0.73 },
      { level: 10, speed: 11, cornering: 9, powerUnit: 8, qualifying: 12, pitStopTime: 0.70 },
      { level: 11, speed: 12, cornering: 10, powerUnit: 9, qualifying: 13, pitStopTime: 0.67 },
    ],
  },
  {
    id: 2,
    name: 'Flow Logic',
    rarity: 'common',
    series: 2,
    stats: [
      { level: 1, speed: 2, cornering: 3, powerUnit: 5, qualifying: 2, pitStopTime: 0.90 },
      { level: 2, speed: 3, cornering: 4, powerUnit: 6, qualifying: 3, pitStopTime: 0.85 },
      { level: 3, speed: 3, cornering: 4, powerUnit: 7, qualifying: 3, pitStopTime: 0.81 },
      { level: 4, speed: 4, cornering: 5, powerUnit: 9, qualifying: 4, pitStopTime: 0.77 },
      { level: 5, speed: 4, cornering: 6, powerUnit: 10, qualifying: 5, pitStopTime: 0.73 },
      { level: 6, speed: 5, cornering: 7, powerUnit: 11, qualifying: 5, pitStopTime: 0.69 },
      { level: 7, speed: 5, cornering: 7, powerUnit: 13, qualifying: 6, pitStopTime: 0.64 },
      { level: 8, speed: 6, cornering: 8, powerUnit: 14, qualifying: 7, pitStopTime: 0.60 },
      { level: 9, speed: 7, cornering: 9, powerUnit: 15, qualifying: 8, pitStopTime: 0.56 },
      { level: 10, speed: 7, cornering: 9, powerUnit: 17, qualifying: 8, pitStopTime: 0.52 },
      { level: 11, speed: 8, cornering: 10, powerUnit: 18, qualifying: 9, pitStopTime: 0.48 },
    ],
  },
  {
    id: 3,
    name: 'Stratos',
    rarity: 'epic',
    series: 3,
    stats: [
      { level: 1, speed: 5, cornering: 5, powerUnit: 10, qualifying: 11, pitStopTime: 0.83 },
      { level: 2, speed: 6, cornering: 6, powerUnit: 12, qualifying: 13, pitStopTime: 0.79 },
      { level: 3, speed: 7, cornering: 7, powerUnit: 13, qualifying: 15, pitStopTime: 0.76 },
      { level: 4, speed: 7, cornering: 8, powerUnit: 15, qualifying: 17, pitStopTime: 0.72 },
      { level: 5, speed: 8, cornering: 9, powerUnit: 17, qualifying: 19, pitStopTime: 0.69 },
      { level: 6, speed: 9, cornering: 10, powerUnit: 19, qualifying: 21, pitStopTime: 0.65 },
      { level: 7, speed: 10, cornering: 11, powerUnit: 20, qualifying: 23, pitStopTime: 0.62 },
      { level: 8, speed: 11, cornering: 12, powerUnit: 22, qualifying: 25, pitStopTime: 0.58 },
    ],
  },
  {
    id: 4,
    name: 'Shift X',
    rarity: 'rare',
    series: 5,
    stats: [
      { level: 1, speed: 7, cornering: 21, powerUnit: 8, qualifying: 9, pitStopTime: 0.76 },
      { level: 2, speed: 8, cornering: 23, powerUnit: 9, qualifying: 10, pitStopTime: 0.73 },
      { level: 3, speed: 9, cornering: 25, powerUnit: 10, qualifying: 11, pitStopTime: 0.70 },
      { level: 4, speed: 10, cornering: 27, powerUnit: 11, qualifying: 12, pitStopTime: 0.68 },
      { level: 5, speed: 11, cornering: 29, powerUnit: 12, qualifying: 13, pitStopTime: 0.65 },
      { level: 6, speed: 12, cornering: 30, powerUnit: 13, qualifying: 14, pitStopTime: 0.62 },
      { level: 7, speed: 13, cornering: 32, powerUnit: 14, qualifying: 15, pitStopTime: 0.60 },
      { level: 8, speed: 14, cornering: 34, powerUnit: 15, qualifying: 16, pitStopTime: 0.57 },
      { level: 9, speed: 15, cornering: 36, powerUnit: 16, qualifying: 17, pitStopTime: 0.55 },
    ],
  },
  {
    id: 5,
    name: 'Lockdown',
    rarity: 'rare',
    series: 8,
    stats: [
      { level: 1, speed: 21, cornering: 9, powerUnit: 8, qualifying: 9, pitStopTime: 0.34 },
      { level: 2, speed: 23, cornering: 10, powerUnit: 9, qualifying: 10, pitStopTime: 0.30 },
      { level: 3, speed: 24, cornering: 11, powerUnit: 10, qualifying: 11, pitStopTime: 0.27 },
      { level: 4, speed: 26, cornering: 12, powerUnit: 10, qualifying: 13, pitStopTime: 0.24 },
      { level: 5, speed: 27, cornering: 13, powerUnit: 11, qualifying: 14, pitStopTime: 0.21 },
      { level: 6, speed: 29, cornering: 14, powerUnit: 12, qualifying: 15, pitStopTime: 0.18 },
      { level: 7, speed: 31, cornering: 15, powerUnit: 13, qualifying: 16, pitStopTime: 0.15 },
      { level: 8, speed: 32, cornering: 16, powerUnit: 13, qualifying: 18, pitStopTime: 0.12 },
      { level: 9, speed: 34, cornering: 17, powerUnit: 14, qualifying: 19, pitStopTime: 0.09 },
    ],
  },
  {
    id: 6,
    name: 'Fracture',
    rarity: 'rare',
    series: 10,
    stats: [
      { level: 1, speed: 13, cornering: 33, powerUnit: 11, qualifying: 14, pitStopTime: 0.60 },
      { level: 2, speed: 14, cornering: 35, powerUnit: 12, qualifying: 15, pitStopTime: 0.58 },
      { level: 3, speed: 15, cornering: 38, powerUnit: 12, qualifying: 16, pitStopTime: 0.56 },
      { level: 4, speed: 16, cornering: 40, powerUnit: 13, qualifying: 17, pitStopTime: 0.54 },
      { level: 5, speed: 17, cornering: 43, powerUnit: 14, qualifying: 19, pitStopTime: 0.52 },
      { level: 6, speed: 17, cornering: 45, powerUnit: 14, qualifying: 20, pitStopTime: 0.50 },
      { level: 7, speed: 18, cornering: 47, powerUnit: 15, qualifying: 21, pitStopTime: 0.48 },
      { level: 8, speed: 19, cornering: 50, powerUnit: 15, qualifying: 22, pitStopTime: 0.46 },
      { level: 9, speed: 20, cornering: 52, powerUnit: 16, qualifying: 23, pitStopTime: 0.44 },
    ],
  },
  {
    id: 7,
    name: 'Powerbox',
    rarity: 'epic',
    series: 12,
    stats: [
      { level: 1, speed: 17, cornering: 14, powerUnit: 38, qualifying: 14, pitStopTime: 0.44 },
      { level: 2, speed: 18, cornering: 15, powerUnit: 41, qualifying: 14, pitStopTime: 0.40 },
      { level: 3, speed: 19, cornering: 15, powerUnit: 44, qualifying: 15, pitStopTime: 0.36 },
      { level: 4, speed: 20, cornering: 16, powerUnit: 47, qualifying: 15, pitStopTime: 0.32 },
      { level: 5, speed: 21, cornering: 17, powerUnit: 49, qualifying: 15, pitStopTime: 0.28 },
      { level: 6, speed: 22, cornering: 18, powerUnit: 52, qualifying: 15, pitStopTime: 0.24 },
      { level: 7, speed: 23, cornering: 18, powerUnit: 55, qualifying: 16, pitStopTime: 0.20 },
      { level: 8, speed: 24, cornering: 19, powerUnit: 58, qualifying: 16, pitStopTime: 0.16 },
    ],
  },
] as Part[];

const createGearboxes = () => {
  const gearboxesToSave = preparePartData(GEARBOXES);

  console.log('Creating gearboxes file >>');
  createFile('src/features/parts/constants/gearboxes.json', gearboxesToSave);
};

export default createGearboxes;
