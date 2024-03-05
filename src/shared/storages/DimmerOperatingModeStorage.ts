import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const dimmerOperatingModes = ['everywhereExcept', 'onlyOn'] as const;

export type DimmerOperatingMode = (typeof dimmerOperatingModes)[number];

export const isDimmerOperatingMode = (value: unknown): value is DimmerOperatingMode => {
   return typeof value === 'string' && dimmerOperatingModes.includes(value as DimmerOperatingMode);
};

type DimmerOperatingModeStorage = BaseStorage<DimmerOperatingMode>;

const dimmerOperatingModeStorage: DimmerOperatingModeStorage = {
   ...createStorage<DimmerOperatingMode>('dimmerOperatingMode', 'everywhereExcept', {
      storageType: StorageType.Local,
      liveUpdate: true,
   }),
};

export default dimmerOperatingModeStorage;
