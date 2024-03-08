import { ReactElement } from 'react';

export interface IconButtonLinkProps {
   href: string;
   icon: ReactElement;
   isExternal?: boolean;
   hoverColor?: string;
   tooltipLabel?: string;
}
