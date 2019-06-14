import React, { Component } from 'react';

export default class showUserDetailsModal extends Component {
    render() {
        const {
            name,
            email,
            phone,
            // companyName,
            website,
            // address,
            showUserDetailsModal,
            closeDetailsModal
        } = this.props;

        return (
            <div className="modal-container">
                <div id="myModal" className={showUserDetailsModal ? 'modal open' : 'modal'}>
                    <div className="modal-content">
                        <span className="close" onClick={() => closeDetailsModal()}>&times;</span>
                        <span className="heading">
                            User Details
                        </span>
                        <div className="user-info-details">
                           <div className="row">
                               <div className="col-md-4 title">
                                   Name:
                               </div>
                               <div className="col-md-8">
                                   {name}
                               </div>
                           </div>

                            <div className="row">
                                <div className="col-md-4 title">
                                    Email:
                                </div>
                                <div className="col-md-8">
                                    {email}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 title">
                                    Phone:
                                </div>
                                <div className="col-md-8">
                                    {phone}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 title">
                                    Company Name:
                                </div>
                                <div className="col-md-8">
                                    {/*{companyName.name}*/}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 title">
                                    Website Url:
                                </div>
                                <div className="col-md-8">
                                    {website}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 title">
                                    Address:
                                </div>
                                <div className="col-md-8">
                                    {/*{address.street}, {address.city}, {address.zipcode}*/}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}