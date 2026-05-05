/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const ENGINES: Part[] = [
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
    name: 'Tempest',
    rarity: 'epic',
    series: 1,
    stats: [
      { level: 1, speed: 3, cornering: 7, powerUnit: 2, qualifying: 7, pitStopTime: 0.90 },
      { level: 2, speed: 4, cornering: 9, powerUnit: 3, qualifying: 9, pitStopTime: 0.86 },
      { level: 3, speed: 5, cornering: 11, powerUnit: 4, qualifying: 10, pitStopTime: 0.83 },
      { level: 4, speed: 6, cornering: 13, powerUnit: 5, qualifying: 12, pitStopTime: 0.79 },
      { level: 5, speed: 6, cornering: 15, powerUnit: 5, qualifying: 14, pitStopTime: 0.76 },
      { level: 6, speed: 7, cornering: 17, powerUnit: 6, qualifying: 16, pitStopTime: 0.72 },
      { level: 7, speed: 8, cornering: 19, powerUnit: 7, qualifying: 17, pitStopTime: 0.69 },
      { level: 8, speed: 9, cornering: 21, powerUnit: 8, qualifying: 19, pitStopTime: 0.65 },
    ],
  },
  {
    id: 2,
    name: 'Bedrock',
    rarity: 'common',
    series: 2,
    stats: [
      { level: 1, speed: 4, cornering: 5, powerUnit: 3, qualifying: 6, pitStopTime: 0.88 },
      { level: 2, speed: 5, cornering: 6, powerUnit: 4, qualifying: 7, pitStopTime: 0.84 },
      { level: 3, speed: 6, cornering: 7, powerUnit: 5, qualifying: 8, pitStopTime: 0.80 },
      { level: 4, speed: 7, cornering: 8, powerUnit: 6, qualifying: 9, pitStopTime: 0.77 },
      { level: 5, speed: 8, cornering: 8, powerUnit: 7, qualifying: 10, pitStopTime: 0.73 },
      { level: 6, speed: 9, cornering: 9, powerUnit: 8, qualifying: 11, pitStopTime: 0.69 },
      { level: 7, speed: 9, cornering: 10, powerUnit: 8, qualifying: 12, pitStopTime: 0.66 },
      { level: 8, speed: 10, cornering: 11, powerUnit: 9, qualifying: 13, pitStopTime: 0.62 },
      { level: 9, speed: 11, cornering: 12, powerUnit: 10, qualifying: 14, pitStopTime: 0.58 },
      { level: 10, speed: 12, cornering: 13, powerUnit: 11, qualifying: 15, pitStopTime: 0.55 },
      { level: 11, speed: 13, cornering: 14, powerUnit: 12, qualifying: 16, pitStopTime: 0.51 },
    ],
  },
  {
    id: 3,
    name: 'Velocity',
    rarity: 'common',
    series: 4,
    stats: [
      { level: 1, speed: 15, cornering: 5, powerUnit: 6, qualifying: 7, pitStopTime: 0.79 },
      { level: 2, speed: 17, cornering: 6, powerUnit: 7, qualifying: 8, pitStopTime: 0.77 },
      { level: 3, speed: 19, cornering: 6, powerUnit: 7, qualifying: 8, pitStopTime: 0.74 },
      { level: 4, speed: 21, cornering: 7, powerUnit: 8, qualifying: 9, pitStopTime: 0.72 },
      { level: 5, speed: 23, cornering: 7, powerUnit: 9, qualifying: 9, pitStopTime: 0.69 },
      { level: 6, speed: 25, cornering: 8, powerUnit: 9, qualifying: 10, pitStopTime: 0.67 },
      { level: 7, speed: 26, cornering: 9, powerUnit: 10, qualifying: 11, pitStopTime: 0.64 },
      { level: 8, speed: 28, cornering: 9, powerUnit: 10, qualifying: 11, pitStopTime: 0.62 },
      { level: 9, speed: 30, cornering: 10, powerUnit: 11, qualifying: 12, pitStopTime: 0.59 },
      { level: 10, speed: 32, cornering: 10, powerUnit: 12, qualifying: 12, pitStopTime: 0.57 },
      { level: 11, speed: 34, cornering: 11, powerUnit: 12, qualifying: 13, pitStopTime: 0.55 },
    ],
  },
  {
    id: 4,
    name: 'Axis 3000',
    rarity: 'rare',
    series: 6,
    stats: [
      { level: 1, speed: 7, cornering: 9, powerUnit: 16, qualifying: 8, pitStopTime: 0.55 },
      { level: 2, speed: 8, cornering: 10, powerUnit: 17, qualifying: 9, pitStopTime: 0.50 },
      { level: 3, speed: 8, cornering: 11, powerUnit: 19, qualifying: 10, pitStopTime: 0.45 },
      { level: 4, speed: 9, cornering: 12, powerUnit: 21, qualifying: 11, pitStopTime: 0.40 },
      { level: 5, speed: 10, cornering: 13, powerUnit: 22, qualifying: 12, pitStopTime: 0.35 },
      { level: 6, speed: 11, cornering: 13, powerUnit: 24, qualifying: 12, pitStopTime: 0.30 },
      { level: 7, speed: 11, cornering: 14, powerUnit: 26, qualifying: 13, pitStopTime: 0.26 },
      { level: 8, speed: 12, cornering: 15, powerUnit: 27, qualifying: 14, pitStopTime: 0.21 },
      { level: 9, speed: 13, cornering: 16, powerUnit: 29, qualifying: 15, pitStopTime: 0.16 },
    ],
  },
  {
    id: 5,
    name: 'DriveOS',
    rarity: 'rare',
    series: 7,
    stats: [
      { level: 1, speed: 10, cornering: 19, powerUnit: 9, qualifying: 22, pitStopTime: 0.76 },
      { level: 2, speed: 11, cornering: 21, powerUnit: 10, qualifying: 23, pitStopTime: 0.73 },
      { level: 3, speed: 12, cornering: 23, powerUnit: 11, qualifying: 25, pitStopTime: 0.70 },
      { level: 4, speed: 13, cornering: 25, powerUnit: 12, qualifying: 26, pitStopTime: 0.67 },
      { level: 5, speed: 14, cornering: 26, powerUnit: 13, qualifying: 27, pitStopTime: 0.64 },
      { level: 6, speed: 14, cornering: 28, powerUnit: 13, qualifying: 28, pitStopTime: 0.61 },
      { level: 7, speed: 15, cornering: 30, powerUnit: 14, qualifying: 30, pitStopTime: 0.58 },
      { level: 8, speed: 16, cornering: 32, powerUnit: 15, qualifying: 31, pitStopTime: 0.55 },
      { level: 9, speed: 17, cornering: 34, powerUnit: 16, qualifying: 32, pitStopTime: 0.52 },
    ],
  },
  {
    id: 6,
    name: 'Hotfix',
    rarity: 'rare',
    series: 10,
    stats: [
      { level: 1, speed: 12, cornering: 11, powerUnit: 33, qualifying: 13, pitStopTime: 0.60 },
      { level: 2, speed: 13, cornering: 11, powerUnit: 35, qualifying: 14, pitStopTime: 0.58 },
      { level: 3, speed: 14, cornering: 12, powerUnit: 38, qualifying: 15, pitStopTime: 0.55 },
      { level: 4, speed: 15, cornering: 13, powerUnit: 40, qualifying: 16, pitStopTime: 0.53 },
      { level: 5, speed: 16, cornering: 14, powerUnit: 43, qualifying: 17, pitStopTime: 0.50 },
      { level: 6, speed: 17, cornering: 15, powerUnit: 45, qualifying: 18, pitStopTime: 0.48 },
      { level: 7, speed: 17, cornering: 16, powerUnit: 47, qualifying: 19, pitStopTime: 0.45 },
      { level: 8, speed: 18, cornering: 17, powerUnit: 50, qualifying: 20, pitStopTime: 0.43 },
      { level: 9, speed: 19, cornering: 17, powerUnit: 52, qualifying: 21, pitStopTime: 0.41 },
    ],
  },
  {
    id: 7,
    name: 'Overdrive',
    rarity: 'epic',
    series: 12,
    stats: [
      { level: 1, speed: 16, cornering: 39, powerUnit: 15, qualifying: 14, pitStopTime: 0.52 },
      { level: 2, speed: 17, cornering: 42, powerUnit: 16, qualifying: 15, pitStopTime: 0.49 },
      { level: 3, speed: 18, cornering: 44, powerUnit: 16, qualifying: 15, pitStopTime: 0.46 },
      { level: 4, speed: 19, cornering: 47, powerUnit: 17, qualifying: 16, pitStopTime: 0.42 },
      { level: 5, speed: 20, cornering: 50, powerUnit: 18, qualifying: 16, pitStopTime: 0.39 },
      { level: 6, speed: 21, cornering: 53, powerUnit: 19, qualifying: 17, pitStopTime: 0.35 },
      { level: 7, speed: 22, cornering: 55, powerUnit: 19, qualifying: 17, pitStopTime: 0.32 },
      { level: 8, speed: 23, cornering: 58, powerUnit: 20, qualifying: 18, pitStopTime: 0.29 },
    ],
  },
] as Part[];

const createEngines = () => {
  const enginesToSave = preparePartData(ENGINES);

  console.log('Creating engines file >>');
  createFile('src/features/parts/constants/engines.json', enginesToSave);
};

export default createEngines;
