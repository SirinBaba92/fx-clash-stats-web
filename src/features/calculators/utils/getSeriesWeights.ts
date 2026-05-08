import { SERIES_WEIGHTS } from '../config/seriesWeights';
import type { SeriesWeights } from '../config/seriesWeights';

export const getSeriesWeights = (series: number): SeriesWeights => SERIES_WEIGHTS[series] ?? SERIES_WEIGHTS[1];
