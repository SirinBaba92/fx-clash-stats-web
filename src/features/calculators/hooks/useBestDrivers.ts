import { useDrivers } from '@/features/drivers';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestDriver, BestDrivers } from '../types';

const useBestDrivers = (focusStats?: string[]): BestDrivers => {
  const drivers = useDrivers();
  const collectedDrivers = useCollectedAssetsStore((data) => data.drivers);

  const isFocusStat = (statName: string) => focusStats?.includes(statName) ?? false;

  const calculateDriverScore = (stat: BestDriver['stat']) => {
    if (!focusStats?.length) {
      return stat.score.weighted;
    }

    const normalWeight = 1;
    const focusWeight = 2;

    return (
      stat.overtaking * (isFocusStat('overtaking') ? focusWeight : normalWeight) +
      stat.defending * (isFocusStat('defending') ? focusWeight : normalWeight) +
      stat.qualifying * (isFocusStat('qualifying') ? focusWeight : normalWeight) +
      stat.raceStart * (isFocusStat('raceStart') ? focusWeight : normalWeight) +
      stat.tireManagement * (isFocusStat('tireManagement') ? focusWeight : normalWeight)
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
