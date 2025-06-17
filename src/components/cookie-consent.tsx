declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookie_consent';
const FACEBOOK_PIXEL_ID = '1261194665358542';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      initFacebookPixel();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    initFacebookPixel();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setShowBanner(false);
  };

  const initFacebookPixel = () => {
    if (window.fbq) return;

    (function (
      f: any,
      b: Document,
      e: string,
      v: string,
      n?: any,
      t?: HTMLScriptElement,
      s?: Node
    ) {
      if (f.fbq) return;
      n = f.fbq = function (...args: any[]) {
        n.callMethod ? n.callMethod(...args) : n.queue.push(args);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    if (typeof window.fbq === 'function') {
      (window.fbq as (...args: any[]) => void)('init', FACEBOOK_PIXEL_ID);
      (window.fbq as (...args: any[]) => void)('track', 'PageView');
    }
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
