import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

interface InfoMessageWithHighlight {
   message: string;
   highlight: string | string[];
}

export const infoMessagesWithHighlight: Record<DimmerOperatingMode, InfoMessageWithHighlight> = {
   blackList: {
      message: `Screen dimmer will be applied everywhere except the URLs specified in the URLs config / Black list section below.`,
      highlight: ['everywhere except', `URLs config / Black list`],
   },
   whiteList: {
      message: `Screen dimmer will be applied only on URLs specified in the URLs config / White list section below.`,
      highlight: ['only on', `URLs config / White list`],
   },
   alwaysOn: {
      message: `Screen dimmer will be applied everywhere.`,
      highlight: 'everywhere',
   },
};
