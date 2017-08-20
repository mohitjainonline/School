import React, { PropTypes } from 'react';

function uploadimg()
{    
    $('#userimg').trigger('click');
}

const Profile = ({
    user,
    image,
    profile,
    onSaveProfile,
    onUploadProfilePic,
    onChangeProfile }) => (
        <div className="page-inner" >
            <div className="profile-cover">
                <div className="row">
                    <div className="col-md-3 profile-image">
                        <div onClick={uploadimg} className="profile-image-container ">
                            <img  id='imguser' className='uploadimg' src={image.data ? image.data : "assets/images/humandummy.png"} alt="" />
                            <span className="ProfilePhotoText"><i className="fa fa-pencil"></i>Change Profile Photo</span>
                            <input type="file" onChange={onUploadProfilePic} id="userimg" className="hide"/>
                        </div>
                    </div>
                    <div className="col-md-12 profile-info">
                        <div className=" profile-info-value">
                            <h3>1020</h3>
                            <p>Followers</p>
                        </div>
                        <div className=" profile-info-value">
                            <h3>1780</h3>
                            <p>Friends</p>
                        </div>
                        <div className=" profile-info-value">
                            <h3>260</h3>
                            <p>Photos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="row">
                    <div className="col-md-3 user-profile">
                        <h3 className="text-center">{user.params.name}</h3>
                        <p className="text-center">{user.role}</p>
                        <hr />
                        <ul className="list-unstyled text-center">
                            <li><p><i className="fa fa-map-marker m-r-xs"></i>Melbourne, Australia</p></li>
                            <li><p><i className="fa fa-envelope m-r-xs"></i><a href="#">{decodeURIComponent(user.params.email)}</a></p></li>
                            <li><p><i className="fa fa-link m-r-xs"></i><a href="#">www.themeforest.net</a></p></li>
                        </ul>
                        <hr />
                        <button className="btn btn-primary btn-block"><i className="fa fa-plus m-r-xs"></i>Follow</button>
                    </div>
                    <div className="col-md-9 m-t-lg">
                        <div className="panel panel-white">
                            <div className="panel-body">
                                <div id="rootwizard">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#tab1" data-toggle="tab"><i className="fa fa-user m-r-xs"></i>Personal Info</a></li>
                                        <li role="presentation"><a href="#tab2" data-toggle="tab"><i className="fa fa-truck m-r-xs"></i>Contact Info</a></li>

                                    </ul>


                                    <div className="tab-content">
                                        <div className="tab-pane active fade in" id="tab1">
                                            <div className="row m-b-lg">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" className="form-control error" onChange={onChangeProfile} name="name" id="name" placeholder="Name" aria-required="true" aria-invalid="true" value={profile.name} />
                                                            <label id="name-error" className="error hide" htmlFor="name">This field is required.</label>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="dob">Date of birth</label>
                                                            <input type="text" className="form-control date-picker error" onChange={onChangeProfile} name="dob" id="dob" placeholder="Date of Birth" aria-required="true" aria-invalid="true" value={profile.dob} />
                                                            <label id="dob-error" className="error hide" htmlFor="name">This field is required.</label>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="gender">Gender</label>
                                                            <select className="form-control error" name="gender" value={profile.gender} onChange={onChangeProfile}>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                           
                                                            <label id="gender-error" className="error hide" htmlFor="gender">This field is required.</label>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <button id="ProfileSave" className="btn btn-primary btn-addon" onClick={onSaveProfile}><i className="fa fa-save"></i> Save </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="assets/images/envato-logo.png" width="250" alt="" />
                                                    <div className="m-t-md">
                                                        <address>
                                                            <strong>Twitter, Inc.</strong><br />
                                                            795 Folsom Ave, Suite 600<br />
                                                            San Francisco, CA 94107<br />
                                                            <abbr title="Phone">P:</abbr> (123) 456-7890
                                                                </address>
                                                        <address>
                                                            <strong>Full Name</strong><br />
                                                            <a href="mailto:#">first.last@example.com</a>
                                                        </address>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="exampleInputProductName">Product Name</label>
                                                        <input type="text" className="form-control" name="exampleInputProductName" id="exampleInputProductName" placeholder="Product Name" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="exampleInputProductId">Product ID</label>
                                                        <input type="text" className="form-control" name="exampleInputProductId" id="exampleInputProductId" placeholder="Product ID" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="exampleInputQuantity">Quantity</label>
                                                        <input type="number" min="1" max="5" className="form-control" name="exampleInputQuantity" id="exampleInputQuantity" placeholder="Quantity" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/*<ul className="pager wizard">
                                            <li className="previous disabled"><a href="#" className="btn btn-default">Previous</a></li>
                                            <li className="next"><a href="#" className="btn btn-default">Next</a></li>
                                        </ul>*/}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="page-footer hide">
                <p className="no-s">2017 © MJ Products.</p>
            </div>
        </div>
    );
export default Profile;
