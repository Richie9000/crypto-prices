import React from 'react'

const LogIn = () => {
    return (
        <div>
            <div className="header title">Welcome!</div>
            <br />
            <div className="login-name">Name</div>
            <input type="text" className="username" placeholder=" First Name"/>
            <input type="text" className="lastname" placeholder="Last Name"/>
            <div className="email title">Email</div>
            <input type="text" className="lastname" placeholder="user@...com"/>
            <div className="email title">Phone Number</div>
            <input type="text" className="lastname" placeholder="222-222-2222"/>
            <br />
            <button className="login btn">Submit</button>
        </div>
    )
}

export default LogIn
