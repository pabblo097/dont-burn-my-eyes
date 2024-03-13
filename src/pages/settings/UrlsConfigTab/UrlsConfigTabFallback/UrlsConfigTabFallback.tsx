import {
   Button,
   Center,
   Heading,
   Image,
   Text,
   VStack
} from '@chakra-ui/react';
import travolta from '@root/src/assets/img/travolta.png';
import t from '@root/src/shared/helpers/t';
import { importUrls } from '@root/src/shared/helpers/urlsSync';
import useDialog from '@root/src/shared/hooks/useDialog';
import { ChangeEvent, useRef } from 'react';

import { importSuccessDialogId, wrongDataDialogId } from '../../Dialogs';
import { UrlsConfigTabFallbackProps } from './constants';

const UrlsConfigTabFallback = ({ tabMode }: UrlsConfigTabFallbackProps) => {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const { openDialog } = useDialog();

   const handleUrlsImport = async (event: ChangeEvent<HTMLInputElement>) => {
      const hasImportBeenSuccessful = await importUrls(event, tabMode);

      openDialog(hasImportBeenSuccessful ? importSuccessDialogId : wrongDataDialogId);
   };

   return (
      <Center
         bg={'gray.700'}
         borderRadius={'md'}
         pb={6}
         pt={2}
         px={5}
      >
         <VStack spacing={3}>
            <Image
               alt={t('travoltaMemeAlt')}
               boxSize={'200px'}
               src={travolta}
            />

            <Heading textAlign={'center'}>{t('noUrlsToDisplay')}</Heading>

            <Text fontSize={'md'}>{t('addUrlInPopup')}</Text>

            <Button onClick={() => fileInputRef.current.click()}>{t('syncMenuImport')}</Button>

            <input
               ref={fileInputRef}
               accept={'application/JSON'}
               style={{ display: 'none' }}
               type={'file'}
               onChange={handleUrlsImport}
            />
         </VStack>
      </Center>
   );
};

export default UrlsConfigTabFallback;
