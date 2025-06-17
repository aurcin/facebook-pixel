import { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookie_consent';
const FACEBOOK_PIXEL_ID = '1261194665358542';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setShowBanner(true);
    // else if (consent === 'accepted') initFacebookPixel();
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    // initFacebookPixel();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setShowBanner(false);
  };

  //   const initFacebookPixel = () => {
  //     if (window.fbq) return;

  //     !(function (f: any, b, e, v, n?, t?, s?) {
  //       if (f.fbq) return;
  //       n = f.fbq = function () {
  //         n.callMethod
  //           ? n.callMethod.apply(n, arguments)
  //           : n.queue.push(arguments);
  //       };
  //       if (!f._fbq) f._fbq = n;
  //       n.push = n;
  //       n.loaded = true;
  //       n.version = '2.0';
  //       n.queue = [];
  //       t = b.createElement(e);
  //       t.async = true;
  //       t.src = v;
  //       s = b.getElementsByTagName(e)[0];
  //       s.parentNode.insertBefore(t, s);
  //     })(
  //       window,
  //       document,
  //       'script',
  //       'https://connect.facebook.net/en_US/fbevents.js'
  //     );

  //     window.fbq('init', 'YOUR_PIXEL_ID');
  //     window.fbq('track', 'PageView');
  //   };

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
