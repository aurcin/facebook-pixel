import { Link } from 'react-router';

import { paths } from '../utils/paths';

function Navbar() {
  return (
    <>
      <nav>
        <ul className='flex gap-4'>
          {Object.values(paths).map(({ href, text }) => (
            <li key={href}>
              <Link to={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
