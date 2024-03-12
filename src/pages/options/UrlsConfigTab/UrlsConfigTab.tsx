import {
   Box,
   Link,
   IconButton,
   VStack,
   StackDivider,
   Flex,
   Input,
   InputGroup,
   InputLeftElement,
   Highlight,
   InputRightElement,
   HStack,
} from '@chakra-ui/react';
import { UrlsConfigTabProps } from './constants';
import useStorage from '@root/src/shared/hooks/useStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import { CloseIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import t from '@root/src/shared/helpers/t';
import UrlsConfigTabFallback from './UrlsConfigTabFallback';
import SyncMenu from './SyncMenu';

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
            <InputGroup>
               <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
               </InputLeftElement>
               <Input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder={t('searchUrl')}
               />
               <InputRightElement>
                  <IconButton
                     aria-label={t('cleanSearchUrlInputAriaLabel')}
                     icon={<CloseIcon />}
                     variant={'ghost'}
                     size={'xs'}
                     onClick={() => setSearchValue('')}
                  />
               </InputRightElement>
            </InputGroup>

            <SyncMenu
               tabMode={tabMode}
               urls={urls}
            />
         </HStack>
         <Box
            w={'full'}
            overflowY={'auto'}
            maxH={'500px'}
            py={2}
         >
            <VStack
               divider={<StackDivider />}
               w={'full'}
            >
               {filteredUrls.map((url) => (
                  <Flex
                     key={url}
                     justify={'space-between'}
                     align={'center'}
                     w={'full'}
                  >
                     <Link
                        href={`http://${url}`}
                        ml={2}
                        isExternal
                     >
                        <Highlight
                           query={searchValue}
                           styles={{ bg: 'blue.100' }}
                        >
                           {url}
                        </Highlight>
                     </Link>
                     <IconButton
                        colorScheme={'red'}
                        variant={'ghost'}
                        aria-label={t('removeUrlAriaLabel')}
                        icon={<DeleteIcon />}
                        size={'sm'}
                        mr={4}
                        onClick={() => urlsStorage.remove(url)}
                     />
                  </Flex>
               ))}
            </VStack>
         </Box>
      </VStack>
   );
};

export default UrlsConfigTab;
