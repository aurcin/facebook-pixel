import { useEffect, useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const COOKIE_KEY = 'cookie_consent';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      window.fbq?.('consent', 'grant');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    window.fbq?.('consent', 'grant');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-gray-200 p-4 flex flex-wrap gap-2 justify-center items-center'>
      <p>
        This website uses cookies to ensure you get the best experience. By
        continuing, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept} className='button button-primary'>
        Accept
      </button>
      <button onClick={handleDecline} className='button button-danger'>
        Decline
      </button>
    </div>
  );
};
