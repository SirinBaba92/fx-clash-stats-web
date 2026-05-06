import { useState } from 'react';
import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';
import useBestParts from '../../hooks/useBestParts';
import useTeamScore from '../../hooks/useTeamScore';
import { getSeriesFocusStats } from '../../utils/getSeriesFocusStats';

const SERIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const formatFocusStat = (stat: string) => {
  const labels: Record<string, string> = {
    cornering: 'Cornering',
    defending: 'Defending',
    overtaking: 'Overtaking',
    powerUnit: 'Power Unit',
    qualifying: 'Qualifying',
    raceStart: 'Race Start',
    speed: 'Speed',
    tireManagement: 'Tyre Management',
  };

  return labels[stat] ?? stat;
};

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);
  const [selectedSeries, setSelectedSeries] = useState(1);

  const focusStats = getSeriesFocusStats(selectedSeries);
  const uniqueFocusStats = [...new Set(focusStats)];

  const bestDrivers = useBestDrivers(focusStats);
  const bestParts = useBestParts(focusStats);

  const score = useTeamScore(bestDrivers, bestParts, focusStats);

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

        <div className='flex flex-wrap justify-center gap-2'>
          {uniqueFocusStats.map((stat) => (
            <span
              key={stat}
              className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
            >
              {formatFocusStat(stat)}
            </span>
          ))}
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
