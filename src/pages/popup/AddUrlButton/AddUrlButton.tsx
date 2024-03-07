import { Button, Text, VStack } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import { useMemo } from 'react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';

const AddUrlButton = () => {
   const operatingMode = useStorage(dimmerOperatingModeStorage);
   const urlsStorage = getUrlStorage(operatingMode);
   const urls = useStorage(urlsStorage);
   const { currentUrl, isWebsite } = useCurrentUrl();

   const isUrlInList = useMemo(() => urls.includes(currentUrl), [urls, currentUrl]);

   const handleOnClick = async () => {
      if (isUrlInList) {
         await urlsStorage.remove(currentUrl);
      } else {
         await urlsStorage.add(currentUrl);
      }
   };

   return (
      <VStack w={'full'}>
         <Text
            fontSize={'md'}
            fontWeight={'medium'}
         >
            {isWebsite ? currentUrl : 'Page in not a website.'}
         </Text>
         <Button
            w={'full'}
            colorScheme={isUrlInList ? 'red' : 'blue'}
            justifyContent={'space-between'}
            rightIcon={isUrlInList ? <CloseIcon /> : <AddIcon />}
            isDisabled={!isWebsite}
            px={5}
            onClick={async () => await handleOnClick()}
         >
            {`${isUrlInList ? 'Remove from' : 'Add to'} ${operatingMode === 'blackList' ? 'Black list' : 'White list'}`}
         </Button>
      </VStack>
   );
};

export default AddUrlButton;
