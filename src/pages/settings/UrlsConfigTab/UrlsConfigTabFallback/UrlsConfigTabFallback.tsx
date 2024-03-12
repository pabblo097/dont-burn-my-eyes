import { Center, VStack, Heading, Button, Image, Text } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import travolta from '@root/src/assets/img/travolta.png';
import { useRef, ChangeEvent } from 'react';
import { importUrls } from '@root/src/shared/helpers/urlsSync';
import { UrlsConfigTabFallbackProps } from './constants';
import useDialog from '@root/src/shared/hooks/useDialog';
import { importSuccessDialogId, wrongDataDialogId } from '../../SettingsDialogs';

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
            <Button onClick={() => fileInputRef.current.click()}>{t('syncMenuImport')}</Button>
            <input
               ref={fileInputRef}
               type="file"
               accept="application/JSON"
               style={{ display: 'none' }}
               onChange={handleUrlsImport}
            />
         </VStack>
      </Center>
   );
};

export default UrlsConfigTabFallback;
