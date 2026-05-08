import { useDrivers } from '@/features/drivers';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestDriver, BestDrivers } from '../types';
import type { DriverWeights } from '../config/seriesWeights';

const useBestDrivers = (driverWeights?: DriverWeights): BestDrivers => {
  const drivers = useDrivers();
  const collectedDrivers = useCollectedAssetsStore((data) => data.drivers);

  const calculateDriverScore = (stat: BestDriver['stat']) => {
    if (!driverWeights) {
      return stat.score.weighted;
    }

    return (
      stat.overtaking * driverWeights.overtaking +
      stat.defending * driverWeights.defending +
      stat.qualifying * driverWeights.qualifying +
      stat.raceStart * driverWeights.raceStart +
      stat.tireManagement * driverWeights.tireManagement
    );
  };

  const filteredDrivers = drivers.filter((driver) =>
    Object.keys(collectedDrivers)
      .map((key) => parseInt(key, 10))
      .includes(driver.id),
  );

  if (filteredDrivers.length < 2) {
    return { driver1: undefined, driver2: undefined, hasTwoDrivers: false };
  }

  const driversWithCurrentLevelScore: BestDriver[] = filteredDrivers.map((driver) => {
    const statFound = driver.stats.find((stat) => stat.level === collectedDrivers[driver.id].level)!;

    return {
      asset: driver,
      score: calculateDriverScore(statFound),
      stat: statFound,
    };
  });

  const [driver1, driver2] = driversWithCurrentLevelScore.sort((bestDriverA, bestDriverB) =>
    bestDriverA.score > bestDriverB.score ? -1 : 1,
  );

  return {
    driver1,
    driver2,
    hasTwoDrivers: true,
  };
};

export default useBestDrivers;
