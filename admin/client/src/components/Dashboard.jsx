import React, { PropTypes } from 'react';


const Dashboard = () => (
  <div className="page-inner">
                <div className="page-title">
                    <h3>Dashboard</h3>
                    <div className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <div id="main-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">107,200</p>
                                        <span className="info-box-title">User activity this month</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-users"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">340,230</p>
                                        <span className="info-box-title">Page views</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-eye"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p>$<span className="counter">653,000</span></p>
                                        <span className="info-box-title">Monthly revenue goal</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-basket"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">47,500</p>
                                        <span className="info-box-title">New emails recieved</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="panel panel-white">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="visitors-chart">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">Visitors</h4>
                                            </div>
                                            <div className="panel-body">
                                                <div id="flotchart1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="stats-info">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">Browser Stats</h4>
                                            </div>
                                            <div className="panel-body">
                                                <ul className="list-unstyled">
                                                    <li>Google Chrome<div className="text-success pull-right">32%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Firefox<div className="text-success pull-right">25%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Internet Explorer<div className="text-success pull-right">16%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Safari<div className="text-danger pull-right">13%<i className="fa fa-level-down"></i></div></li>
                                                    <li>Opera<div className="text-danger pull-right">7%<i className="fa fa-level-down"></i></div></li>
                                                    <li>Mobile &amp; tablet<div className="text-success pull-right">4%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Others<div className="text-success pull-right">3%<i className="fa fa-level-up"></i></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-white" >
                                <div className="panel-heading">
                                    <h4 className="panel-title">Server Load</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="server-load">
                                        <div className="server-stat">
                                            <span>Total Usage</span>
                                            <p>67GB</p>
                                        </div>
                                        <div className="server-stat">
                                            <span>Total Space</span>
                                            <p>320GB</p>
                                        </div>
                                        <div className="server-stat">
                                            <span>CPU</span>
                                            <p>57%</p>
                                        </div>
                                    </div>
                                    <div id="flotchart2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Weather</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="weather-widget">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="weather-top">
                                                    <div className="weather-current pull-left">
                                                        <i className="wi wi-day-cloudy weather-icon"></i>
                                                        <p><span>83<sup>&deg;F</sup></span></p>
                                                    </div>
                                                    <h2 className="weather-day pull-right">Miami, FL<br /><small><b>13th April, 2015</b></small></h2>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled weather-info">
                                                    <li>Wind <span className="pull-right"><b>ESE 16 mph</b></span></li>
                                                    <li>Humidity <span className="pull-right"><b>64%</b></span></li>
                                                    <li>Pressure <span className="pull-right"><b>30.15 in</b></span></li>
                                                    <li>UV Index <span className="pull-right"><b>6</b></span></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled weather-info">
                                                    <li>Cloud Cover <span className="pull-right"><b>60%</b></span></li>
                                                    <li>Ceiling <span className="pull-right"><b>17800 ft</b></span></li>
                                                    <li>Dew Point <span className="pull-right"><b>70° F</b></span></li>
                                                    <li>Visibility <span className="pull-right"><b>10 mi</b></span></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <ul className="list-unstyled weather-days row">
                                                    <li className="col-xs-4 col-sm-2"><span>12:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>13:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>14:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>15:00</span><i className="wi wi-day-cloudy"></i><span>83<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>16:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>17:00</span><i className="wi wi-day-sunny-overcast"></i><span>82<sup>&deg;F</sup></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Inbox</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="inbox-widget slimscroll">
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Sandra Smith</p>
                                                <p className="inbox-item-text">Hey! I'm working on your...</p>
                                                <p className="inbox-item-date">13:40 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar3.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Christopher</p>
                                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                                <p className="inbox-item-date">13:34 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Amily Lee</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">13:17 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar5.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Nick Doe</p>
                                                <p className="inbox-item-text">Nice to meet you</p>
                                                <p className="inbox-item-date">12:20 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Sandra Smith</p>
                                                <p className="inbox-item-text">Hey! I'm working on your...</p>
                                                <p className="inbox-item-date">10:15 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Amily Lee</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">9:56 AM</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel twitter-box">
                                <div className="panel-body">
                                    <div className="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                                        <span className="tile-title pull-right">New Tweets</span>
                                        <i className="fa fa-twitter"></i>
                                        <div><h2 className="no-m">It’s kind of fun to do the impossible...</h2><span className="tile-date">10 April, 2015</span></div>
                                        <div><h2 className="no-m">Sometimes by losing a battle you find a new way to win the war...</h2><span className="tile-date">6 April, 2015</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel facebook-box">
                                <div className="panel-body">
                                    <div className="live-tile" data-mode="carousel" data-direction="horizontal" data-speed="750" data-delay="4500">
                                        <span className="tile-title pull-right">Facebook Feed</span>
                                        <i className="fa fa-facebook"></i>
                                        <div><h2 className="no-m">If you're going through hell, keep going...</h2><span className="tile-date">23 March, 2015</span></div>
                                        <div><h2 className="no-m">To improve is to change; to be perfect is to change often...</h2><span className="tile-date">15 March, 2015</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Project Stats</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive project-stats">  
                                       <table className="table">
                                           <thead>
                                               <tr>
                                                   <th>#</th>
                                                   <th>Project</th>
                                                   <th>Status</th>
                                                   <th>Manager</th>
                                                   <th>Progress</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               <tr>
                                                   <th scope="row">452</th>
                                                   <td>Mailbox Template</td>
                                                   <td><span className="label label-info">Pending</span></td>
                                                   <td>David Green</td>
                                                   <td>
                                                   <div className="btn-group">
                                            <button type="button" className="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Action <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">327</th>
                                                   <td>Wordpress Theme</td>
                                                   <td><span className="label label-primary">In Progress</span></td>
                                                   <td>Sandra Smith</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">226</th>
                                                   <td>Modern Admin Template</td>
                                                   <td><span className="label label-success">Finished</span></td>
                                                   <td>Chritopher Palmer</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">178</th>
                                                   <td>eCommerce template</td>
                                                   <td><span className="label label-danger">Canceled</span></td>
                                                   <td>Amily Lee</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">157</th>
                                                   <td>Website PSD</td>
                                                   <td><span className="label label-info">Testing</span></td>
                                                   <td>Nick Doe</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">157</th>
                                                   <td>Fronted Theme</td>
                                                   <td><span className="label label-warning">Waiting</span></td>
                                                   <td>David Green</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                           </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-footer hide">
                    <p className="no-s">2015 &copy; Modern by Steelcoders.</p>
                </div>
            </div>
);
export default Dashboard;
