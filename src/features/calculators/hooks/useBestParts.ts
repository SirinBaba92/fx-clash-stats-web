import { useBrakes, useEngines, useFrontWings, useGearboxes, useRearWings, useSuspensions } from '@/features/parts';
import useBestPart from './useBestPart';
import useBestPartsStatsSum from './useBestPartsStatsSum';
import type { BestParts } from '../types';
import type { PartWeights } from '../config/seriesWeights';

const useBestParts = (partWeights?: PartWeights): BestParts => {
  const brakes = useBrakes();
  const bestBrake = useBestPart(brakes, 'brakes', partWeights);

  const engines = useEngines();
  const bestEngine = useBestPart(engines, 'engines', partWeights);

  const frontWings = useFrontWings();
  const bestFrontWing = useBestPart(frontWings, 'frontWings', partWeights);

  const gearboxes = useGearboxes();
  const bestGearbox = useBestPart(gearboxes, 'gearboxes', partWeights);

  const rearWings = useRearWings();
  const bestRearWing = useBestPart(rearWings, 'rearWings', partWeights);

  const suspensions = useSuspensions();
  const bestSuspension = useBestPart(suspensions, 'suspensions', partWeights);

  const sum = useBestPartsStatsSum({
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
  });

  return {
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
    sum,
  };
};

export default useBestParts;
