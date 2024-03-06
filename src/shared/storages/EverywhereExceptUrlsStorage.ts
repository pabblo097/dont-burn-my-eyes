import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

interface EverywhereExceptUrlsStorageActions {
   add: (value: string) => Promise<void>;
   remove: (value: string) => Promise<void>;
   init: () => Promise<void>;
}

type EverywhereExceptUrlsStorage = BaseStorage<string[]> & EverywhereExceptUrlsStorageActions;

const storage = createStorage<string[]>('everywhereExceptUrls', {
   storageType: StorageType.Sync,
   liveUpdate: true,
});

const everywhereExceptUrlsStorage: EverywhereExceptUrlsStorage = {
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

export default everywhereExceptUrlsStorage;
