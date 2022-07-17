import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class HeaderComponent extends Component {
   
    
    render() {
        return (
            <div>
                <header className="fixed-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                        <div><a href="https://www.google.co.in" className="navbar-brand" style={{ fontSize: "20px", color:'green', fontFamily:'Times New Roman' }}>Library Management System</a></div>
                        <span className="headerul">
                            <ul>
                                <span> <li style={{ width:"50px",border: "1px solid grey",borderRadius:"5px", backgroundColor:"#D8D8D8"}}><Link style={{ textDecoration: 'none',color:'Black',textAlign:'center' }} to="/employees">Home</Link></li></span>
                                <span> <li style={{ width:"30px",border: "1px solid grey",borderRadius:"5px", backgroundColor:"#D8D8D8"}}><Link style={{ textDecoration: 'none', color:'black',textAlign:'center' }} to="/add-employee/_add" >Add</Link></li> </span>
                                <span>  <li style={{ width:"55px", border: "1px solid grey",borderRadius:"5px", backgroundColor:"#D8D8D8"}}> <Link style={{ textDecoration: 'none',color:'black',textAlign:'center' }} to="/updatepanel">Update</Link></li> </span>
                                <span>   <li style={{ width:"50px", border: "1px solid grey",borderRadius:"5px", backgroundColor:"#D8D8D8"}}><Link style={{ textDecoration: 'none',color:'black',textAlign:'center' }} to="/deletepanel">Delete</Link></li> </span>
                                <span>  <li style={{ width:"50px", border: "1px solid grey",borderRadius:"5px", backgroundColor:"#D8D8D8"}}><Link style={{ textDecoration: 'none',color:'black',textAlign:'center' }} to="/viewpanel">View</Link></li></span>
                                
                                </ul>
                            
                        </span>
                        <span className="headerul_sec">
                            <ul>
                                <span>  <li><Link style={{ textDecoration: 'none' }} to="/">Logout</Link></li></span>
                            </ul>

                        </span>
                        </nav>
                   
                    
                </header>
               
            </div>
        )
    }
}

export default HeaderComponent
