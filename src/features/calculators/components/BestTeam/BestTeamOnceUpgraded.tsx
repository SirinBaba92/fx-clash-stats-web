import { useState } from 'react';
import { BestDrivers, BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { formatLongNumber } from '@/utils/formatting';
import { getSeriesWeights } from '../../utils/getSeriesWeights';
import { useTranslation } from 'react-i18next';
import TeamStatCard from '../TeamStats/TeamStatCard';
import useBestDriversOnceUpgraded from '../../hooks/useBestDriversOnceUpgraded';
import useBestPartsOnceUpgraded from '../../hooks/useBestPartsOnceUpgraded';
import useTeamScore from '../../hooks/useTeamScore';

const SERIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BestTeamOnceUpgraded = () => {
  const { t } = useTranslation(['calculators']);
  const [selectedSeries, setSelectedSeries] = useState(1);

  const seriesWeights = getSeriesWeights(selectedSeries);

  const bestDriversOnceUpgraded = useBestDriversOnceUpgraded(seriesWeights.drivers);
  const bestPartsOnceUpgraded = useBestPartsOnceUpgraded(seriesWeights.parts);

  const score = useTeamScore(bestDriversOnceUpgraded, bestPartsOnceUpgraded);

  const coinsNeeded =
    (bestDriversOnceUpgraded.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestPartsOnceUpgraded.upgradeRequirements?.coinsNeeded ?? 0);

  return (
    <>
      <Heading3>{t('calculators:bestTeamOnceUpgraded')}</Heading3>

      <div className='flex flex-col items-center gap-3 w-full mb-5'>
        <select
          className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white'
          value={selectedSeries}
          onChange={(event) => setSelectedSeries(Number(event.target.value))}
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

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300'>
          <div>
            <p className='font-semibold mb-1'>Driver weights</p>
            <p>Overtaking: {seriesWeights.drivers.overtaking}</p>
            <p>Defending: {seriesWeights.drivers.defending}</p>
            <p>Qualifying: {seriesWeights.drivers.qualifying}</p>
            <p>Race Start: {seriesWeights.drivers.raceStart}</p>
            <p>Tyre Management: {seriesWeights.drivers.tireManagement}</p>
          </div>

          <div>
            <p className='font-semibold mb-1'>Part weights</p>
            <p>Speed: {seriesWeights.parts.speed}</p>
            <p>Power Unit: {seriesWeights.parts.powerUnit}</p>
            <p>Cornering: {seriesWeights.parts.cornering}</p>
            <p>Qualifying: {seriesWeights.parts.qualifying}</p>
            <p>Pit Stop Time: {seriesWeights.parts.pitStopTime}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center w-full mb-5 gap-5'>
        <TeamScore score={score} />
        <TeamStatCard title={t('calculators:coinsNeeded')}>{formatLongNumber(coinsNeeded)}</TeamStatCard>
      </div>

      <BestDrivers bestDrivers={bestDriversOnceUpgraded} />

      <TeamPartsStats bestParts={bestPartsOnceUpgraded} />

      <BestParts bestParts={bestPartsOnceUpgraded} />
    </>
  );
};

export default BestTeamOnceUpgraded;
