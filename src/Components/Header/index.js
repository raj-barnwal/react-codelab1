import React, { Component } from 'react';

class Header extends Component {
    state = {
        time: new Date().toString(),
        user: {},
        isLoggedIn: false,
        loading: true
    };
    
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                time: new Date().toString()
            });
        },1000);

        // fetch call
        fetch("https://swapi.co/api/people/3")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    user: data
                })
            })
    }

    checkAuth = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        })
    };

   render() {
       // const completedStyle = {
       //     fontStyle: "italic",
       //     color: "#cdcdcd",
       //     textDecoration: "line-through"
       // };

       const { time, user, isLoggedIn, loading } = this.state;
       let buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
       let displayAuthText = isLoggedIn ? "Logged in" : "";
       const displayUser = loading ? 'Loading...' : user.name
       return (
        <div className="header clearfix">
            <div className="logo">
                {displayUser}
            </div>
            <div className="date-time">
                Current time is
                <span className="info">
                    {time}
                </span>

                <button type="button" className="btn btn-primary ml30 login-btn" onClick={this.checkAuth}>
                    {buttonText}
                </button>
            </div>
            <div className="clearfix pull-right">
                <span className="text-info">{displayAuthText}</span>
            </div>
        </div>
       )
    }
}

export default Header;
