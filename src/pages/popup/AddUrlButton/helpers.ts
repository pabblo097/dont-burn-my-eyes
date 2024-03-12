import t from '@root/src/shared/helpers/t';
import { OperatingMode } from '@root/src/shared/storages/OperatingModeStorage';

export const getButtonLabel = (isUrlInList: boolean, operatingMode: OperatingMode) => {
   switch (operatingMode) {
      case 'blacklist': {
         return isUrlInList ? t('removeFromBlackList') : t('addToBlackList');
      }
      case 'whitelist': {
         return isUrlInList ? t('removeFromWhitelist') : t('addToWhitelist');
      }
      case 'alwaysOn': {
         return null;
      }
   }
};
