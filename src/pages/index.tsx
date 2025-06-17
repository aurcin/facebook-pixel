import { Route, Routes } from 'react-router';

import HomePage from './home';
import AboutPage from './about';

import Layout from '../containers/layout';
import { paths } from '../utils/paths';

function Pages() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.about.href} element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default Pages;
