function AboutPage() {
  return (
    <>
      <h2 className='mt-8 text-xl font-medium'>About Page</h2>
      <p className='mt-2 text-neutral-800'>
        The button below is to trigger another custom event
      </p>
      <button className='mt-8 px-4 py-2 text-neutral-100 rounded bg-neutral-900 cursor-pointer active:scale-95'>
        Trigger Event 2
      </button>
    </>
  );
}

export default AboutPage;
