import React, { Component } from 'react'

class AdminHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="App-header">
                <header >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light admin-header">
                        <div className="title"><a href="https://www.google.com" className="navbar-brand" style={{fontSize:"40px", color:'green', fontFamily:'Times New Roman',textAlign:"center" }}>Library Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default AdminHeader
