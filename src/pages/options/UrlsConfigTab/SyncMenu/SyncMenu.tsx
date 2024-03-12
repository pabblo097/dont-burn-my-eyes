import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, MenuList, MenuItem, Box } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import { useRef, ChangeEvent } from 'react';
import { SyncMenuProps } from './constants';
import { exportUrls, importUrls } from '@root/src/shared/helpers/urlsSync';
import useDialog from '@root/src/shared/hooks/useDialog';
import { importSuccessDialogId, wrongDataDialogId } from '../../SettingsDialogs';

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
                        accept="application/JSON"
                        style={{ display: 'none' }}
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
