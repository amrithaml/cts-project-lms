import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import HeaderComponent from "./HeaderComponent"

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <>
                <HeaderComponent />
            <div>
              <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book Id: </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Name of the Book: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label>Name of Author: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Name of Publisher: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> ISBN number of the book: </label>
                            <div> { this.state.employee.department }</div>
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
    }
}

export default ViewEmployeeComponent
