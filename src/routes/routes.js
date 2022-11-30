import { routes } from '~/config';

import Detail from '~/pages/Detail/Detail';
import Genre from '~/pages/Genre/Genre';
import Home from '~/pages/Home/Home';
import Popular from '~/pages/Popular/Popular';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.popular, component: Popular },
    { path: routes.genre, component: Genre },
    { path: routes.detail, component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
