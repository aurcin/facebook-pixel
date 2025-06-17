function AboutPage() {
  function handleClick() {
    window.fbq?.('trackCustom', 'Event_2_Clicked', {
      category: 'Newsletter',
      method: 'CTA button',
    });
  }

  return (
    <>
      <h2 className='mt-8 text-xl font-medium'>About Page</h2>

      <button className='button button-primary mt-8' onClick={handleClick}>
        Trigger Event 2
      </button>
    </>
  );
}

export default AboutPage;
