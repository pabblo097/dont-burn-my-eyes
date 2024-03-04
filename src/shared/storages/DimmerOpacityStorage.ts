import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type DimmerOpacityStorage = BaseStorage<number>;

const storage = createStorage<number>('dimmerOpacity', 0.5, {
   storageType: StorageType.Local,
   liveUpdate: true,
});

const dimmerOpacityStorage: DimmerOpacityStorage = {
   ...storage,
};

export default dimmerOpacityStorage;
