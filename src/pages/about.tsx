function AboutPage() {
  function handleClick() {
    window.fbq?.('trackCustom', 'Event_2_Clicked');
  }

  return (
    <>
      <h2 className='mt-8 text-xl font-medium'>About Page</h2>
      <p className='mt-2 text-neutral-800'>
        The button below is to trigger another custom event
      </p>
      <button className='button button-primary mt-8' onClick={handleClick}>
        Trigger Event 2
      </button>
    </>
  );
}

export default AboutPage;
