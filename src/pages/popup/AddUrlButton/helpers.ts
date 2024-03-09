import t from '@root/src/shared/helpers/t';
import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

export const getButtonLabel = (isUrlInList: boolean, operatingMode: DimmerOperatingMode) => {
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
