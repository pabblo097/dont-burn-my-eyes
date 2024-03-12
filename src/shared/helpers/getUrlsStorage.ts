import { blacklistStorage, whitelistStorage } from '../storages/UrlsStorage';
import { OperatingMode } from '../storages/OperatingModeStorage';

const getUrlStorage = (operatingMode: OperatingMode) => {
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
