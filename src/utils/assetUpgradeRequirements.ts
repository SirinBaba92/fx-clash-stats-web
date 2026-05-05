import type { BaseStat } from '@/types';

export interface AssetUpgradeRequirements {
  cardsNeeded: number;
  coinsNeeded: number;
  maxLevelAvailable: number;
  remainingCards: number;
}

const assetUpgradeRequirements = (
  assetStats: BaseStat[],
  level: number,
  cards: number,
): AssetUpgradeRequirements => {
  const nextUpgrade = assetStats.find((stat) => stat.level === level + 1)?.upgrade;

  if (!nextUpgrade) {
    return {
      cardsNeeded: 0,
      coinsNeeded: 0,
      maxLevelAvailable: level,
      remainingCards: cards,
    };
  }

  return {
    cardsNeeded: nextUpgrade.cards,
    coinsNeeded: nextUpgrade.coins,
    maxLevelAvailable: level + 1,
    remainingCards: cards - nextUpgrade.cards,
  };
};

export default assetUpgradeRequirements;
