import {
   AlertDialog,
   AlertDialogBody,
   AlertDialogCloseButton,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogOverlay,
   Button,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useDialog from '@root/src/shared/hooks/useDialog';
import { useRef } from 'react';

import { ConfirmationDialogProps } from './constants';

const ConfirmationDialog = ({ id, title, message }: ConfirmationDialogProps) => {
   const { closeDialog, getIsDialogOpen } = useDialog();

   const cancelRef = useRef();

   const onClose = () => closeDialog(id);

   return (
      <AlertDialog
         isCentered
         id={id}
         isOpen={getIsDialogOpen(id)}
         leastDestructiveRef={cancelRef}
         motionPreset={'slideInBottom'}
         onClose={onClose}
      >
         <AlertDialogOverlay />

         <AlertDialogContent>
            <AlertDialogHeader>{title}</AlertDialogHeader>

            <AlertDialogCloseButton aria-label={t('closeDialogButtonAriaLabel')} />

            <AlertDialogBody>{message}</AlertDialogBody>

            <AlertDialogFooter>
               <Button
                  ref={cancelRef}
                  onClick={onClose}
               >
                  {t('confirmDialogButtonLabel')}
               </Button>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default ConfirmationDialog;
