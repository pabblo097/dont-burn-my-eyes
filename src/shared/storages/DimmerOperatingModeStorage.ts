import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const dimmerOperatingModes = ['blackList', 'whiteList', 'alwaysOn'] as const;

export type DimmerOperatingMode = (typeof dimmerOperatingModes)[number];

export const isDimmerOperatingMode = (value: unknown): value is DimmerOperatingMode => {
   return typeof value === 'string' && dimmerOperatingModes.includes(value as DimmerOperatingMode);
};

interface DimmerOperatingModeStorageActions {
   init: () => Promise<void>;
}

type DimmerOperatingModeStorage = BaseStorage<DimmerOperatingMode> &
   DimmerOperatingModeStorageActions;

const storage = createStorage<DimmerOperatingMode>('dimmerOperatingMode', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const dimmerOperatingModeStorage: DimmerOperatingModeStorage = {
   ...storage,
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set('blackList');
      }
   },
};

export default dimmerOperatingModeStorage;
