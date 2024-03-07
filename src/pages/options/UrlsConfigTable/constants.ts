import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

export type TableMode = Exclude<DimmerOperatingMode, 'alwaysOn'>;

export interface UrlsConfigTableProps {
   tableMode: TableMode;
}
