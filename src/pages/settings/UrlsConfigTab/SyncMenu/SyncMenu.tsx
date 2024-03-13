import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
   Box,
   Button,
   Menu,
   MenuButton,
   MenuItem,
   MenuList
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import { exportUrls, importUrls } from '@root/src/shared/helpers/urlsSync';
import useDialog from '@root/src/shared/hooks/useDialog';
import { ChangeEvent, useRef } from 'react';

import { importSuccessDialogId, wrongDataDialogId } from '../../Dialogs';
import { SyncMenuProps } from './constants';

const SyncMenu = ({ tabMode, urls }: SyncMenuProps) => {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const { openDialog } = useDialog();

   const handleUrlsExport = () => {
      exportUrls(tabMode, urls);
   };

   const handleUrlsImport = async (event: ChangeEvent<HTMLInputElement>) => {
      const hasImportBeenSuccessful = await importUrls(event, tabMode);

      openDialog(hasImportBeenSuccessful ? importSuccessDialogId : wrongDataDialogId);
   };

   return (
      <Box>
         <Menu placement={'bottom-end'}>
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
                        accept={'application/JSON'}
                        style={{ display: 'none' }}
                        type={'file'}
                        onChange={handleUrlsImport}
                     />
                  </MenuList>
               </>
            )}
         </Menu>
      </Box>
   );
};

export default SyncMenu;
