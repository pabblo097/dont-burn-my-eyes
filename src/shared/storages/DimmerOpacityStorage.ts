import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

interface DimmerOpacityStorageActions {
   init: () => Promise<void>;
}

type DimmerOpacityStorage = BaseStorage<number> & DimmerOpacityStorageActions;

const storage = createStorage<number>('dimmerOpacity', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const dimmerOpacityStorage: DimmerOpacityStorage = {
   ...storage,
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set(50);
      }
   },
};

export default dimmerOpacityStorage;
