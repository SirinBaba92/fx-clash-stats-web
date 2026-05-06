import { useBrakes, useEngines, useFrontWings, useGearboxes, useRearWings, useSuspensions } from '@/features/parts';
import useBestPartOnceUpgraded from './useBestPartOnceUpgraded';
import useBestPartsStatsSum from './useBestPartsStatsSum';
import type { BestPartOnceUpgradedRequirements, BestParts } from '../types';

type BestPartsOnceUpgradedReturn = BestParts & BestPartOnceUpgradedRequirements;

const useBestPartsOnceUpgraded = (focusStats?: string[]): BestPartsOnceUpgradedReturn => {
  const brakes = useBrakes();
  const bestBrake = useBestPartOnceUpgraded(brakes, 'brakes', focusStats);

  const engines = useEngines();
  const bestEngine = useBestPartOnceUpgraded(engines, 'engines', focusStats);

  const frontWings = useFrontWings();
  const bestFrontWing = useBestPartOnceUpgraded(frontWings, 'frontWings', focusStats);

  const gearboxes = useGearboxes();
  const bestGearbox = useBestPartOnceUpgraded(gearboxes, 'gearboxes', focusStats);

  const rearWings = useRearWings();
  const bestRearWing = useBestPartOnceUpgraded(rearWings, 'rearWings', focusStats);

  const suspensions = useSuspensions();
  const bestSuspension = useBestPartOnceUpgraded(suspensions, 'suspensions', focusStats);

  const sum = useBestPartsStatsSum({
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
  });

  const coinsNeeded =
    (bestBrake.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestEngine.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestFrontWing.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestGearbox.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestRearWing.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestSuspension.upgradeRequirements?.coinsNeeded ?? 0);

  return {
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
    sum,
    upgradeRequirements: {
      coinsNeeded,
    },
  };
};

export default useBestPartsOnceUpgraded;
