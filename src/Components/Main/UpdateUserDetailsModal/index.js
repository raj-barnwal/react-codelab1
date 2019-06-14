import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateUserDetailsModal extends Component {
    constructor({ email, phone }) {
        super();
        this.state = {
            email: email || '',
            phone: phone || ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    updateUserDetails = (event) => {
        event.preventDefault();
        const updatedData = {
            email: this.state.email,
            phone: this.state.phone,
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { updatedData })
            .then(res => {
                console.log(res.data);
            });

        this.setState({
            email:'',
            phone:''
        })
    };

    render() {
        const { openUpdateUserModal, closeUpdateUserModal} = this.props;
        const { email, phone } = this.state;
        return (
            <div className="modal-container">
                <div id="myModal" className={openUpdateUserModal ? 'modal open' : 'modal'}>
                    <div className="modal-content">
                        <span className="close" onClick={() => closeUpdateUserModal()}>&times;</span>
                        <span className="heading">
                            Update Details
                        </span>
                        <form action="" className="user-update-form" onSubmit={this.updateUserDetails}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Phone:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter New Phone No."
                                    name="phone"
                                    value={phone}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <button type="submit"  onSubmit={this.updateUserDetails}  className="btn btn-primary">Update</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}