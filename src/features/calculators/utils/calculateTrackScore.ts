import type { TrackStat } from '../constants/tracks';

type Stats = Partial<Record<TrackStat, number>>;

export const calculateTrackScore = (stats: Stats, focusStats: TrackStat[]): number => {
  const normalWeight = 1;
  const focusWeight = 2;

  return Object.entries(stats).reduce((total, [statName, value]) => {
    if (typeof value !== 'number') {
      return total;
    }

    const weight = focusStats.includes(statName as TrackStat) ? focusWeight : normalWeight;

    return total + value * weight;
  }, 0);
};
