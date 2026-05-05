import type { BaseStat } from '@/types';

export interface AssetUpgradeRequirements {
  cardsNeeded: number;
  coinsNeeded: number;
  maxLevelAvailable: number;
  remainingCards: number;
}

const assetUpgradeRequirements = (assetStats: BaseStat[], level: number, cards: number): AssetUpgradeRequirements => {
  const nextStat = assetStats.find((stat) => stat.level === level + 1);

  if (!nextStat || cards < nextStat.upgrade.cards) {
    return {
      cardsNeeded: nextStat?.upgrade.cards ?? 0,
      coinsNeeded: nextStat?.upgrade.coins ?? 0,
      maxLevelAvailable: level,
      remainingCards: cards,
    };
  }

  return {
    cardsNeeded: nextStat.upgrade.cards,
    coinsNeeded: nextStat.upgrade.coins,
    maxLevelAvailable: level + 1,
    remainingCards: cards - nextStat.upgrade.cards,
  };
};

export default assetUpgradeRequirements;
