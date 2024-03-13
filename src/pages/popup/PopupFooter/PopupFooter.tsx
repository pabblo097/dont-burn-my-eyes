import { SettingsIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';
import t from '@root/src/shared/helpers/t';

const PopupFooter = () => (
   <Flex
      align={'center'}
      justify={'space-between'}
      w={'full'}
   >
      <FooterLinks />

      <Tooltip label={t('settings')}>
         <IconButton
            _hover={{ color: 'blue.100' }}
            aria-label={t('openSettingsAriaLabel')}
            boxSize={'32px'}
            icon={<SettingsIcon boxSize={'24px'} />}
            size={'sm'}
            variant={'link'}
            onClick={() => chrome.runtime.openOptionsPage()}
         />
      </Tooltip>
   </Flex>
);

export default PopupFooter;
