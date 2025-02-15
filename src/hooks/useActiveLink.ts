import { useState, useEffect } from 'react';

const useActiveCustomLink = (initialCustomLink: string | null = null) => {
  const [activeCustomLink, setActiveCustomLink] = useState<string | null>(
    () => {
      return sessionStorage.getItem('activeCustomLink') || initialCustomLink;
    }
  );

  useEffect(() => {
    if (activeCustomLink) {
      sessionStorage.setItem('activeCustomLink', activeCustomLink);
    } else {
      sessionStorage.removeItem('activeCustomLink');
    }
  }, [activeCustomLink]);

  return [activeCustomLink, setActiveCustomLink] as const;
};

export default useActiveCustomLink;
