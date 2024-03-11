import { Button, HStack, IconButton, Text, Tooltip, VStack } from '@chakra-ui/react';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';
import t from '@root/src/shared/helpers/t';
import { getButtonLabel } from './helpers';
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { UrlLevelOperation } from './constants';
import interleave from '@root/src/shared/helpers/interleave';

const AddUrlButton = () => {
   const [urlLevel, setUrlLevel] = useState(0);
   const operatingMode = useStorage(dimmerOperatingModeStorage);
   const urlsStorage = getUrlStorage(operatingMode);
   const urls = useStorage(urlsStorage);
   const { splitUrl, isWebsite } = useCurrentUrl();

   const selectedUrl = interleave(splitUrl.slice(0, urlLevel + 1), '/').join('');
   const addedSubUrls = urls.filter((url) => url.includes(splitUrl[0]) && url !== splitUrl[0]);
   const isUrlInList = urls.includes(selectedUrl);

   const handleUrlAddRemove = async () => {
      if (isUrlInList) {
         await urlsStorage.remove(selectedUrl);
      } else {
         await urlsStorage.add(selectedUrl);
      }

      setUrlLevel(0);
   };

   const handleUrlLevelChange = (urlLevelOperation: UrlLevelOperation) => {
      if (urlLevelOperation === 'up' && urlLevel < splitUrl.length - 1) {
         setUrlLevel((prevValue) => prevValue + 1);
      } else if (urlLevelOperation === 'down' && urlLevel > 0) {
         setUrlLevel((prevValue) => prevValue - 1);
      }
   };

   return (
      <VStack
         w={'full'}
         spacing={3}
      >
         <HStack w={'full'}>
            <Tooltip
               label={t('expandButton')}
               placement={'top'}
            >
               <IconButton
                  aria-label={t('expandButton')}
                  isDisabled={urlLevel <= 0 || !isWebsite}
                  icon={<ArrowBackIcon />}
                  onClick={() => handleUrlLevelChange('down')}
               />
            </Tooltip>

            <Button
               w={'full'}
               colorScheme={isUrlInList ? 'red' : 'blue'}
               justifyContent={'center'}
               isDisabled={!isWebsite}
               onClick={handleUrlAddRemove}
            >
               {getButtonLabel(isUrlInList, operatingMode)}
            </Button>

            <Tooltip
               label={t('narrowDownButton')}
               placement={'top'}
            >
               <IconButton
                  aria-label={t('narrowDownButton')}
                  isDisabled={urlLevel >= splitUrl.length - 1 || !isWebsite}
                  icon={<ArrowForwardIcon />}
                  onClick={() => handleUrlLevelChange('up')}
               />
            </Tooltip>
         </HStack>
         <Text
            w={'full'}
            bg={'gray.700'}
            borderRadius={'md'}
            py={2}
            px={3}
            fontSize={'md'}
            fontWeight={'medium'}
            textAlign={'center'}
            wordBreak={'break-all'}
         >
            {isWebsite ? selectedUrl : t('websiteNotSupported')}
         </Text>
         {addedSubUrls.length && (
            <VStack
               w={'full'}
               bg={'gray.700'}
               borderRadius={'md'}
               py={2}
               px={3}
               maxH={165}
               overflowY={'auto'}
            >
               <Text fontWeight={'medium'}>{t('addedSubUrls')}</Text>
               {addedSubUrls.map((subUrl) => (
                  <HStack
                     w={'full'}
                     key={subUrl}
                  >
                     <Tooltip
                        label={subUrl}
                        openDelay={800}
                        placement="top"
                     >
                        <Text
                           flexGrow={1}
                           overflow={'hidden'}
                           whiteSpace={'nowrap'}
                           textOverflow={'ellipsis'}
                        >
                           {subUrl}
                        </Text>
                     </Tooltip>
                     <IconButton
                        aria-label={t('removeSubUrlsButtonAriaLabel')}
                        icon={<DeleteIcon />}
                        size={'xs'}
                        variant={'ghost'}
                        colorScheme="red"
                        onClick={() => urlsStorage.remove(subUrl)}
                     />
                  </HStack>
               ))}
            </VStack>
         )}
      </VStack>
   );
};

export default AddUrlButton;
