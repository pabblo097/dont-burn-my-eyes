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
   HStack,
   Button,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   useDisclosure,
} from '@chakra-ui/react';
import { UrlsConfigTableProps } from './constants';
import useStorage from '@root/src/shared/hooks/useStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import {
   ChevronDownIcon,
   ChevronUpIcon,
   CloseIcon,
   DeleteIcon,
   ExternalLinkIcon,
   SearchIcon,
} from '@chakra-ui/icons';
import { useState, useRef, ChangeEvent } from 'react';
import travolta from '@root/src/assets/img/travolta.png';
import t from '@root/src/shared/helpers/t';
import { isStringArray, safeJsonParse, saveAsJsonFile, readFile } from './helpers';
import ConfirmationDialog from '../ConfirmationDialog';

const UrlsConfigTable = ({ tableMode }: UrlsConfigTableProps) => {
   const [searchValue, setSearchValue] = useState('');
   const urlsStorage = getUrlStorage(tableMode);
   const urls = useStorage(urlsStorage);
   const fileInputRef = useRef<HTMLInputElement>(null);
   const {
      isOpen: isWrongDataOpen,
      onOpen: onWrongDataOpen,
      onClose: onWrongDataClose,
   } = useDisclosure();
   const {
      isOpen: isUrlsImportedOpen,
      onOpen: onUrlsImportedOpen,
      onClose: onUrlsImportedClose,
   } = useDisclosure();

   const filteredUrls = urls.filter((url) => url.toLowerCase().includes(searchValue.toLowerCase()));

   const handleUrlsExport = () => {
      saveAsJsonFile(tableMode, urls);
   };

   const handleUrlsImport = async (event: ChangeEvent<HTMLInputElement>) => {
      const text = await readFile(event);
      const { error, result } = safeJsonParse(text);

      if (error || !isStringArray(result)) {
         onWrongDataOpen();
         return;
      }

      await urlsStorage.merge(result);

      onUrlsImportedOpen();
   };

   if (urls.length === 0) {
      return (
         <>
            <Center
               bg={'gray.700'}
               borderRadius={'md'}
               px={5}
               pb={6}
               pt={2}
            >
               <VStack spacing={3}>
                  <Image
                     boxSize={'200px'}
                     src={travolta}
                     alt={t('travoltaMemeAlt')}
                  />
                  <Heading textAlign={'center'}>{t('noUrlsToDisplay')}</Heading>
                  <Text fontSize={'md'}>{t('addUrlInPopup')}</Text>
                  <Button onClick={() => fileInputRef.current.click()}>
                     {t('syncMenuImport')}
                  </Button>
                  <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     onChange={handleUrlsImport}
                  />
               </VStack>
            </Center>
            <ConfirmationDialog
               isOpen={isWrongDataOpen}
               onClose={onWrongDataClose}
               title={t('wrongDataDialogTitle')}
               message={t('wrongDataDialogMessage')}
            />
         </>
      );
   }

   return (
      <>
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
               <Box>
                  <Menu placement="bottom-end">
                     {({ isOpen }) => (
                        <>
                           <MenuButton
                              as={Button}
                              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                           >
                              {t('syncMenuButton')}
                           </MenuButton>
                           <MenuList>
                              <MenuItem onClick={handleUrlsExport}>{t('syncMenuExport')}</MenuItem>
                              <MenuItem onClick={() => fileInputRef.current.click()}>
                                 {t('syncMenuImport')}
                              </MenuItem>
                              <input
                                 ref={fileInputRef}
                                 type="file"
                                 style={{ display: 'none' }}
                                 onChange={handleUrlsImport}
                              />
                           </MenuList>
                        </>
                     )}
                  </Menu>
               </Box>
            </HStack>
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
         <ConfirmationDialog
            isOpen={isWrongDataOpen}
            onClose={onWrongDataClose}
            title={t('wrongDataDialogTitle')}
            message={t('wrongDataDialogMessage')}
         />

         <ConfirmationDialog
            isOpen={isUrlsImportedOpen}
            onClose={onUrlsImportedClose}
            title={t('importSuccessDialogTitle')}
            message={t('importSuccessDialogMessage')}
         />
      </>
   );
};

export default UrlsConfigTable;
