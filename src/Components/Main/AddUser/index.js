import React, { Component } from 'react';

export default class AddUser extends Component {
    users = JSON.parse(localStorage.getItem('user')) || [];
    state = {
        name: '',
        email: '',
        phone: '',
        website: '',
        qualification: '',
        gender:'',
        savedData: false,
        message: ''
    };

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // it controls all types of input
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        // for only input box control
        // this.setState({
        //     [name] : value
        // });
    };

    addUserDetails = (event) => {
        event.preventDefault();
        const users=JSON.parse(localStorage.getItem('user'));
        users.push(this.state);

        localStorage.setItem('user', JSON.stringify(users));
        this.props.createNewUserCard();

        // Success message
        this.setState({
            message: "Data saved successfully"
        });

        // below codes removed previous input data and show empty
        this.setState({
            name: '',
            email: '',
            phone: '',
            website: ''
        });

        // removed success message
        setTimeout(() => {
            this.setState({
                message: ''
            });
        }, 3000);
    };

    render() {
        const { openAddUserModal, closeUserModal} = this.props;
        const { name, email, phone, website, message } = this.state;
        return (
            <div className="modal-container">
                <div id="myModal" className={openAddUserModal ? 'modal open' : 'modal'}>
                    <div className="modal-content">
                        <span className="close" onClick={() => closeUserModal()}>&times;</span>
                        <span className="heading">
                            Add New User
                        </span>

                        <p className="alert-success pl5">{message}</p>

                        <form action="" className="add-user-form" onSubmit={this.addUserDetails}>
                            <div className="content-section">
                                <div className="form-group">
                                    <label htmlFor="email">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

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
                                        placeholder="Enter Phone No."
                                        name="phone"
                                        value={phone}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Website Url:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Website Url"
                                        name="website"
                                        value={website}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <select
                                        value={this.state.qualification}
                                        onChange={this.handleChange}
                                        name="qualification"
                                    >
                                        <option value="">Please Select Qualification</option>
                                        <option value="10th">10th</option>
                                        <option value="12th">12th</option>
                                        <option value="graduate">Graduate</option>
                                        <option value="post graduate">Post Graduate</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="mr20">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={this.state.gender === "male"}
                                            onChange={this.handleChange}
                                        /> Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={this.state.gender === "female"}
                                            onChange={this.handleChange}
                                        /> Female
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="savedData"
                                            checked={this.state.savedData}
                                            onChange={this.handleChange}
                                        /> Details Permanent?
                                    </label>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="submit" onSubmit={this.updateUserDetails} className="btn btn-primary">Add User</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}