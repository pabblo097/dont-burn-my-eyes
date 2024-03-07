import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

interface UrlsStorageActions {
   add: (value: string) => Promise<void>;
   remove: (value: string) => Promise<void>;
   init: () => Promise<void>;
}

const getUrlsStorageActions = (storage: BaseStorage<string[]>): UrlsStorageActions => ({
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
});

export type UrlsStorage = BaseStorage<string[]> & UrlsStorageActions;

const baseBlackListStorage = createStorage<string[]>('blackList', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const baseWhiteListStorage = createStorage<string[]>('whiteList', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

export const blackListStorage: UrlsStorage = {
   ...baseBlackListStorage,
   ...getUrlsStorageActions(baseBlackListStorage),
};

export const whiteListStorage: UrlsStorage = {
   ...baseWhiteListStorage,
   ...getUrlsStorageActions(baseWhiteListStorage),
};
