import React, { Component, useState, useEffect } from 'react';

class Main extends Component {
    state = {
        time: new Date().toString()
    };

    // const GreetingWithTime = (props) => {
    //     const [time, updateTime] = useState(new Date().toString());
    //
    //     useEffect(() => {
    //         setInterval(function () {
    //             updateTime(new Date().toString());
    //         })
    //     }, 1000);
    // }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                time: new Date().toString()
            });
        },1000)
    }

    render() {
        const { time } = this.state;
        return (
            <div className="main-section">
                 <div className="date-time">
                     Currently time is
                     <span className="info">
                        {time}
                     </span>
                 </div>
            </div>
        )
    }
}

export default Main;
