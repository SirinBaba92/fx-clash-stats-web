import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart, BestPartOnceUpgradedRequirements } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';

type BestPartsOnceReturn = BestPart & BestPartOnceUpgradedRequirements;

const useBestPartOnceUpgraded = (
  partData: Part[],
  partKey: PartsCollectedKeys,
  focusStats?: string[],
): BestPartsOnceReturn => {
  const collectedParts = useCollectedAssetsStore((data) => data[partKey]);

  const isFocusStat = (statName: string) => focusStats?.includes(statName) ?? false;

  const calculatePartScore = (stat: BestPart['stat']) => {
    if (!focusStats?.length) {
      return stat.score.weighted;
    }

    const normalWeight = 1;
    const focusWeight = 2;

    return (
      stat.speed * (isFocusStat('speed') ? focusWeight : normalWeight) +
      stat.cornering * (isFocusStat('cornering') ? focusWeight : normalWeight) +
      stat.powerUnit * (isFocusStat('powerUnit') ? focusWeight : normalWeight) +
      stat.qualifying * (isFocusStat('qualifying') ? focusWeight : normalWeight)
    );
  };

  const filteredParts = partData.filter((part) =>
    Object.keys(collectedParts)
      .map((key) => parseInt(key, 10))
      .includes(part.id),
  );

  const partsDataForMaxLevelAvailable = filteredParts.map((part) => {
    const collectedPartData = collectedParts[part.id]!;

    const partUpgradeRequirements = assetUpgradeRequirements(
      part.stats,
      collectedPartData.level,
      collectedPartData.cards,
    );

    const maxStat = part.stats.find((stat) => partUpgradeRequirements.maxLevelAvailable === stat.level)!;

    return {
      maxStat,
      part,
      partUpgradeRequirements,
      score: calculatePartScore(maxStat),
    };
  });

  const [bestPart] = partsDataForMaxLevelAvailable.sort((partA, partB) =>
    partA.score > partB.score ? -1 : 1,
  );

  return {
    asset: bestPart.part,
    score: bestPart.score,
    stat: bestPart.maxStat,
    upgradeRequirements: bestPart.partUpgradeRequirements,
  };
};

export default useBestPartOnceUpgraded;
