import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';
import lodash from 'lodash-es';

interface UrlsStorageActions {
   add: (value: string) => Promise<void>;
   remove: (value: string) => Promise<void>;
   init: () => Promise<void>;
   merge: (values: string[]) => Promise<void>;
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
   merge: async (values: string[]) => {
      await storage.set((currentState) => {
         return lodash.union(currentState, values);
      });
   },
});

export type UrlsStorage = BaseStorage<string[]> & UrlsStorageActions;

const baseBlacklistStorage = createStorage<string[]>('blacklist', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const baseWhitelistStorage = createStorage<string[]>('whitelist', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

export const blacklistStorage: UrlsStorage = {
   ...baseBlacklistStorage,
   ...getUrlsStorageActions(baseBlacklistStorage),
};

export const whitelistStorage: UrlsStorage = {
   ...baseWhitelistStorage,
   ...getUrlsStorageActions(baseWhitelistStorage),
};
