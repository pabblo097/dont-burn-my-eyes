import { Button, HStack, IconButton, Text, Tooltip, VStack } from '@chakra-ui/react';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';
import t from '@root/src/shared/helpers/t';
import { getButtonLabel } from './helpers';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { UrlLevelOperation } from './constants';
import interleave from '@root/src/shared/helpers/interleave';
import SubUrlsSection from './SubUrlsSection';

const AddUrlSection = () => {
   const [urlLevel, setUrlLevel] = useState(0);
   const operatingMode = useStorage(operatingModeStorage);
   const urlsStorage = getUrlStorage(operatingMode);
   const urls = useStorage(urlsStorage);
   const { splitUrl, isWebsite } = useCurrentUrl();

   const selectedUrl = interleave(splitUrl.slice(0, urlLevel + 1), '/').join('');
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

         <SubUrlsSection />
      </VStack>
   );
};

export default AddUrlSection;
