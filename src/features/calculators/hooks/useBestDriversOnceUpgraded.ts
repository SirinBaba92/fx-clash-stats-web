import { useDrivers } from '@/features/drivers';
import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestDrivers, BestPartOnceUpgradedRequirements } from '../types';

type BestDriversOnceUpgradedReturn = BestDrivers & BestPartOnceUpgradedRequirements;

const useBestDriversOnceUpgraded = (focusStats?: string[]): BestDriversOnceUpgradedReturn => {
  const drivers = useDrivers();
  const collectedDrivers = useCollectedAssetsStore((data) => data.drivers);

  const isFocusStat = (statName: string) => focusStats?.includes(statName) ?? false;

  const calculateDriverScore = (stat: BestDrivers['driver1']['stat']) => {
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

  const driversDataForMaxLevelAvailable = filteredDrivers.map((driver) => {
    const collectedDriverData = collectedDrivers[driver.id]!;

    const driverUpgradeRequirements = assetUpgradeRequirements(
      driver.stats,
      collectedDriverData.level,
      collectedDriverData.cards,
    );

    const maxStat = driver.stats.find((stat) => driverUpgradeRequirements.maxLevelAvailable === stat.level)!;

    return {
      driver,
      driverUpgradeRequirements,
      maxStat,
      score: calculateDriverScore(maxStat),
    };
  });

  const [driver1, driver2] = driversDataForMaxLevelAvailable.sort((bestDriverA, bestDriverB) =>
    bestDriverA.score > bestDriverB.score ? -1 : 1,
  );

  return {
    driver1: {
      asset: driver1.driver,
      score: driver1.score,
      stat: driver1.maxStat,
    },
    driver2: {
      asset: driver2.driver,
      score: driver2.score,
      stat: driver2.maxStat,
    },
    hasTwoDrivers: true,
    upgradeRequirements: {
      coinsNeeded: driver1.driverUpgradeRequirements.coinsNeeded + driver2.driverUpgradeRequirements.coinsNeeded,
    },
  };
};

export default useBestDriversOnceUpgraded;
