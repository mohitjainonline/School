import UtilityServices from '../../service/UtilityServices.jsx';
class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token) {
        UtilityServices.setCookie("token", JSON.stringify(token), 30);
        //localStorage.setItem('token', JSON.stringify(token));
    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return UtilityServices.getCookie("token") !== "";
        //return localStorage.getItem('token') !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        UtilityServices.delCookie("token");
        localStorage.removeItem('memberinfo');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        return UtilityServices.getCookie("token");
        //return localStorage.getItem('token');
    }

}

export default Auth;