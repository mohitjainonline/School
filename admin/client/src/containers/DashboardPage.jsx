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
    

  }

  /**
   * Render the component.
   */
  render() {
      return (<Dashboard />);    
  }

}

export default DashboardPage;
