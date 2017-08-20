import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import UserService from '../../service/UserService.jsx';


class SignUpPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);

    var formData = {
      email: email,
      password : password
    }
    var _this = this;
    UserService.signup(formData).done(function(data){
      if(data.success == false)
      {
        const errors = {};
        errors.summary = data.msg;

        _this.setState({
          errors
        });
      }
      else
      {
        // change the component-container state
        _this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', data.msg);

        // make a redirect
        _this.context.router.replace('/login');
      }

    }).fail(function(){
      debugger;
    });


   
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
