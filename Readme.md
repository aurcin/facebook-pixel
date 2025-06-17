# Pixel Test – Facebook Pixel Integration Example

This project demonstrates Facebook Pixel integration in a React (Vite) project, with user consent managed via a simple cookie consent window.

## Features

- **Cookie Consent Window:**  
  A minimal example with two buttons (accept or decline) for cookie consent. The user's choice is saved in local storage.

- **Facebook Pixel Consent:**  
  The script in `index.html` initially revokes consent (`fbq('consent', 'revoke')`) and waits for the user to accept cookies. If accepted, consent is granted (`fbq('consent', 'grant')`).

- **Custom Event Tracking:**  
  Two pages, each with a button to trigger custom Facebook Pixel events. The About page includes an additional example.

- **Events:**  
  You can remove the event trigger in code and use Facebook's Event Manager to set up and review events in Event Manager using their tool.

- **Temporary Pixel ID:**  
  This example uses a temporary Facebook Pixel ID. To test with your own data, replace it with your own Pixel ID.

## Notes

- After triggering a custom event, review and approve it in your Facebook Events settings for it to work.
- Trigger 2 on the "About" page uses options as an example.
- Replace the temporary Pixel ID with your own for real testing.
