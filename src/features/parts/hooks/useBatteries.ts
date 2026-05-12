import batteries from '../constants/batteries.json';
import type { Part } from '../types';

const useBatteries = (): Part[] => batteries as Part[];

export default useBatteries;
