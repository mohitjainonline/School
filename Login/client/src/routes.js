import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import hub from './containers/hub.jsx';
import Auth from './modules/Auth';
import Config from './config/config.jsx';

const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                debugger
                if (Auth.isUserAuthenticated()) {
                    var data = JSON.parse(Auth.getToken());
                    window.location.href = Config.getParameter("adminUrl");
                } else {
                    callback(null, HomePage);
                }
            }
        },
        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/');
            }
        }

    ]
};

export default routes;