import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';

const SettingsMainSwitch = () => {
   const mainSwitchValue = useStorage(mainSwitchStorage);

   return (
      <FormControl
         display="flex"
         alignItems="center"
      >
         <FormLabel
            htmlFor="dimmer-switch"
            mb="0"
         >
            {t('enableScreenDimmer')}
         </FormLabel>
         <Switch
            id="dimmer-switch"
            isChecked={mainSwitchValue}
            onChange={mainSwitchStorage.toggle}
         />
      </FormControl>
   );
};

export default SettingsMainSwitch;
