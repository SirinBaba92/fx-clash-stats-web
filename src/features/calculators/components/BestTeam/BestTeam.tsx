import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';
import useBestParts from '../../hooks/useBestParts';
import useTeamScore from '../../hooks/useTeamScore';
import { getSeriesFocusStats } from '../../utils/getSeriesFocusStats';

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);

  // 👉 TEST: Serie auswählen (z.B. 2)
  const selectedSeries = 1;

  const focusStats = getSeriesFocusStats(selectedSeries);

  const bestDrivers = useBestDrivers(focusStats);
  const bestParts = useBestParts(focusStats);

  const score = useTeamScore(bestDrivers, bestParts, focusStats);

  return (
    <Container maxWidth='2xl'>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

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
