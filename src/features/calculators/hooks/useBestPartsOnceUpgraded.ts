import {
  useBatteries,
  useBrakes,
  useEngines,
  useFrontWings,
  useGearboxes,
  useRearWings,
  useSuspensions,
} from '@/features/parts';
import useBestPartOnceUpgraded from './useBestPartOnceUpgraded';
import useBestPartsStatsSum from './useBestPartsStatsSum';
import type { BestPartOnceUpgradedRequirements, BestParts } from '../types';
import type { PartWeights } from '../config/seriesWeights';

type BestPartsOnceUpgradedReturn = BestParts & BestPartOnceUpgradedRequirements;

const useBestPartsOnceUpgraded = (partWeights?: PartWeights): BestPartsOnceUpgradedReturn => {
  const brakes = useBrakes();
  const bestBrake = useBestPartOnceUpgraded(brakes, 'brakes', partWeights);

  const engines = useEngines();
  const bestEngine = useBestPartOnceUpgraded(engines, 'engines', partWeights);

  const frontWings = useFrontWings();
  const bestFrontWing = useBestPartOnceUpgraded(frontWings, 'frontWings', partWeights);

  const gearboxes = useGearboxes();
  const bestGearbox = useBestPartOnceUpgraded(gearboxes, 'gearboxes', partWeights);

  const rearWings = useRearWings();
  const bestRearWing = useBestPartOnceUpgraded(rearWings, 'rearWings', partWeights);

  const suspensions = useSuspensions();
  const bestSuspension = useBestPartOnceUpgraded(suspensions, 'suspensions', partWeights);

  const batteries = useBatteries();
  const bestBattery = useBestPartOnceUpgraded(batteries, 'batteries', partWeights);

  const sum = useBestPartsStatsSum({
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
    bestBattery,
  });

  const coinsNeeded =
    (bestBrake.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestEngine.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestFrontWing.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestGearbox.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestRearWing.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestSuspension.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestBattery.upgradeRequirements?.coinsNeeded ?? 0);

  return {
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
    bestBattery,
    sum,
    upgradeRequirements: {
      coinsNeeded,
    },
  };
};

export default useBestPartsOnceUpgraded;
