import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';
import type { PartWeights } from '../config/seriesWeights';

const useBestPart = (partData: Part[], partKey: PartsCollectedKeys, partWeights?: PartWeights) => {
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

  const partsWithCurrentLevelScore: BestPart[] = filteredParts.map((part) => {
    const statFound = part.stats.find((stat) => stat.level === collectedParts[part.id].level)!;

    return {
      asset: part,
      score: calculatePartScore(statFound),
      stat: statFound,
    };
  });

  const [bestPart] = partsWithCurrentLevelScore.sort((partA, partB) => (partA.score > partB.score ? -1 : 1));

  return bestPart;
};

export default useBestPart;
