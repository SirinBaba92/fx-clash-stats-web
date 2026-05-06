import { useState } from 'react';
import { BestDrivers, BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { formatLongNumber } from '@/utils/formatting';
import { getSeriesFocusStats } from '../../utils/getSeriesFocusStats';
import { useTranslation } from 'react-i18next';
import TeamStatCard from '../TeamStats/TeamStatCard';
import useBestDriversOnceUpgraded from '../../hooks/useBestDriversOnceUpgraded';
import useBestPartsOnceUpgraded from '../../hooks/useBestPartsOnceUpgraded';
import useTeamScore from '../../hooks/useTeamScore';

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

const BestTeamOnceUpgraded = () => {
  const { t } = useTranslation(['calculators']);
  const [selectedSeries, setSelectedSeries] = useState(1);

  const focusStats = getSeriesFocusStats(selectedSeries);
  const uniqueFocusStats = [...new Set(focusStats)];

  const bestDriversOnceUpgraded = useBestDriversOnceUpgraded(focusStats);
  const bestPartsOnceUpgraded = useBestPartsOnceUpgraded(focusStats);

  const score = useTeamScore(bestDriversOnceUpgraded, bestPartsOnceUpgraded, focusStats);

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
