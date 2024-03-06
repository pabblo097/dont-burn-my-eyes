import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type DimmerStateStorage = BaseStorage<boolean> & {
   toggle: () => Promise<void>;
   init: () => Promise<void>;
};

const storage = createStorage<boolean>('isDimmerEnabled', {
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
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set(true);
      }
   },
};

export default dimmerStateStorage;
