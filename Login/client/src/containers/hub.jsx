import React from 'react';

class hubPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      token: ''
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
    return (<div id="token">{localStorage.getItem("token")} </div>);
  }

}

export default hubPage;
