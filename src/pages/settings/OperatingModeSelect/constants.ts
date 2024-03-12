import t from '@root/src/shared/helpers/t';
import { OperatingMode } from '@root/src/shared/storages/OperatingModeStorage';

interface InfoMessageWithHighlight {
   message: string;
   highlight: string | string[];
}

export const infoMessagesWithHighlight: Record<OperatingMode, InfoMessageWithHighlight> = {
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
