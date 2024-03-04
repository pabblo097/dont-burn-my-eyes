import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type DimmerStateStorage = BaseStorage<boolean> & {
   toggle: () => Promise<void>;
};

const storage = createStorage<boolean>('isDimmerEnabled', true, {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const dimmerStateStorage: DimmerStateStorage = {
   ...storage,
   toggle: async () => {
      await storage.set((currentState) => {
         return !currentState;
      });
   },
};

export default dimmerStateStorage;
