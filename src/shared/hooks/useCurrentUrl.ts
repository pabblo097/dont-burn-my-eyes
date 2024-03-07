import { useState, useEffect } from 'react';

const useCurrentUrl = () => {
   const [currentUrl, setCurrentUrl] = useState<string>(null);
   const [isWebsite, setIsWebsite] = useState<boolean>(null);

   useEffect(() => {
      const getCurrentUrl = async () => {
         const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

         const splittedUrl = tab.url.split('/');

         setIsWebsite(splittedUrl[0].includes('http'));
         setCurrentUrl(splittedUrl[2]);
      };

      getCurrentUrl();
   }, []);

   return { currentUrl, isWebsite };
};

export default useCurrentUrl;
