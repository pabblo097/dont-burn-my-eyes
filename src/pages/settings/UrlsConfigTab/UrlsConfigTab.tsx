import { VStack, HStack } from '@chakra-ui/react';
import { UrlsConfigTabProps } from './constants';
import useStorage from '@root/src/shared/hooks/useStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import { useState } from 'react';
import UrlsConfigTabFallback from './UrlsConfigTabFallback';
import SyncMenu from './SyncMenu';
import SearchInput from './SearchInput';
import UrlsList from './UrlsList';

const UrlsConfigTab = ({ tabMode }: UrlsConfigTabProps) => {
   const [searchValue, setSearchValue] = useState('');
   const urlsStorage = getUrlStorage(tabMode);
   const urls = useStorage(urlsStorage);

   const filteredUrls = urls.filter((url) => url.toLowerCase().includes(searchValue.toLowerCase()));

   if (urls.length === 0) {
      return <UrlsConfigTabFallback tabMode={tabMode} />;
   }

   return (
      <VStack w={'full'}>
         <HStack w={'full'}>
            <SearchInput
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               onButtonClick={() => setSearchValue('')}
            />

            <SyncMenu
               tabMode={tabMode}
               urls={urls}
            />
         </HStack>

         <UrlsList
            urls={filteredUrls}
            searchValue={searchValue}
            tabMode={tabMode}
         />
      </VStack>
   );
};

export default UrlsConfigTab;
