import { Alert, Heading6, Hr } from '@/components/ui';
import { BestAssetCard } from '@/components/Asset';
import { DriverStats } from '@/features/drivers';
import { useTranslation } from 'react-i18next';
import type { BestDrivers as BestDriversType } from '../../types';
import type { DriverWeights } from '../../config/seriesWeights';

interface Props {
  bestDrivers: BestDriversType;
  driverWeights?: DriverWeights;
}

const calculateDriverMetaScore = (
  stat: NonNullable<BestDriversType['driver1']>['stat'],
  driverWeights: DriverWeights,
) =>
  stat.overtaking * driverWeights.overtaking +
  stat.defending * driverWeights.defending +
  stat.qualifying * driverWeights.qualifying +
  stat.raceStart * driverWeights.raceStart +
  stat.tireManagement * driverWeights.tireManagement;

const BestDrivers = (props: Props) => {
  const { bestDrivers, driverWeights } = props;

  const { t } = useTranslation(['calculators']);

  if (!bestDrivers.hasTwoDrivers) {
    return <Alert severity='warning'>{t('calculators:error.twoDriverRequired')}</Alert>;
  }

  return (
    <div className='grid justify-items-center max-sm:grid-cols-1 grid-cols-2 gap-5 mb-5'>
      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver1')}</Heading6>

        <BestAssetCard asset={bestDrivers.driver1.asset}>
          <Hr />

          {driverWeights && (
            <div className='mb-3 text-xs text-gray-600 dark:text-gray-400'>
              Meta score: {calculateDriverMetaScore(bestDrivers.driver1.stat, driverWeights)}
            </div>
          )}

          <DriverStats stat={bestDrivers.driver1.stat} />
        </BestAssetCard>
      </div>

      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver2')}</Heading6>

        <BestAssetCard asset={bestDrivers.driver2.asset}>
          <Hr />

          {driverWeights && (
            <div className='mb-3 text-xs text-gray-600 dark:text-gray-400'>
              Meta score: {calculateDriverMetaScore(bestDrivers.driver2.stat, driverWeights)}
            </div>
          )}

          <DriverStats stat={bestDrivers.driver2.stat} />
        </BestAssetCard>
      </div>
    </div>
  );
};

export default BestDrivers;
