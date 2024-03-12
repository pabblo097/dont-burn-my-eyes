import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

interface IntensityStorageActions {
   init: () => Promise<void>;
}

type IntensityStorage = BaseStorage<number> & IntensityStorageActions;

const storage = createStorage<number>('intensity', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const intensityStorage: IntensityStorage = {
   ...storage,
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set(50);
      }
   },
};

export default intensityStorage;
