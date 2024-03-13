import { DeleteIcon } from '@chakra-ui/icons';
import { VStack, Text, HStack, IconButton, Tooltip } from '@chakra-ui/react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import t from '@root/src/shared/helpers/t';
import useCurrentUrl from '@root/src/shared/hooks/useCurrentUrl';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';

const SubUrlsSection = () => {
   const operatingMode = useStorage(operatingModeStorage);
   const urlsStorage = getUrlStorage(operatingMode);
   const urls = useStorage(urlsStorage);
   const { splitUrl } = useCurrentUrl();

   const addedSubUrls = urls.filter((url) => url.includes(splitUrl[0]) && url !== splitUrl[0]);

   if (addedSubUrls.length === 0) {
      return null;
   }

   return (
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
   );
};

export default SubUrlsSection;
