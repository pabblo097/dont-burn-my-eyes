import { useContext } from 'react';

import { DialogContext } from '../contexts/DialogContext';

const useDialog = () => {
   const context = useContext(DialogContext);

   if (!context) {
      throw new Error('useDialog must be used inside the DialogContextProvider');
   }

   return context;
};

export default useDialog;
