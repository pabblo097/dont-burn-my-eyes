import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

interface OnlyOnUrlsStorageActions {
   add: (value: string) => Promise<void>;
   remove: (value: string) => Promise<void>;
   init: () => Promise<void>;
}

type OnlyOnUrlsStorage = BaseStorage<string[]> & OnlyOnUrlsStorageActions;

const storage = createStorage<string[]>('onlyOnUrls', {
   storageType: StorageType.Sync,
   liveUpdate: true,
});

const onlyOnUrlsStorage: OnlyOnUrlsStorage = {
   ...storage,
   add: async (value: string) => {
      await storage.set((currentState) => {
         return [...currentState, value];
      });
   },
   remove: async (value: string) => {
      await storage.set((currentState) => {
         return currentState.filter((url) => url !== value);
      });
   },
   init: async () => {
      if ((await storage.get()) === undefined) {
         await storage.set([]);
      }
   },
};

export default onlyOnUrlsStorage;
