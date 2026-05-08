import { useState } from 'react';
import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { getSeriesWeights } from '../../utils/getSeriesWeights';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';
import useBestParts from '../../hooks/useBestParts';
import useTeamScore from '../../hooks/useTeamScore';

const SERIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);
  const [selectedSeries, setSelectedSeries] = useState(1);

  const seriesWeights = getSeriesWeights(selectedSeries);

  const bestDrivers = useBestDrivers(seriesWeights.drivers);
  const bestParts = useBestParts(seriesWeights.parts);

  const score = useTeamScore(bestDrivers, bestParts);

  return (
    <Container maxWidth='2xl'>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

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
