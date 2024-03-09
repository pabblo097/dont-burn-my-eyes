import { blacklistStorage, whitelistStorage } from '../storages/UrlsStorage';
import { DimmerOperatingMode } from '../storages/DimmerOperatingModeStorage';

const getUrlStorage = (operatingMode: DimmerOperatingMode) => {
   switch (operatingMode) {
      case 'blacklist': {
         return blacklistStorage;
      }
      case 'whitelist': {
         return whitelistStorage;
      }
      case 'alwaysOn': {
         return null;
      }
   }
};

export default getUrlStorage;
