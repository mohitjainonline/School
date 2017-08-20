import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import AppHeader from './UI/AppHeader.jsx'
import AppLeftPanel from './UI/AppLeftPanel.jsx'
//import chat from './UI/chat.jsx'
import UserService from '../../service/UserService.jsx';

class Base extends Component {

    /**
      * Class constructor.
      */
    constructor(props) {
        super(props);

        this.state = {
            secretData: '',
            user: null,
            image: null
        };
        //this.onClickProfile = this.onClickProfile.bind(this);
    }
    /**
       * This method will be executed after initial rendering.
       */
    componentDidMount() {
        var _this = this;
        if (localStorage.getItem('memberinfo') !== null) {
            var data = JSON.parse(localStorage.getItem('memberinfo'));
            _this.setState({                
                user: data.user,
                image: data.image
            });
        }
        else {
            UserService.memberinfo().done(function (data) {
                if (data.success == true) {
                    localStorage.setItem('memberinfo', JSON.stringify(data));
                    _this.setState({                        
                        user: data.user,
                        image: data.image
                    });
                }
                else { }
            });
        }
    }

    render() {
        if (this.state.user == null) {
            return (<div>Loading</div>);
        }


        return (
            <div>
                <main className="page-content content-wrap">

                    <AppHeader user={this.state.user} image={this.state.image} onClickProfile={this.onClickProfile} />
                    <AppLeftPanel user={this.state.user} image={this.state.image} />
                    {/* child component will be rendered here */}
                    {this.props.children}
                </main>
                <nav className="cd-nav-container" id="cd-nav">
                    <header>
                        <h3>Navigation</h3>
                        <a href="#0" className="cd-close-nav">Close</a>
                    </header>
                    <ul className="cd-nav list-unstyled">
                        <li className="cd-selected" data-menu="index">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-home"></i>
                                </span>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li data-menu="profile">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <p>Profile</p>
                            </a>
                        </li>
                        <li data-menu="inbox">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-envelope"></i>
                                </span>
                                <p>Mailbox</p>
                            </a>
                        </li>
                        <li data-menu="#">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-tasks"></i>
                                </span>
                                <p>Tasks</p>
                            </a>
                        </li>
                        <li data-menu="#">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-cog"></i>
                                </span>
                                <p>Settings</p>
                            </a>
                        </li>
                        <li data-menu="calendar">
                            <a href="javsacript:void(0);">
                                <span>
                                    <i className="glyphicon glyphicon-calendar"></i>
                                </span>
                                <p>Calendar</p>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

Base.propTypes = {
    children: PropTypes.object.isRequired
};
Base.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Base;


