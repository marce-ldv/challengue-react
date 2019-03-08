import Details from 'views/containers/Details';
import List from 'views/containers/List';

export default [
    {
        component: List,
        path: '/'
    },
    {
        component: Details,
        path: '/details/:name'
    }
];
