function HomePage() {
  function handleClick() {
    window.fbq?.('trackCustom', 'Event_1_Clicked');
  }

  return (
    <section className='max-w-[600px]'>
      <h2 className='mt-8 text-xl font-medium'>Home Page</h2>

      <button className='button button-primary mt-8' onClick={handleClick}>
        Trigger Event 1
      </button>
    </section>
  );
}

export default HomePage;
