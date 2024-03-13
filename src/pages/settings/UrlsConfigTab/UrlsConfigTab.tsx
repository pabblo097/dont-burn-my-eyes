import { HStack, VStack } from '@chakra-ui/react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import useStorage from '@root/src/shared/hooks/useStorage';
import { useState } from 'react';

import { UrlsConfigTabProps } from './constants';
import SearchInput from './SearchInput';
import SyncMenu from './SyncMenu';
import UrlsConfigTabFallback from './UrlsConfigTabFallback';
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
               onButtonClick={() => setSearchValue('')}
               onChange={(event) => setSearchValue(event.target.value)}
            />

            <SyncMenu
               tabMode={tabMode}
               urls={urls}
            />
         </HStack>

         <UrlsList
            searchValue={searchValue}
            tabMode={tabMode}
            urls={filteredUrls}
         />
      </VStack>
   );
};

export default UrlsConfigTab;
