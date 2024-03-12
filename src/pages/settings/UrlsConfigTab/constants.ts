import { OperatingMode } from '@root/src/shared/storages/OperatingModeStorage';

export type TabMode = Exclude<OperatingMode, 'alwaysOn'>;

export interface UrlsConfigTabProps {
   tabMode: TabMode;
}
