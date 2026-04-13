import { ChangeEvent } from 'react';

import urlsStorage from '../storages/UrlsStorage';

const readFile = async (event: ChangeEvent<HTMLInputElement>) => {
   const file = event.target.files[0];
   return await file.text();
};

const safeJsonParse = (
   value: string,
): { error: null; result: unknown } | { error: Error; result: null } => {
   try {
      return { error: null, result: JSON.parse(value) };
   } catch (error) {
      return { error, result: null };
   }
};

const isStringArray = (value: unknown): value is string[] =>
   Array.isArray(value) && value.every((v) => typeof v === 'string');

export const exportUrls = (dataToWrite: string[]) => {
   const blob = new Blob([JSON.stringify(dataToWrite, null, 2)], { type: 'text/json' });
   const link = document.createElement('a');
   const filename = 'urlsList';

   link.download = `${filename}.json`;
   link.href = window.URL.createObjectURL(blob);
   link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

   const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
   });

   link.dispatchEvent(evt);
   link.remove();
};

export const importUrls = async (event: ChangeEvent<HTMLInputElement>) => {
   const text = await readFile(event);
   const { error, result } = safeJsonParse(text);

   if (error || !isStringArray(result)) {
      return false;
   }

   await urlsStorage.merge(result);

   return true;
};
