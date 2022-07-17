import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import HeaderComponent from "./HeaderComponent";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            employeeId: '',
            firstName: '',
            lastName: '',
            emailId: '',
            department: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    employeeId: employee.employeeId,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId,
                    department: employee.department
                });
            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { employeeId: this.state.employeeId, firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, department: this.state.department };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeEmployeeIdHandler = (event) => {
        this.setState({ employeeId: event.target.value });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    changeDepartmentHandler = (event) => {
        this.setState({ department: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center" style={{ color:'green', fontFamily:'Times New Roman' }}>Add Book Details</h3>
        } else {
            return <h3 className="text-center" style={{ color:'green', fontFamily:'Times New Roman' }}>Update Book Details</h3>
        }
    }
    render() {
        return (
            <>
            <HeaderComponent />
            <div>
                <br></br>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Book Title: </label>
                                        <input placeholder="Title of the Book" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Author: </label>
                                        <input placeholder="Name of Author" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Publisher: </label>
                                        <input placeholder="Name of Publisher" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> ISBN: </label>
                                        <input placeholder="ISBN number of the book" name="department" className="form-control"
                                            value={this.state.department} onChange={this.changeDepartmentHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
    }
}

export default CreateEmployeeComponent
