import {
   Center,
   Heading,
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
   Image,
   Text,
} from '@chakra-ui/react';
import { UrlsConfigTableProps } from './constants';
import useStorage from '@root/src/shared/hooks/useStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import { CloseIcon, DeleteIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import travolta from '@root/src/assets/img/travolta.png';
import t from '@root/src/shared/helpers/t';

const UrlsConfigTable = ({ tableMode }: UrlsConfigTableProps) => {
   const [searchValue, setSearchValue] = useState('');
   const urlsStorage = getUrlStorage(tableMode);
   const urls = useStorage(urlsStorage);

   const filteredUrls = urls.filter((url) => url.toLowerCase().includes(searchValue.toLowerCase()));

   if (urls.length === 0) {
      return (
         <Center
            bg={'gray.700'}
            borderRadius={'md'}
            p={5}
         >
            <VStack>
               <Image
                  boxSize={'200px'}
                  src={travolta}
                  alt={t('travoltaMemeAlt')}
               />
               <Heading textAlign={'center'}>{t('noUrlsToDisplay')}</Heading>
               <Text fontSize={'md'}>{t('addUrlInPopup')}</Text>
            </VStack>
         </Center>
      );
   }

   return (
      <VStack w={'full'}>
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
         <Box
            w={'full'}
            overflowY={'auto'}
            maxH={'530px'}
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
                        <ExternalLinkIcon
                           mx={2}
                           mb={'2px'}
                        />
                     </Link>
                     <IconButton
                        colorScheme={'red'}
                        variant={'ghost'}
                        aria-label={t('removeUrlAriaLabel')}
                        icon={<DeleteIcon />}
                        size={'sm'}
                        mr={4}
                        onClick={async () => await urlsStorage.remove(url)}
                     />
                  </Flex>
               ))}
            </VStack>
         </Box>
      </VStack>
   );
};

export default UrlsConfigTable;
