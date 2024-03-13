import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
   Button,
   HStack,
   IconButton,
   Text,
   Tooltip,
   VStack
} from '@chakra-ui/react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import interleave from '@root/src/shared/helpers/interleave';
import t from '@root/src/shared/helpers/t';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import { useState } from 'react';

import { UrlLevelOperation } from './constants';
import { getButtonLabel } from './helpers';
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
         spacing={3}
         w={'full'}
      >
         <HStack w={'full'}>
            <Tooltip
               label={t('expandButton')}
               placement={'top'}
            >
               <IconButton
                  aria-label={t('expandButton')}
                  icon={<ArrowBackIcon />}
                  isDisabled={urlLevel <= 0 || !isWebsite}
                  onClick={() => handleUrlLevelChange('down')}
               />
            </Tooltip>

            <Button
               colorScheme={isUrlInList ? 'red' : 'blue'}
               isDisabled={!isWebsite}
               justifyContent={'center'}
               w={'full'}
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
                  icon={<ArrowForwardIcon />}
                  isDisabled={urlLevel >= splitUrl.length - 1 || !isWebsite}
                  onClick={() => handleUrlLevelChange('up')}
               />
            </Tooltip>
         </HStack>

         <Text
            bg={'gray.700'}
            borderRadius={'md'}
            fontSize={'md'}
            fontWeight={'medium'}
            px={3}
            py={2}
            textAlign={'center'}
            w={'full'}
            wordBreak={'break-all'}
         >
            {isWebsite ? selectedUrl : t('websiteNotSupported')}
         </Text>

         <SubUrlsSection />
      </VStack>
   );
};

export default AddUrlSection;
