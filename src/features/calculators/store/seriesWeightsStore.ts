import { SERIES_WEIGHTS } from '../config/seriesWeights';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { SeriesWeights } from '../config/seriesWeights';

interface SeriesWeightsStore {
  customSeriesWeights: Record<number, SeriesWeights>;
  getSeriesWeights: (series: number) => SeriesWeights;
  resetSeriesWeights: (series: number) => void;
  updateSeriesWeights: (series: number, weights: SeriesWeights) => void;
}

const useSeriesWeightsStore = create<SeriesWeightsStore>()(
  persist(
    (set, get) => ({
      customSeriesWeights: {},

      getSeriesWeights: (series) => get().customSeriesWeights[series] ?? SERIES_WEIGHTS[series] ?? SERIES_WEIGHTS[1],

      resetSeriesWeights: (series) =>
        set((state) => {
          const nextCustomSeriesWeights = { ...state.customSeriesWeights };

          delete nextCustomSeriesWeights[series];

          return { customSeriesWeights: nextCustomSeriesWeights };
        }),

      updateSeriesWeights: (series, weights) =>
        set((state) => ({
          customSeriesWeights: {
            ...state.customSeriesWeights,
            [series]: weights,
          },
        })),
    }),
    {
      name: 'fxcs-series-weights-store-storage',
    },
  ),
);

export default useSeriesWeightsStore;
