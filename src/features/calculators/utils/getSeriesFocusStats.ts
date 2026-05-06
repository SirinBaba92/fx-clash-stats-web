import { TRACKS } from '../constants/tracks';
import type { TrackStat } from '../constants/tracks';

export const getSeriesFocusStats = (series: number): TrackStat[] => {
  const tracksInSeries = TRACKS.filter((track) => track.series === series);

  return tracksInSeries.flatMap((track) => track.focusStats);
};
