import React, { Component} from 'react';
import axios from 'axios';
import UserList from './UserList';
import AddUser from './AddUser';

class Main extends Component {
    state = {
        addUserModal: false,
        persons: [],
    };

    addUserModal = () => {
        this.setState({
            addUserModal: !this.state.addUserModal
        })
    };

    componentDidMount() {
        const persons = JSON.parse(localStorage.getItem('user')) || [];
        if (!(persons && persons.length)) {
            axios.get(`https://jsonplaceholder.typicode.com/users`,{
            })
                .then(res => {
                    res.data.forEach((index, value)=>{
                        persons.push(res.data[value]);
                    });
                    localStorage.setItem('user', JSON.stringify(persons));
                    this.setState({
                        persons
                    })
                });
        }

        this.setState({
            persons
        });
    }

    createNewUserCard = () => {
        const persons = JSON.parse(localStorage.getItem('user'));
        this.setState({
            persons
        })
    };

    deleteUser = (id) => {
        let persons = JSON.parse(localStorage.getItem('user')) || [];
        const afterDeleted = this.state.persons.filter(user => user.id !== id);
        localStorage.setItem('user', JSON.stringify(afterDeleted));
        persons = JSON.parse(localStorage.getItem('user')) || [];
        this.setState({
            persons
        })
    };

    render() {
        return (
            <div>
                <div className="inner-header clearfix">
                    <h3 className="heading">User Information</h3>
                    <div className="add-user-btn">
                        <button className="btn btn-outline-primary" onClick={this.addUserModal}>
                            <i className="fa fa-plus-circle" />&nbsp;Add User
                        </button>
                    </div>
                </div>

                <div className="user-card-container clearfix">
                    {
                        this.state.persons.map((user, i) => (
                            <UserList
                                key={i}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                phone={user.phone}
                                website={user.website}
                                address={user.address}
                                company={user.company}
                                deleteUser={this.deleteUser}
                            />
                        ))
                    }
                </div>
                <AddUser
                    openAddUserModal={this.state.addUserModal}
                    closeUserModal={this.addUserModal}
                    createNewUserCard={this.createNewUserCard}
                />
            </div>
        )
    }
}

export default Main;
