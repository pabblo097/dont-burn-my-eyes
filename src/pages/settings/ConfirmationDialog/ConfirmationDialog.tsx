import {
   AlertDialog,
   AlertDialogOverlay,
   AlertDialogContent,
   AlertDialogHeader,
   AlertDialogBody,
   AlertDialogFooter,
   Button,
   AlertDialogCloseButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { ConfirmationDialogProps } from './constants';
import t from '@root/src/shared/helpers/t';
import useDialog from '@root/src/shared/hooks/useDialog';

const ConfirmationDialog = ({ id, title, message }: ConfirmationDialogProps) => {
   const { closeDialog, getIsDialogOpen } = useDialog();

   const cancelRef = useRef();

   const onClose = () => closeDialog(id);

   return (
      <AlertDialog
         id={id}
         motionPreset="slideInBottom"
         leastDestructiveRef={cancelRef}
         onClose={onClose}
         isOpen={getIsDialogOpen(id)}
         isCentered
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
