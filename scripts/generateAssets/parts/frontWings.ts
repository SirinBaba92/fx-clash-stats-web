/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const FRONT_WINGS: Part[] = [
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
    name: 'Wind Guard',
    rarity: 'common',
    series: 1,
    stats: [
      { level: 1, speed: 2, cornering: 3, powerUnit: 2, qualifying: 1, pitStopTime: 0.98 },
      { level: 2, speed: 2, cornering: 4, powerUnit: 3, qualifying: 2, pitStopTime: 0.95 },
      { level: 3, speed: 3, cornering: 5, powerUnit: 4, qualifying: 3, pitStopTime: 0.92 },
      { level: 4, speed: 4, cornering: 5, powerUnit: 5, qualifying: 5, pitStopTime: 0.89 },
      { level: 5, speed: 5, cornering: 6, powerUnit: 6, qualifying: 6, pitStopTime: 0.86 },
      { level: 6, speed: 5, cornering: 7, powerUnit: 7, qualifying: 7, pitStopTime: 0.83 },
      { level: 7, speed: 6, cornering: 8, powerUnit: 8, qualifying: 8, pitStopTime: 0.80 },
      { level: 8, speed: 7, cornering: 9, powerUnit: 10, qualifying: 9, pitStopTime: 0.77 },
      { level: 9, speed: 8, cornering: 9, powerUnit: 11, qualifying: 11, pitStopTime: 0.74 },
      { level: 10, speed: 8, cornering: 10, powerUnit: 12, qualifying: 12, pitStopTime: 0.71 },
      { level: 11, speed: 9, cornering: 11, powerUnit: 13, qualifying: 13, pitStopTime: 0.69 },
    ],
  },
  {
    id: 2,
    name: 'Zephyr',
    rarity: 'rare',
    series: 2,
    stats: [
      { level: 1, speed: 6, cornering: 4, powerUnit: 3, qualifying: 3, pitStopTime: 0.80 },
      { level: 2, speed: 8, cornering: 5, powerUnit: 4, qualifying: 4, pitStopTime: 0.74 },
      { level: 3, speed: 9, cornering: 6, powerUnit: 4, qualifying: 4, pitStopTime: 0.67 },
      { level: 4, speed: 11, cornering: 6, powerUnit: 5, qualifying: 5, pitStopTime: 0.61 },
      { level: 5, speed: 13, cornering: 7, powerUnit: 6, qualifying: 5, pitStopTime: 0.55 },
      { level: 6, speed: 14, cornering: 8, powerUnit: 7, qualifying: 6, pitStopTime: 0.49 },
      { level: 7, speed: 16, cornering: 9, powerUnit: 7, qualifying: 7, pitStopTime: 0.42 },
      { level: 8, speed: 17, cornering: 9, powerUnit: 8, qualifying: 7, pitStopTime: 0.36 },
      { level: 9, speed: 19, cornering: 10, powerUnit: 9, qualifying: 8, pitStopTime: 0.30 },
    ],
  },
  {
    id: 3,
    name: 'Laminar',
    rarity: 'common',
    series: 3,
    stats: [
      { level: 1, speed: 3, cornering: 9, powerUnit: 2, qualifying: 4, pitStopTime: 0.86 },
      { level: 2, speed: 4, cornering: 11, powerUnit: 3, qualifying: 5, pitStopTime: 0.84 },
      { level: 3, speed: 4, cornering: 13, powerUnit: 3, qualifying: 5, pitStopTime: 0.81 },
      { level: 4, speed: 5, cornering: 14, powerUnit: 4, qualifying: 6, pitStopTime: 0.79 },
      { level: 5, speed: 6, cornering: 16, powerUnit: 5, qualifying: 7, pitStopTime: 0.76 },
      { level: 6, speed: 7, cornering: 18, powerUnit: 6, qualifying: 8, pitStopTime: 0.74 },
      { level: 7, speed: 7, cornering: 20, powerUnit: 6, qualifying: 8, pitStopTime: 0.71 },
      { level: 8, speed: 8, cornering: 22, powerUnit: 7, qualifying: 9, pitStopTime: 0.69 },
      { level: 9, speed: 9, cornering: 23, powerUnit: 8, qualifying: 10, pitStopTime: 0.66 },
      { level: 10, speed: 9, cornering: 25, powerUnit: 8, qualifying: 10, pitStopTime: 0.64 },
      { level: 11, speed: 10, cornering: 27, powerUnit: 9, qualifying: 11, pitStopTime: 0.62 },
    ],
  },
  {
    id: 4,
    name: 'Scythe',
    rarity: 'common',
    series: 5,
    stats: [
      { level: 1, speed: 5, cornering: 9, powerUnit: 6, qualifying: 11, pitStopTime: 0.79 },
      { level: 2, speed: 5, cornering: 10, powerUnit: 7, qualifying: 13, pitStopTime: 0.77 },
      { level: 3, speed: 6, cornering: 12, powerUnit: 7, qualifying: 14, pitStopTime: 0.74 },
      { level: 4, speed: 7, cornering: 13, powerUnit: 8, qualifying: 15, pitStopTime: 0.72 },
      { level: 5, speed: 7, cornering: 14, powerUnit: 9, qualifying: 17, pitStopTime: 0.69 },
      { level: 6, speed: 8, cornering: 16, powerUnit: 10, qualifying: 18, pitStopTime: 0.67 },
      { level: 7, speed: 8, cornering: 17, powerUnit: 10, qualifying: 19, pitStopTime: 0.64 },
      { level: 8, speed: 9, cornering: 18, powerUnit: 11, qualifying: 21, pitStopTime: 0.62 },
      { level: 9, speed: 10, cornering: 19, powerUnit: 12, qualifying: 22, pitStopTime: 0.59 },
      { level: 10, speed: 10, cornering: 21, powerUnit: 12, qualifying: 23, pitStopTime: 0.57 },
      { level: 11, speed: 11, cornering: 22, powerUnit: 13, qualifying: 25, pitStopTime: 0.55 },
    ],
  },
  {
    id: 5,
    name: 'Flashpoint',
    rarity: 'epic',
    series: 8,
    stats: [
      { level: 1, speed: 18, cornering: 9, powerUnit: 8, qualifying: 10, pitStopTime: 0.51 },
      { level: 2, speed: 20, cornering: 10, powerUnit: 9, qualifying: 11, pitStopTime: 0.46 },
      { level: 3, speed: 23, cornering: 11, powerUnit: 9, qualifying: 12, pitStopTime: 0.40 },
      { level: 4, speed: 25, cornering: 12, powerUnit: 10, qualifying: 13, pitStopTime: 0.35 },
      { level: 5, speed: 28, cornering: 12, powerUnit: 11, qualifying: 13, pitStopTime: 0.29 },
      { level: 6, speed: 30, cornering: 13, powerUnit: 12, qualifying: 14, pitStopTime: 0.24 },
      { level: 7, speed: 33, cornering: 14, powerUnit: 12, qualifying: 15, pitStopTime: 0.18 },
      { level: 8, speed: 35, cornering: 15, powerUnit: 13, qualifying: 16, pitStopTime: 0.13 },
    ],
  },
  {
    id: 6,
    name: 'Leading Edge',
    rarity: 'rare',
    series: 10,
    stats: [
      { level: 1, speed: 10, cornering: 12, powerUnit: 29, qualifying: 13, pitStopTime: 0.62 },
      { level: 2, speed: 11, cornering: 13, powerUnit: 31, qualifying: 14, pitStopTime: 0.59 },
      { level: 3, speed: 12, cornering: 14, powerUnit: 34, qualifying: 15, pitStopTime: 0.56 },
      { level: 4, speed: 12, cornering: 14, powerUnit: 36, qualifying: 16, pitStopTime: 0.54 },
      { level: 5, speed: 13, cornering: 15, powerUnit: 39, qualifying: 17, pitStopTime: 0.51 },
      { level: 6, speed: 14, cornering: 16, powerUnit: 41, qualifying: 17, pitStopTime: 0.48 },
      { level: 7, speed: 15, cornering: 17, powerUnit: 43, qualifying: 18, pitStopTime: 0.46 },
      { level: 8, speed: 15, cornering: 17, powerUnit: 46, qualifying: 19, pitStopTime: 0.43 },
      { level: 9, speed: 16, cornering: 18, powerUnit: 48, qualifying: 20, pitStopTime: 0.41 },
    ],
  },
  {
    id: 7,
    name: 'Loose Fit',
    rarity: 'epic',
    series: 11,
    stats: [
      { level: 1, speed: 42, cornering: 15, powerUnit: 16, qualifying: 17, pitStopTime: 0.51 },
      { level: 2, speed: 45, cornering: 16, powerUnit: 17, qualifying: 18, pitStopTime: 0.48 },
      { level: 3, speed: 47, cornering: 17, powerUnit: 18, qualifying: 19, pitStopTime: 0.45 },
      { level: 4, speed: 50, cornering: 18, powerUnit: 19, qualifying: 20, pitStopTime: 0.42 },
      { level: 5, speed: 52, cornering: 18, powerUnit: 20, qualifying: 21, pitStopTime: 0.39 },
      { level: 6, speed: 55, cornering: 19, powerUnit: 21, qualifying: 22, pitStopTime: 0.36 },
      { level: 7, speed: 57, cornering: 20, powerUnit: 22, qualifying: 23, pitStopTime: 0.33 },
      { level: 8, speed: 60, cornering: 21, powerUnit: 23, qualifying: 24, pitStopTime: 0.30 },
    ],
  },
] as Part[];

const createFrontWings = () => {
  const frontWingsToSave = preparePartData(FRONT_WINGS);

  console.log('Creating front wings file >>');
  createFile('src/features/parts/constants/frontWings.json', frontWingsToSave);
};

export default createFrontWings;
