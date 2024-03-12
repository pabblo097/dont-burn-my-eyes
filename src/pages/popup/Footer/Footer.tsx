import { SettingsIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';
import t from '@root/src/shared/helpers/t';

const Footer = () => {
   return (
      <Flex
         justify={'space-between'}
         align={'center'}
         w={'full'}
      >
         <FooterLinks />

         <Tooltip label={t('settings')}>
            <IconButton
               variant={'link'}
               boxSize={'32px'}
               size={'sm'}
               aria-label={t('openSettingsAriaLabel')}
               _hover={{ color: 'blue.100' }}
               icon={<SettingsIcon boxSize={'24px'} />}
               onClick={() => chrome.runtime.openOptionsPage()}
            />
         </Tooltip>
      </Flex>
   );
};

export default Footer;
