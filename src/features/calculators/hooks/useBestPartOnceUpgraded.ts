import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart, BestPartOnceUpgradedRequirements } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';
import type { PartWeights } from '../config/seriesWeights';

type BestPartsOnceReturn = BestPart & BestPartOnceUpgradedRequirements;

const useBestPartOnceUpgraded = (
  partData: Part[],
  partKey: PartsCollectedKeys,
  partWeights?: PartWeights,
): BestPartsOnceReturn => {
  const collectedParts = useCollectedAssetsStore((data) => data[partKey]);

  const calculatePartScore = (stat: BestPart['stat']) => {
    if (!partWeights) {
      return stat.score.weighted;
    }

    return (
      stat.speed * partWeights.speed +
      stat.cornering * partWeights.cornering +
      stat.powerUnit * partWeights.powerUnit +
      stat.qualifying * partWeights.qualifying +
      (10 - stat.pitStopTime) * partWeights.pitStopTime
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
