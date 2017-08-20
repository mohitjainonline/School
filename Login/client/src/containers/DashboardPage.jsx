import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import UserService from '../../service/UserService.jsx';

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user : null
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    var _this = this;
    UserService.memberinfo().done(function(data){
      if(data.success == true)
      {
        _this.setState({
          secretData: data.msg,
          user : data.user
        });
      }
      else
      {

      }
    })

  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} user = {this.state.user}/>);
  }

}

export default DashboardPage;
