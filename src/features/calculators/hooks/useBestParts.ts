import { useBrakes, useEngines, useFrontWings, useGearboxes, useRearWings, useSuspensions } from '@/features/parts';
import useBestPart from './useBestPart';
import useBestPartsStatsSum from './useBestPartsStatsSum';
import type { BestParts } from '../types';

const useBestParts = (focusStats?: string[]): BestParts => {
  const brakes = useBrakes();
  const bestBrake = useBestPart(brakes, 'brakes', focusStats);

  const engines = useEngines();
  const bestEngine = useBestPart(engines, 'engines', focusStats);

  const frontWings = useFrontWings();
  const bestFrontWing = useBestPart(frontWings, 'frontWings', focusStats);

  const gearboxes = useGearboxes();
  const bestGearbox = useBestPart(gearboxes, 'gearboxes', focusStats);

  const rearWings = useRearWings();
  const bestRearWing = useBestPart(rearWings, 'rearWings', focusStats);

  const suspensions = useSuspensions();
  const bestSuspension = useBestPart(suspensions, 'suspensions', focusStats);

  const sum = useBestPartsStatsSum({
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
  });

  return { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension, sum };
};

export default useBestParts;
