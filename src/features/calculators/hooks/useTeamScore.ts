import type { BestDrivers, BestParts } from '../types';

const useTeamScore = (driver: BestDrivers, parts: BestParts) => {
  const { driver1, driver2, hasTwoDrivers } = driver;
  const { sum } = parts;

  let teamScore = sum.speed + sum.powerUnit + sum.cornering + sum.qualifying;

  const pitStopTimeValue = 207.7 - 28.62 * sum.pitStopTime;

  teamScore += pitStopTimeValue;

  if (hasTwoDrivers && driver1 && driver2) {
    teamScore += driver1.stat.statsSum;
    teamScore += driver2.stat.statsSum;
  }

  return teamScore.toFixed(0);
};

export default useTeamScore;
