import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

export type TabMode = Exclude<DimmerOperatingMode, 'alwaysOn'>;

export interface UrlsConfigTabProps {
   tabMode: TabMode;
}
