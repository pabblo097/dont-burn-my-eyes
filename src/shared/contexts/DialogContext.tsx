import {
   createContext,
   ReactNode,
   useCallback,
   useMemo,
   useState
} from 'react';

interface DialogContextType {
   openDialog: (id: string) => void;
   closeDialog: (id: string) => void;
   getIsDialogOpen: (id: string) => boolean;
}

export const DialogContext = createContext<DialogContextType | null>(null);

export const DialogContextProvider = ({ children }: { children: ReactNode }) => {
   const [openedDialogsIds, setOpenedDialogsIds] = useState<string[]>([]);

   const openDialog = (id: string) =>
      setOpenedDialogsIds((prevValue) => (prevValue.includes(id) ? prevValue : [...prevValue, id]));

   const closeDialog = (id: string) =>
      setOpenedDialogsIds((prevValue) => prevValue.filter((dialogId) => dialogId !== id));

   const getIsDialogOpen = useCallback(
      (id: string) => openedDialogsIds.includes(id),
      [openedDialogsIds],
   );

   const value = useMemo(() => ({ openDialog, closeDialog, getIsDialogOpen }), [getIsDialogOpen]);

   return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
};
