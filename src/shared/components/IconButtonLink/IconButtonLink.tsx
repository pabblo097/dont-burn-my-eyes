import { Link, Tooltip } from '@chakra-ui/react';

import { IconButtonLinkProps } from './constants';

const IconButtonLink = ({
   icon,
   href,
   tooltipLabel,
   isExternal = false,
   hoverColor = 'blue.100',
}: IconButtonLinkProps) => (
   <Tooltip label={tooltipLabel}>
      <Link
         _hover={{ color: hoverColor }}
         alignItems={'center'}
         borderRadius={'md'}
         boxSize={'32px'}
         display={'flex'}
         href={href}
         isExternal={isExternal}
         justifyContent={'center'}
      >
         {icon}
      </Link>
   </Tooltip>
);

export default IconButtonLink;
