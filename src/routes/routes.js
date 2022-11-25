import Detail from '~/pages/Detail/Detail';
import Genre from '~/pages/Genre/Genre';
import Home from '~/pages/Home/Home';
import Popular from '~/pages/Popular/Popular';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/popular', component: Popular },
    { path: '/genre', component: Genre },
    { path: '/detail', component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
