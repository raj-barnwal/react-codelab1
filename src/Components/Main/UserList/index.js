import React, { Component} from 'react';

import UpdateUserDetailsModal from '../UpdateUserDetailsModal';
import ShowUserDetailsModal from '../ShowUserDetailsModal';

class UserList extends Component {
    state = {
        updateUserDetailsModal:false,
        showUserDetailsModal:false,
    };

    updateUserDetailsModal = () => {
        this.setState({
            updateUserDetailsModal: !this.state.updateUserDetailsModal
        })
    };

    showUserDetailsModal = () => {
        this.setState({
            showUserDetailsModal: !this.state.showUserDetailsModal
        })
    };

    render() {
        const {
            id,
            name,
            email,
            phone,
            website,
            // address,
            company,
            deleteUser,
            updateUser
        } = this.props;

        return (
            <div className="card-col">
                <div className="user-card">
                    <div className="user-action">
                        <i className="fa fa-info-circle" title="Details" onClick={this.showUserDetailsModal} />
                        <i className="fa fa-edit" title="Update" onClick={this.updateUserDetailsModal} />
                        <i className="fa fa-remove" title="Delete" onClick={()=>deleteUser(id)} />
                    </div>
                    <div>
                        <span className="title">
                            User Id:
                        </span>
                        {id}
                    </div>
                    <div>
                        <span className="title">
                            Name:
                        </span>
                        {name}
                    </div>
                    <div>
                        <span className="title">
                            Email:
                        </span>
                        {email}
                    </div>
                    <div>
                        <span className="title">
                           Phone:
                        </span>
                        {phone}
                    </div>
                    <div>
                        <span className="title">
                           Website:
                        </span>
                        {website}
                    </div>
                </div>
                <UpdateUserDetailsModal
                    openUpdateUserModal={this.state.updateUserDetailsModal}
                    closeUpdateUserModal={this.updateUserDetailsModal}
                    email={email}
                    phone={phone}
                />
                <ShowUserDetailsModal
                    showUserDetailsModal={this.state.showUserDetailsModal}
                    closeDetailsModal={this.showUserDetailsModal}
                    name={name}
                    email={email}
                    phone={phone}
                    companyName={company}
                    website={website}
                    // address={address}
                />
            </div>
        )
    }
}

export default UserList;
