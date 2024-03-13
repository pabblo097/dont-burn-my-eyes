import { HStack, Icon } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';

import t from '../../helpers/t';
import IconButtonLink from '../IconButtonLink';

const FooterLinks = () => (
   <HStack align={'center'}>
      <IconButtonLink
         isExternal
         href={'https://github.com/pabblo097/dont-burn-my-eyes'}
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
);

export default FooterLinks;
