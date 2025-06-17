function HomePage() {
  function handleClick() {
    window.fbq?.('trackCustom', 'Event_1_Clicked');
  }

  return (
    <>
      <h2 className='mt-8 text-xl font-medium'>Home Page</h2>
      <p className='mt-2 text-neutral-800'>
        The button below is to trigger custom event
      </p>
      <button className='button button-primary mt-8' onClick={handleClick}>
        Trigger Event 1
      </button>
    </>
  );
}

export default HomePage;
