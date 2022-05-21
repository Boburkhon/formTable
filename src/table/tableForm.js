import React, { Component } from "react";
import "./tableForm.css"

export default class tableForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            salary: 0,
            usersList: [
                {
                    fullName: "Shakhzod M",
                    email: "Shakhzod@gmail.com",
                    salary: 100000,
                },
            ],
        }
    }


    inputHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(name)
    }

    saveData = (e) => {
        e.preventDefault()
        const { fullName, email, salary } = this.state
        let newUser = {
            fullName,
            email,
            salary
        }
        console.log(newUser)

        this.setState({
            fullName: "",
            email: "",
            salary: 0,
            usersList: [...this.state.usersList, newUser],
        })
    }


    render() {
        const { fullName, email, salary } = this.state
        let arr = [fullName, email, salary]
        return (<div>
            <h1>Length of Data: {this.state.length}</h1>

            <form onSubmit={this.saveData}>
                <div className="form">
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName" type="text" name="fullName" value={fullName} onChange={this.inputHandler} />
                </div>

                <div className="form">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" value={email} onChange={this.inputHandler} />
                </div>

                <div className="form">
                    <label htmlFor="salary">Salary</label>
                    <input id="salary" type="number" name="salary" value={salary} onChange={this.inputHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.usersList.map((user, index) => {
                        const { fullName, email, salary } = user;
                        return (
                            <tr key={index}>
                                <td>{fullName}</td>
                                <td>{email}</td>
                                <td>{salary}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>);
    }
}
