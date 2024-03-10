import { SettingsIcon } from '@chakra-ui/icons';
import { Flex, HStack, Icon, IconButton, Tooltip } from '@chakra-ui/react';
import IconButtonLink from '@root/src/shared/components/IconButtonLink';
import t from '@root/src/shared/helpers/t';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';

const Footer = () => {
   return (
      <Flex
         justify={'space-between'}
         align={'center'}
         w={'full'}
      >
         <HStack align={'center'}>
            <IconButtonLink
               isExternal
               href={'https://github.com/pabblo097'}
               tooltipLabel={'GitHub'}
               icon={
                  <Icon
                     as={BsGithub}
                     boxSize={'24px'}
                  />
               }
            />
            <IconButtonLink
               isExternal
               href={'https://www.linkedin.com/in/pawel--wiewiora/'}
               tooltipLabel={'LinkedIn'}
               icon={
                  <Icon
                     as={BsLinkedin}
                     boxSize={'24px'}
                  />
               }
            />
            <IconButtonLink
               isExternal
               href={'https://paypal.me/pabblo097'}
               tooltipLabel={t('donate')}
               icon={
                  <Icon
                     as={FaDonate}
                     boxSize={'24px'}
                  />
               }
            />
         </HStack>

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
