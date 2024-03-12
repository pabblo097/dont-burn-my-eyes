import t from '@root/src/shared/helpers/t';
import ConfirmationDialog from '../ConfirmationDialog';
import { wrongDataDialogId, importSuccessDialogId } from './constants';

const SettingsDialogs = () => {
   return (
      <>
         <ConfirmationDialog
            id={wrongDataDialogId}
            title={t('wrongDataDialogTitle')}
            message={t('wrongDataDialogMessage')}
         />

         <ConfirmationDialog
            id={importSuccessDialogId}
            title={t('importSuccessDialogTitle')}
            message={t('importSuccessDialogMessage')}
         />
      </>
   );
};

export default SettingsDialogs;
