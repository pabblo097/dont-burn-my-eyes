import t from '@root/src/shared/helpers/t';

import ConfirmationDialog from '../ConfirmationDialog';
import { importSuccessDialogId, wrongDataDialogId } from './constants';

const Dialogs = () => (
   <>
      <ConfirmationDialog
         id={wrongDataDialogId}
         message={t('wrongDataDialogMessage')}
         title={t('wrongDataDialogTitle')}
      />

      <ConfirmationDialog
         id={importSuccessDialogId}
         message={t('importSuccessDialogMessage')}
         title={t('importSuccessDialogTitle')}
      />
   </>
);

export default Dialogs;
