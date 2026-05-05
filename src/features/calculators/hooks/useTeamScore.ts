import type { BestDrivers, BestParts } from '../types';
import type { PartStat } from '@/features/parts';

const useTeamScore = (driver: BestDrivers, parts: BestParts, focusStats?: string[]) => {
  const { driver1, driver2, hasTwoDrivers } = driver;
  const { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension } = parts;

  const isFocusStat = (statName: string) => focusStats?.includes(statName) ?? false;

  const calculateWeightedPartScore = (stat: PartStat) => {
    const normalWeight = 1;
    const focusWeight = 2;

    return (
      stat.cornering * (isFocusStat('cornering') ? focusWeight : normalWeight) +
      stat.powerUnit * (isFocusStat('powerUnit') ? focusWeight : normalWeight) +
      stat.qualifying * (isFocusStat('qualifying') ? focusWeight : normalWeight) +
      stat.speed * (isFocusStat('speed') ? focusWeight : normalWeight)
    );
  };

  const calculateWeightedDriverScore = (stat: typeof driver1.stat) => {
    const normalWeight = 1;
    const focusWeight = 2;

    return (
      stat.overtaking * (isFocusStat('overtaking') ? focusWeight : normalWeight) +
      stat.defending * (isFocusStat('defending') ? focusWeight : normalWeight) +
      stat.qualifying * (isFocusStat('qualifying') ? focusWeight : normalWeight) +
      stat.raceStart * (isFocusStat('raceStart') ? focusWeight : normalWeight) +
      stat.tireManagement * (isFocusStat('tireManagement') ? focusWeight : normalWeight)
    );
  };

  const pitStopTimeSum =
    bestBrake.stat.pitStopTime +
    bestEngine.stat.pitStopTime +
    bestFrontWing.stat.pitStopTime +
    bestGearbox.stat.pitStopTime +
    bestRearWing.stat.pitStopTime +
    bestSuspension.stat.pitStopTime;

  let teamScore =
    calculateWeightedPartScore(bestBrake.stat) +
    calculateWeightedPartScore(bestEngine.stat) +
    calculateWeightedPartScore(bestFrontWing.stat) +
    calculateWeightedPartScore(bestGearbox.stat) +
    calculateWeightedPartScore(bestRearWing.stat) +
    calculateWeightedPartScore(bestSuspension.stat);

  const a = -28.62;
  const b = 177.7;

  const pitStopTimeValue = a * pitStopTimeSum + b;

  teamScore += pitStopTimeValue;

  if (hasTwoDrivers) {
    teamScore += calculateWeightedDriverScore(driver1.stat);
    teamScore += calculateWeightedDriverScore(driver2.stat);
  }

  return teamScore.toFixed(0);
};

export default useTeamScore;
