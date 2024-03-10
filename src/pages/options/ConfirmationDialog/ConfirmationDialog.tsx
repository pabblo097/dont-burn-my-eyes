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

const ConfirmationDialog = ({ isOpen, onClose, title, message }: ConfirmationDialogProps) => {
   const cancelRef = useRef();

   return (
      <AlertDialog
         motionPreset="slideInBottom"
         leastDestructiveRef={cancelRef}
         onClose={onClose}
         isOpen={isOpen}
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
