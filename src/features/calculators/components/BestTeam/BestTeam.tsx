import { useState } from 'react';
import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { SERIES_WEIGHTS } from '../../config/seriesWeights';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';
import useBestParts from '../../hooks/useBestParts';
import useSeriesWeightsStore from '../../store/seriesWeightsStore';
import useTeamScore from '../../hooks/useTeamScore';

import type { DriverWeights, PartWeights, SeriesWeights } from '../../config/seriesWeights';

const SERIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface WeightInputProps {
  label: string;
  recommendedValue: number;
  value: number;
  onChange: (value: number) => void;
}

const WeightInput = (props: WeightInputProps) => {
  const { label, onChange, recommendedValue, value } = props;

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <span className='w-32'>{label}:</span>

        <input
          className='w-16 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
          min={0}
          onChange={(event) => {
            const nextValue = Number(event.target.value);

            onChange(Number.isNaN(nextValue) ? 0 : nextValue);
          }}
          type='number'
          value={value}
        />
      </div>

      <span className='text-[11px] text-gray-500 dark:text-gray-400'>
        Recommend: {recommendedValue}
      </span>
    </div>
  );
};

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);
  const [selectedSeries, setSelectedSeries] = useState(1);

  const seriesWeights = useSeriesWeightsStore((state) => state.getSeriesWeights(selectedSeries));
  const updateSeriesWeights = useSeriesWeightsStore((state) => state.updateSeriesWeights);
  const resetSeriesWeights = useSeriesWeightsStore((state) => state.resetSeriesWeights);

  const recommendedSeriesWeights = SERIES_WEIGHTS[selectedSeries] ?? SERIES_WEIGHTS[1];

  const updateDriverWeight = (key: keyof DriverWeights, value: number) => {
    updateSeriesWeights(selectedSeries, {
      ...seriesWeights,
      drivers: {
        ...seriesWeights.drivers,
        [key]: value,
      },
    });
  };

  const updatePartWeight = (key: keyof PartWeights, value: number) => {
    updateSeriesWeights(selectedSeries, {
      ...seriesWeights,
      parts: {
        ...seriesWeights.parts,
        [key]: value,
      },
    });
  };

  const bestDrivers = useBestDrivers(seriesWeights.drivers);
  const bestParts = useBestParts(seriesWeights.parts);

  const score = useTeamScore(bestDrivers, bestParts);

  return (
    <Container maxWidth='2xl'>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

      <div className='flex flex-col items-center gap-3 w-full mb-5'>
        <select
          className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white'
          onChange={(event) => setSelectedSeries(Number(event.target.value))}
          value={selectedSeries}
        >
          {SERIES.map((series) => (
            <option
              key={series}
              value={series}
            >
              Serie {series}
            </option>
          ))}
        </select>

        <button
          className='text-white bg-gray-700 hover:bg-gray-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700'
          onClick={() => resetSeriesWeights(selectedSeries)}
          type='button'
        >
          Reset serie weights
        </button>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-gray-700 dark:text-gray-300'>
          <div className='flex flex-col gap-3'>
            <p className='font-semibold mb-1'>Driver weights</p>

            <WeightInput
              label='Overtaking'
              recommendedValue={recommendedSeriesWeights.drivers.overtaking}
              value={seriesWeights.drivers.overtaking}
              onChange={(value) => updateDriverWeight('overtaking', value)}
            />

            <WeightInput
              label='Defending'
              recommendedValue={recommendedSeriesWeights.drivers.defending}
              value={seriesWeights.drivers.defending}
              onChange={(value) => updateDriverWeight('defending', value)}
            />

            <WeightInput
              label='Qualifying'
              recommendedValue={recommendedSeriesWeights.drivers.qualifying}
              value={seriesWeights.drivers.qualifying}
              onChange={(value) => updateDriverWeight('qualifying', value)}
            />

            <WeightInput
              label='Race Start'
              recommendedValue={recommendedSeriesWeights.drivers.raceStart}
              value={seriesWeights.drivers.raceStart}
              onChange={(value) => updateDriverWeight('raceStart', value)}
            />

            <WeightInput
              label='Tyre Management'
              recommendedValue={recommendedSeriesWeights.drivers.tireManagement}
              value={seriesWeights.drivers.tireManagement}
              onChange={(value) => updateDriverWeight('tireManagement', value)}
            />
          </div>

          <div className='flex flex-col gap-3'>
            <p className='font-semibold mb-1'>Part weights</p>

            <WeightInput
              label='Speed'
              recommendedValue={recommendedSeriesWeights.parts.speed}
              value={seriesWeights.parts.speed}
              onChange={(value) => updatePartWeight('speed', value)}
            />

            <WeightInput
              label='Power Unit'
              recommendedValue={recommendedSeriesWeights.parts.powerUnit}
              value={seriesWeights.parts.powerUnit}
              onChange={(value) => updatePartWeight('powerUnit', value)}
            />

            <WeightInput
              label='Cornering'
              recommendedValue={recommendedSeriesWeights.parts.cornering}
              value={seriesWeights.parts.cornering}
              onChange={(value) => updatePartWeight('cornering', value)}
            />

            <WeightInput
              label='Qualifying'
              recommendedValue={recommendedSeriesWeights.parts.qualifying}
              value={seriesWeights.parts.qualifying}
              onChange={(value) => updatePartWeight('qualifying', value)}
            />

            <WeightInput
              label='Pit Stop Time'
              recommendedValue={recommendedSeriesWeights.parts.pitStopTime}
              value={seriesWeights.parts.pitStopTime}
              onChange={(value) => updatePartWeight('pitStopTime', value)}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center w-full mb-5'>
        <TeamScore score={score} />
      </div>

      <BestDrivers bestDrivers={bestDrivers} />

      <TeamPartsStats bestParts={bestParts} />

      <BestParts bestParts={bestParts} />
    </Container>
  );
};

export default BestTeam;
