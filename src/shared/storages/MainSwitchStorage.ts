import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type MainSwitchStorage = BaseStorage<boolean> & {
   toggle: () => Promise<void>;
   init: () => Promise<void>;
};

const storage = createStorage<boolean>('mainSwitch', {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const mainSwitchStorage: MainSwitchStorage = {
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

export default mainSwitchStorage;
