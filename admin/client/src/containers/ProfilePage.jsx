import React from 'react';
import Auth from '../modules/Auth';
import Profile from '../components/Profile.jsx';
import UserService from '../../service/UserService.jsx';
import ProfileServices from '../../service/ProfileServices.jsx';
import UtilityServices from '../../service/UtilityServices.jsx';

class ProfilePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: null,
      profile: null,
      image : null
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    var _this = this;
    UserService.memberinfo({ profiletype: "Admin" }).done(function (data) {
      if (data.success == true) {
        data.profile.dob = UtilityServices.GetFormattedDate(data.profile.dob);
        _this.setState({
          user: data.user,
          profile: data.profile,
          image: data.image
        });
      }
      else {

      }
      $('.date-picker').datepicker({
        orientation: "top auto",
        format: 'yyyy-mm-dd',
        autoclose: true
      });
    });

  }

  onSaveProfile(e) {
    var data = this.state.profile
    var target = e.target;
    $(target).removeClass("btn-primary").addClass("btn-info").html("<i class='fa fa-check'></i> Saving...");
    ProfileServices.profilesave(data).done(function (data) {
      if (data.success == true) {
        $(target).removeClass("btn-info").addClass("btn-success").html("<i class='fa fa-thumbs-up'></i> Saved");
      }
      else {
        $(target).removeClass("btn-info").addClass("btn-danger").html("<i class='fa  fa-thumbs-down'></i> Error while saving");
        toastr.options = {
          closeButton: true,
          progressBar: true,
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut',
          timeOut: 5000
        };
        toastr["error"](data.msg, 'Error while saving');
      }
    });
    return false;
  }

  changeProfile(event) {
    const field = event.target.name;
    const profile = this.state.profile;
    profile[field] = event.target.value;
    this.setState({
      profile
    });
  }

  uploadProfilePic(e) {
    debugger;

    for (var index = 0; index <= e.target.files.length - 1; index++) {
      var file = e.target.files[index];
      UtilityServices.getBase64(file, function (reader) {
        var base64 = reader.result;
        
        var img = this.state.image;
        img.data = base64;
        $(".uploadimg").attr("src", "assets/images/loading.gif");
        ProfileServices.ImageAdd(img).done(function (data) {
          toastr.options = {
              closeButton: true,
              progressBar: true,
              showMethod: 'fadeIn',
              hideMethod: 'fadeOut',
              timeOut: 5000
            };
          if (data.success == true) {
              $(".uploadimg").attr("src", base64);
              toastr["success"](data.msg, 'Image Uploaded');
          }
          else {            
            toastr["error"](data.msg, 'Error while saving');
          }
        });
      }.bind(this));
    }



  }

  /**
   * Render the component.
   */
  render() {
    if (this.state.user == null) {
      return (<div>Loading</div>);
    }

    return (<Profile
      user={this.state.user}
      image={this.state.image}
      profile={this.state.profile}
      onSaveProfile={this.onSaveProfile.bind(this)}
      onUploadProfilePic={this.uploadProfilePic.bind(this)}
      onChangeProfile={this.changeProfile.bind(this)} />);
  }

}

export default ProfilePage;
