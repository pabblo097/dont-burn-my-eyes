import { DimmerOperatingMode } from '@root/src/shared/storages/DimmerOperatingModeStorage';

interface InfoMessageWithHighlight {
   message: string;
   highlight: string | string[];
}

export const infoMessagesWithHighlight: Record<DimmerOperatingMode, InfoMessageWithHighlight> = {
   everywhereExcept: {
      message: `Screen dimmer will be applied everywhere except the URLs specified in the URLs config / Everywhere except section below.`,
      highlight: ['everywhere except', `URLs config / Everywhere except`],
   },
   onlyOn: {
      message: `Screen dimmer will be applied only on URLs specified in the URLs config / Only on section below.`,
      highlight: ['only on', `URLs config / Only on`],
   },
   everywhere: {
      message: `Screen dimmer will be applied everywhere.`,
      highlight: 'everywhere',
   },
};
