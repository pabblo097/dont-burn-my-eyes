import { Link, Tooltip } from '@chakra-ui/react';
import { IconButtonLinkProps } from './constants';

const IconButtonLink = ({
   icon,
   href,
   tooltipLabel,
   isExternal = false,
   hoverColor = 'blue.100',
}: IconButtonLinkProps) => {
   return (
      <Tooltip label={tooltipLabel}>
         <Link
            href={href}
            boxSize={'32px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'md'}
            _hover={{ color: hoverColor }}
            isExternal={isExternal}
         >
            {icon}
         </Link>
      </Tooltip>
   );
};

export default IconButtonLink;
