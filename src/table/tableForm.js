import React, { Component } from "react";
import "./tableForm.css"

export default class tableForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: "d",
            email: "f",
            salary: 0
        }
    }


    inputHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(name)
    }

    saveDta = (e) => {
        e.preventDefault()
        const { fullName, email, salary } = this.state
        let obj = {
            fullName,
            email,
            salary
        }
        console.log(obj)
    }


    render() {
        const { fullName, email, salary } = this.state
        let arr = [fullName, email, salary]
        return (<div>
            <h1>Length of Data: {this.state.length}</h1>

            <form onSubmit={this.saveDta}>
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
                    <tr>
                        <td>Shakhzod M</td>
                        <td>Shakhzod@gmail.com</td>
                        <td>100.000</td>
                    </tr>
                    <tr>
                        <td>{fullName}</td>
                        <td>{email}</td>
                        <td>{salary}</td>
                    </tr>
                    {arr.map((item, index) => {
                        <tr key={index}>
                            <td>{item}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>);
    }
}
