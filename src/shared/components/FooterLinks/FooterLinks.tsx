import { HStack, Icon } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

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
   </HStack>
);

export default FooterLinks;
