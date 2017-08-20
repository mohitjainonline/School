import React, { PropTypes } from 'react';
//import Auth from '../../modules/Auth.jsx';

var Router = require('react-router');
var Link = Router.Link;


const AppHeader = ({
    user,
    image    
    }) => (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="sidebar-pusher">
                    <a
                        href="javascript:void(0);"
                        className="waves-effect waves-button waves-classic push-sidebar">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div className="logo-box">
                    <a href="/" className="logo-text">
                        <span>Admin</span>
                    </a>
                </div>
                <div className="search-button hide">
                    <a
                        href="javascript:void(0);"
                        className="waves-effect waves-button waves-classic show-search">
                        <i className="fa fa-search"></i>
                    </a>
                </div>
                <div className="topmenu-outer">
                    <div className="top-menu">
                        <ul className="nav navbar-nav navbar-left hide">
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="waves-effect waves-button waves-classic sidebar-toggle">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cd-nav"
                                    className="waves-effect waves-button waves-classic cd-nav-trigger">
                                    <i className="fa fa-diamond"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="waves-effect waves-button waves-classic toggle-fullscreen">
                                    <i className="fa fa-expand"></i>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle waves-effect waves-button waves-classic"
                                    data-toggle="dropdown">
                                    <i className="fa fa-cogs"></i>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-md dropdown-list theme-settings"
                                    role="menu">
                                    <li className="li-group">
                                        <ul className="list-unstyled">
                                            <li className="no-link" role="presentation">
                                                Fixed Header
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right fixed-header-check" />
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="li-group">
                                        <ul className="list-unstyled">
                                            <li className="no-link" role="presentation">
                                                Fixed Sidebar
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right fixed-sidebar-check" />
                                                </div>
                                            </li>
                                            <li className="no-link" role="presentation">
                                                Horizontal bar
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right horizontal-bar-check" />
                                                </div>
                                            </li>
                                            <li className="no-link" role="presentation">
                                                Toggle Sidebar
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right toggle-sidebar-check" />
                                                </div>
                                            </li>
                                            <li className="no-link" role="presentation">
                                                Compact Menu
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right compact-menu-check" />
                                                </div>
                                            </li>
                                            <li className="no-link" role="presentation">
                                                Hover Menu
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right hover-menu-check" />
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="li-group">
                                        <ul className="list-unstyled">
                                            <li className="no-link" role="presentation">
                                                Boxed Layout
                                            <div className="ios-switch pull-right switch-md">
                                                    <input type="checkbox" className="js-switch pull-right boxed-layout-check" />
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="li-group">
                                        <ul className="list-unstyled">
                                            <li className="no-link" role="presentation">
                                                Choose Theme Color
                                            <div className="color-switcher">
                                                    <a
                                                        className="colorbox color-blue"
                                                        href="indexca00.html?theme=blue"
                                                        title="Blue Theme"
                                                        data-css="blue"></a>
                                                    <a
                                                        className="colorbox color-green"
                                                        href="indexaf91.html?theme=green"
                                                        title="Green Theme"
                                                        data-css="green"></a>
                                                    <a
                                                        className="colorbox color-red"
                                                        href="index0e99.html?theme=red"
                                                        title="Red Theme"
                                                        data-css="red"></a>
                                                    <a
                                                        className="colorbox color-white"
                                                        href="index13d4.html?theme=white"
                                                        title="White Theme"
                                                        data-css="white"></a>
                                                    <a
                                                        className="colorbox color-purple"
                                                        href="index938c.html?theme=purple"
                                                        title="purple Theme"
                                                        data-css="purple"></a>
                                                    <a
                                                        className="colorbox color-dark"
                                                        href="index4965.html?theme=dark"
                                                        title="Dark Theme"
                                                        data-css="dark"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="no-link">
                                        <button className="btn btn-default reset-options">Reset Options</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hide">
                                <a
                                    href="javascript:void(0);"
                                    className="waves-effect waves-button waves-classic show-search">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                            <li className="dropdown hide">
                                <a
                                    href="#"
                                    className="dropdown-toggle waves-effect waves-button waves-classic"
                                    data-toggle="dropdown">
                                    <i className="fa fa-envelope"></i>
                                    <span className="badge badge-success pull-right">4</span>
                                </a>
                                <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li>
                                        <p className="drop-title">You have 4 new messages !</p>
                                    </li>
                                    <li className="dropdown-menu-list slimscroll messages">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online on"></div><img className="img-circle" src="assets/images/avatar2.png" alt="" /></div>
                                                    <p className="msg-name">Sandra Smith</p>
                                                    <p className="msg-text">Hey ! I'm working on your project</p>
                                                    <p className="msg-time">3 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online off"></div><img className="img-circle" src="assets/images/avatar4.png" alt="" /></div>
                                                    <p className="msg-name">Amily Lee</p>
                                                    <p className="msg-text">Hi David !</p>
                                                    <p className="msg-time">8 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online off"></div><img className="img-circle" src="assets/images/avatar3.png" alt="" /></div>
                                                    <p className="msg-name">Christopher Palmer</p>
                                                    <p className="msg-text">See you soon !</p>
                                                    <p className="msg-time">56 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online on"></div><img className="img-circle" src="assets/images/avatar5.png" alt="" /></div>
                                                    <p className="msg-name">Nick Doe</p>
                                                    <p className="msg-text">Nice to meet you</p>
                                                    <p className="msg-time">2 hours ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online on"></div><img className="img-circle" src="assets/images/avatar2.png" alt="" /></div>
                                                    <p className="msg-name">Sandra Smith</p>
                                                    <p className="msg-text">Hey ! I'm working on your project</p>
                                                    <p className="msg-time">5 hours ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="msg-img">
                                                        <div className="online off"></div><img className="img-circle" src="assets/images/avatar4.png" alt="" /></div>
                                                    <p className="msg-name">Amily Lee</p>
                                                    <p className="msg-text">Hi David !</p>
                                                    <p className="msg-time">9 hours ago</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-all">
                                        <a href="#" className="text-center">All Messages</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown hide">
                                <a
                                    href="#"
                                    className="dropdown-toggle waves-effect waves-button waves-classic"
                                    data-toggle="dropdown">
                                    <i className="fa fa-bell"></i>
                                    <span className="badge badge-success pull-right">3</span>
                                </a>
                                <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li>
                                        <p className="drop-title">You have 3 pending tasks !</p>
                                    </li>
                                    <li className="dropdown-menu-list slimscroll tasks">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <div className="task-icon badge badge-success">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <span className="badge badge-roundless badge-default pull-right">1min ago</span>
                                                    <p className="task-details">New user registered.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="task-icon badge badge-danger">
                                                        <i className="icon-energy"></i>
                                                    </div>
                                                    <span className="badge badge-roundless badge-default pull-right">24min ago</span>
                                                    <p className="task-details">Database error.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="task-icon badge badge-info">
                                                        <i className="icon-heart"></i>
                                                    </div>
                                                    <span className="badge badge-roundless badge-default pull-right">1h ago</span>
                                                    <p className="task-details">Reached 24k likes</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-all">
                                        <a href="#" className="text-center">All Tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle waves-effect waves-button waves-classic"
                                    data-toggle="dropdown">
                                    <span className="user-name">{user.params.name}<i className="fa fa-angle-down"></i>
                                    </span>
                                    <img
                                        className="img-circle avatar uploadimg"
                                        src={image.data ? image.data : "assets/images/humandummy.png"}
                                        width="40"
                                        height="40"
                                        alt="" />
                                </a>
                                <ul className="dropdown-menu dropdown-list" role="menu">
                                    <li role="presentation">

                                    <Link to="profile" ><i className="fa fa-user"></i>Profile</Link>

                                       
                                    </li>
                                    <li role="presentation">
                                        <a href="calendar.html">
                                            <i className="fa fa-calendar"></i>Calendar</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="inbox.html">
                                            <i className="fa fa-envelope"></i>Inbox<span className="badge badge-success pull-right">4</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="divider"></li>
                                    <li role="presentation">
                                        <a href="lock-screen.html">
                                            <i className="fa fa-lock"></i>Lock screen</a>
                                    </li>
                                    <li role="presentation">
                                        <Link to="logout" ><i className="fa fa-sign-out m-r-xs"></i>Log out</Link>
                                            
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="/logout"
                                    className="log-out waves-effect waves-button waves-classic">
                                    <span>
                                        <i className="fa fa-sign-out m-r-xs"></i>Log out</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="waves-effect waves-button waves-classic"
                                    id="showRight">
                                    <i className="fa fa-comments"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );


export default AppHeader;
