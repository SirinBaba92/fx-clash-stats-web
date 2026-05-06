import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';

const useBestPart = (partData: Part[], partKey: PartsCollectedKeys, focusStats?: string[]) => {
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
