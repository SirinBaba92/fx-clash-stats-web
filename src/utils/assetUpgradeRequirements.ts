import type { BaseStat } from '@/types';

export interface AssetUpgradeRequirements {
  cardsNeeded: number;
  coinsNeeded: number;
  maxLevelAvailable: number;
  remainingCards: number;
}

const assetUpgradeRequirements = (assetStats: BaseStat[], level: number, cards: number): AssetUpgradeRequirements => {
  const nextStat = assetStats.find((stat) => stat.level === level + 1);

  if (!nextStat) {
    return {
      cardsNeeded: 0,
      coinsNeeded: 0,
      maxLevelAvailable: level,
      remainingCards: cards,
    };
  }

  const cardsNeeded = nextStat.upgrade.cards;
  const coinsNeeded = nextStat.upgrade.coins;
  const canUpgrade = cards >= cardsNeeded;

  return {
    cardsNeeded,
    coinsNeeded,
    maxLevelAvailable: canUpgrade ? level + 1 : level,
    remainingCards: canUpgrade ? cards - cardsNeeded : cards,
  };
};

export default assetUpgradeRequirements;
