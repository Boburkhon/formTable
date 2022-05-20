import React, { Component } from 'react';

import Table from "./table/tableForm"



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Shakhzod",
            age: 0,
            email: "Example@gmail.com",
            phone: 123456789,
            address: "123 nmadur drive",
            zipCode: 37067,
            isMaried: false
        }
    }


    // inputHandler = (e) => {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // saveDta = (e) => {
    //     e.preventDefault()
    //     const { name, age, email, phone, address, zipCode } = this.state
    //     let obj = {
    //         name,
    //         age,
    //         email,
    //         phone,
    //         address,
    //         zipCode
    //     }
    //     console.log(obj)
    // }



    render() {
        const { name, age, email, phone, address, zipCode } = this.state
        return (
            <div>
                {/* <form onSubmit={this.saveDta}>
                    <div className="form__el">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" name='name' value={name} onChange={this.inputHandler} placeholder="Enter Your Name" />
                    </div>

                    <div className="form__el">
                        <label htmlFor="age"></label>
                        <input id='age' type="number" name='age' value={age} onChange={this.inputHandler} placeholder="Enter Your Age" />
                    </div>

                    <div className="form__el">
                        <label htmlFor="email"></label>
                        <input id='email' type="email" name='email' value={email} onChange={this.inputHandler} placeholder="Enter Your Email" />
                    </div>

                    <div className="form__el">
                        <label htmlFor="phone"></label>
                        <input id='phone' type="number" name='phone' value={phone} onChange={this.inputHandler} placeholder="Enter Your Phone Number" />
                    </div>

                    <div className="form__el">
                        <label htmlFor="address"></label>
                        <input id='address' type="text" name='address' value={address} onChange={this.inputHandler} placeholder="Enter Your Address" />
                    </div>

                    <div className="form__el">
                        <label htmlFor="zip"></label>
                        <input id='zip' type="number" name='zipCode' value={zipCode} onChange={this.inputHandler} placeholder="Enter Your Zip Code" />
                    </div>

                    <button type="submit">Save</button>
                </form> */}
                <Table />
            </div>
        );
    }
}

export default App;
