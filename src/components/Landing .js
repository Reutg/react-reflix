import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "Bob", color: "#ff5959" },
                { name: "Ted", color: "#facf5a" },
                { name: "Lisa", color: "#49beb7" },
                { name: "Johana", color: "#76a21e" }
            ]
        }
    }
    render() {
        return (
            <div className="page-container">
                <h1 className="header">Who's watching?</h1>

                <div className="users">

                    {this.state.users.map(user =>
                        <Link to={`/catalog/main/${user.name}`}>
                            <div className="box" style={{ backgroundColor: user.color }}>
                                <span className="user-name">{user.name}</span>
                            </div></Link>)}
                </div>

            </div>
        )
    }
}

export default Landing