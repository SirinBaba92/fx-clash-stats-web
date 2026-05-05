export type TrackStat =
  | 'overtaking'
  | 'defending'
  | 'qualifying'
  | 'raceStart'
  | 'tireManagement'
  | 'speed'
  | 'cornering'
  | 'powerUnit';

export interface Track {
  name: string;
  series: number;
  focusStats: TrackStat[];
}

export const TRACKS: Track[] = [
  { series: 1, name: 'Sao Paolo', focusStats: ['overtaking', 'speed'] },
  { series: 1, name: 'Silverstone', focusStats: ['overtaking', 'speed'] },

  { series: 2, name: 'Melbourne', focusStats: ['raceStart', 'cornering'] },
  { series: 2, name: 'Hungaroring', focusStats: ['overtaking', 'cornering'] },
  { series: 2, name: 'Monaco', focusStats: ['defending', 'cornering'] },

  { series: 3, name: 'Barcelona', focusStats: ['tireManagement', 'speed'] },
  { series: 3, name: 'Sakhir', focusStats: ['tireManagement', 'powerUnit'] },
  { series: 3, name: 'Silverstone', focusStats: ['tireManagement', 'speed'] },
  { series: 3, name: 'Suzuka', focusStats: ['tireManagement', 'cornering'] },

  { series: 4, name: 'Miami', focusStats: ['overtaking', 'speed'] },
  { series: 4, name: 'Monza', focusStats: ['defending', 'speed'] },
  { series: 4, name: 'Jeddah', focusStats: ['defending', 'speed'] },
  { series: 4, name: 'Las Vegas', focusStats: ['overtaking', 'speed'] },

  { series: 5, name: 'Baku', focusStats: ['tireManagement', 'powerUnit'] },
  { series: 5, name: 'Mexico City', focusStats: ['tireManagement', 'powerUnit'] },
  { series: 5, name: 'Montreal', focusStats: ['raceStart', 'powerUnit'] },
  { series: 5, name: 'Spa', focusStats: ['overtaking', 'powerUnit'] },

  { series: 6, name: 'Monza', focusStats: ['defending', 'speed'] },
  { series: 6, name: 'Jeddah', focusStats: ['defending', 'speed'] },
  { series: 6, name: 'Shanghai', focusStats: ['defending', 'powerUnit'] },
  { series: 6, name: 'Zandvoort', focusStats: ['defending', 'cornering'] },

  { series: 7, name: 'Melbourne', focusStats: ['raceStart', 'cornering'] },
  { series: 7, name: 'Spielberg', focusStats: ['raceStart', 'cornering'] },
  { series: 7, name: 'Austin', focusStats: ['raceStart', 'cornering'] },
  { series: 7, name: 'Singapore', focusStats: ['raceStart', 'speed'] },

  { series: 8, name: 'Hungaroring', focusStats: ['overtaking', 'cornering'] },
  { series: 8, name: 'Abu Dhabi', focusStats: ['overtaking', 'speed'] },
  { series: 8, name: 'Sao Paolo', focusStats: ['overtaking', 'powerUnit'] },
  { series: 8, name: 'Miami', focusStats: ['overtaking', 'speed'] },

  { series: 9, name: 'Silverstone', focusStats: ['tireManagement', 'speed'] },
  { series: 9, name: 'Jeddah', focusStats: ['defending', 'speed'] },
  { series: 9, name: 'Barcelona', focusStats: ['tireManagement', 'speed'] },
  { series: 9, name: 'Monza', focusStats: ['defending', 'speed'] },

  { series: 10, name: 'Miami', focusStats: ['overtaking', 'speed'] },
  { series: 10, name: 'Las Vegas', focusStats: ['overtaking', 'speed'] },
  { series: 10, name: 'Singapore', focusStats: ['raceStart', 'speed'] },
  { series: 10, name: 'Barcelona', focusStats: ['tireManagement', 'speed'] },

  { series: 11, name: 'Spielberg', focusStats: ['raceStart', 'cornering'] },
  { series: 11, name: 'Melbourne', focusStats: ['raceStart', 'cornering'] },
  { series: 11, name: 'Monaco', focusStats: ['defending', 'cornering'] },
  { series: 11, name: 'Suzuka', focusStats: ['tireManagement', 'cornering'] },

  { series: 12, name: 'Shanghai', focusStats: ['defending', 'powerUnit'] },
  { series: 12, name: 'Bahrain', focusStats: ['tireManagement', 'powerUnit'] },
  { series: 12, name: 'Baku', focusStats: ['tireManagement', 'powerUnit'] },
  { series: 12, name: 'Mexico City', focusStats: ['tireManagement', 'powerUnit'] },
];
