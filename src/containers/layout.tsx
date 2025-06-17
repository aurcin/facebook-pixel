import { Outlet } from 'react-router';

import Navbar from '../components/navbar';

function Layout() {
  return (
    <>
      <header className='container mx-auto my-4 flex gap-6 items-baseline'>
        <h1 className='text-2xl font-bold'>Facebook pixel demo</h1>
        <Navbar />
      </header>

      <main className='container mx-auto my-4'>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
