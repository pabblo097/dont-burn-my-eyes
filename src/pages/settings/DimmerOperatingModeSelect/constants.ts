import t from '@root/src/shared/helpers/t';
import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

interface InfoMessageWithHighlight {
   message: string;
   highlight: string | string[];
}

export const infoMessagesWithHighlight: Record<DimmerOperatingMode, InfoMessageWithHighlight> = {
   blacklist: {
      message: t('blacklistMessage'),
      highlight: [t('blacklistMessageHighlight1'), t('blacklistMessageHighlight2')],
   },
   whitelist: {
      message: t('whitelistMessage'),
      highlight: [t('whitelistMessageHighlight1'), t('whitelistMessageHighlight2')],
   },
   alwaysOn: {
      message: t('alwaysOnMessage'),
      highlight: t('alwaysOnMessageHighlight'),
   },
};
