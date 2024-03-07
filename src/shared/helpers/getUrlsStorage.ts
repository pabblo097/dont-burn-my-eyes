import { blackListStorage, whiteListStorage } from '../storages/UrlsStorage';
import { DimmerOperatingMode } from '../storages/DimmerOperatingModeStorage';

const getUrlStorage = (operatingMode: DimmerOperatingMode) => {
   switch (operatingMode) {
      case 'blackList': {
         return blackListStorage;
      }
      case 'whiteList': {
         return whiteListStorage;
      }
      case 'alwaysOn': {
         return null;
      }
   }
};

export default getUrlStorage;
