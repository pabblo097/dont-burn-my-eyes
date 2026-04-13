import { HStack, VStack } from '@chakra-ui/react';
import useStorage from '@root/src/shared/hooks/useStorage';
import urlsStorage from '@root/src/shared/storages/UrlsStorage';
import { useState } from 'react';

import SearchInput from './SearchInput';
import SyncMenu from './SyncMenu';
import UrlsConfigTabFallback from './UrlsConfigTabFallback';
import UrlsList from './UrlsList';

const UrlsConfigTab = () => {
   const [searchValue, setSearchValue] = useState('');
   const urls = useStorage(urlsStorage);

   const filteredUrls = urls.filter((url) => url.toLowerCase().includes(searchValue.toLowerCase()));

   if (urls.length === 0) {
      return <UrlsConfigTabFallback />;
   }

   return (
      <VStack w={'full'}>
         <HStack w={'full'}>
            <SearchInput
               value={searchValue}
               onButtonClick={() => setSearchValue('')}
               onChange={(event) => setSearchValue(event.target.value)}
            />

            <SyncMenu urls={urls} />
         </HStack>

         <UrlsList
            searchValue={searchValue}
            urls={filteredUrls}
         />
      </VStack>
   );
};

export default UrlsConfigTab;
