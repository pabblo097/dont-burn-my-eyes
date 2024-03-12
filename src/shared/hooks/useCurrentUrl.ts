import { useState, useEffect } from 'react';

const useCurrentUrl = () => {
   const [splitUrl, setSplitUrl] = useState<string[]>([]);
   const [isWebsite, setIsWebsite] = useState<boolean>(null);

   useEffect(() => {
      const getCurrentUrl = async () => {
         const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

         const splitUrl = tab.url.split(/[?#]/)[0].split('/');
         const filteredSplitUrl = splitUrl.filter((url) => !url.includes('http') && url !== '');

         setIsWebsite(splitUrl[0].includes('http'));
         setSplitUrl(filteredSplitUrl);
      };

      getCurrentUrl();
   }, []);

   return { splitUrl, isWebsite };
};

export default useCurrentUrl;
