import { Button, Text, VStack } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import { useMemo } from 'react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';
import t from '@root/src/shared/helpers/t';
import { getButtonLabel } from './helpers';

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
            {isWebsite ? currentUrl : t('websiteNotSupported')}
         </Text>
         <Button
            w={'full'}
            colorScheme={isUrlInList ? 'red' : 'blue'}
            justifyContent={'space-between'}
            rightIcon={isUrlInList ? <DeleteIcon /> : <AddIcon />}
            isDisabled={!isWebsite}
            px={5}
            onClick={async () => await handleOnClick()}
         >
            {getButtonLabel(isUrlInList, operatingMode)}
         </Button>
      </VStack>
   );
};

export default AddUrlButton;
