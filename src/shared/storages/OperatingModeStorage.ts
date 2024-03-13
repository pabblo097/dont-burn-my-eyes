import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

const operatingModes = ['blacklist', 'whitelist', 'alwaysOn'] as const;

export type OperatingMode = (typeof operatingModes)[number];

export const isOperatingMode = (value: unknown): value is OperatingMode =>
   typeof value === 'string' && operatingModes.includes(value as OperatingMode);

interface OperatingModeStorageActions {
   init: () => Promise<void>;
}

type OperatingModeStorage = BaseStorage<OperatingMode> & OperatingModeStorageActions;

const storage = createStorage<OperatingMode>('operatingMode', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const operatingModeStorage: OperatingModeStorage = {
   ...storage,
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set('blacklist');
      }
   },
};

export default operatingModeStorage;
