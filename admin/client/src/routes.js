import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import ProfilePage from './containers/ProfilePage.jsx';

import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import Utility from '../service/UtilityServices.jsx';
import LoginService from '../service/LoginServices.jsx';
import Config from './config/config.jsx';

const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {

                if (Auth.isUserAuthenticated()) {
                    callback(null, DashboardPage);

                } else {
                    //callback(null, HomePage);
                    window.location.href = Config.getParameter("rootApp")
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },
        {
            name: "profile",
            path: '/profile',
            component: ProfilePage
        },
        {
            path: '/signup',
            component: SignUpPage
        },

        {
            name: "logout",
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                //replace('/');
                window.location.href = Config.getParameter("rootApp");
            }
        }

    ]
};

export default routes;