import React, { PropTypes } from 'react';

const chat = () => (
           <div>
                <nav
            className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right"
            id="cbp-spmenu-s1">
            <h3>
                <span className="pull-left">Chat</span>
                <a href="javascript:void(0);" className="pull-right" id="closeRight">
                    <i className="fa fa-times"></i>
                </a>
            </h3>
            <div className="slimscroll">
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar2.png" alt=""/>
                    <span>Sandra smith<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar3.png" alt=""/>
                    <span>Amily Lee<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar4.png" alt=""/>
                    <span>Christopher Palmer<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar5.png" alt=""/>
                    <span>Nick Doe<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar2.png" alt=""/>
                    <span>Sandra smith<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar3.png" alt=""/>
                    <span>Amily Lee<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar4.png" alt=""/>
                    <span>Christopher Palmer<small>Hi! How're you?</small>
                    </span>
                </a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar5.png" alt=""/>
                    <span>Nick Doe<small>Hi! How're you?</small>
                    </span>
                </a>
            </div>
        </nav>
        <nav
            className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right"
            id="cbp-spmenu-s2">
            <h3>
                <span className="pull-left">Sandra Smith</span>
                <a href="javascript:void(0);" className="pull-right" id="closeRight2">
                    <i className="fa fa-angle-right"></i>
                </a>
            </h3>
            <div className="slimscroll chat">
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt=""/>
                    </div>
                    <div className="chat-message">
                        Hi There!
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Hi! How are you?
                    </div>
                </div>
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt=""/>
                    </div>
                    <div className="chat-message">
                        Fine! do you like my project?
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Yes, It's clean and creative, good job!
                    </div>
                </div>
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt=""/>
                    </div>
                    <div className="chat-message">
                        Thanks, I tried!
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Good luck with your sales!
                    </div>
                </div>
            </div>
            <div className="chat-write">
                <form className="form-horizontal" action="javascript:void(0);">
                    <input type="text" className="form-control" placeholder="Say something"/>
                </form>
            </div>
        </nav>
        <div className="menu-wrap">
            <nav className="profile-menu">
                <div className="profile"><img src="assets/images/avatar1.png" width="52" alt="David Green"/>
                    <span>David Green</span>
                </div>
                <div className="profile-menu-list">
                    <a href="#">
                        <i className="fa fa-star"></i>
                        <span>Favorites</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-bell"></i>
                        <span>Alerts</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-envelope"></i>
                        <span>Messages</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-comment"></i>
                        <span>Comments</span>
                    </a>
                </div>
            </nav>
            <button className="close-button" id="close-button">Close Menu</button>
        </div>
        <form className="search-form hide" action="#" method="GET">
            <div className="input-group">
                <input
                    type="text"
                    name="search"
                    className="form-control search-input"
                    placeholder="Search..."/>
                <span className="input-group-btn">
                    <button
                        className="btn btn-default close-search waves-effect waves-button waves-classic"
                        type="button">
                        <i className="fa fa-times"></i>
                    </button>
                </span>
            </div>
        </form>

           </div>
        );
   

export default chat;