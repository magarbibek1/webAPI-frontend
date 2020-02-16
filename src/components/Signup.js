import React, { Component } from 'react'

import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Main.css';
import axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
export default class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             lastName: '',
             PhoneNumber: '',
             username: '',
             password: ''
        }
    }

    handleChange=(event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    register=(event) =>{
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/users/signup', this.state)
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem('token',response.data.token)
            this.setState({
             firstName: '',
             lastName: '',
             phonenumber: '',
             username: '',
             password: '',
             isRegistered:true
            });
        }).catch((err)=>console.log(err))
        
    }
    

    render() {
        if(this.state.isRegistered === true){
            return <Redirect to='/'/>
        }
        return (
            <div className="box">
            <h1>SIGN UP FORM</h1>
            <Form className="signup-form">
                    <FormGroup align="left">
                        <label for='firstName'>First Name</label>
                        <Input type="text" name='firstName' placeholder="Enter Firstname" id="firstName" value={this.state.firstName}
                        onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='lastname'>Last Name</label>
                        <Input type="text" name='lastName' placeholder="Enter Lastname" id="lastName" value={this.state.lastName}
                        onChange={this.handleChange}/> 
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='phonenumber'>Phone Number</label>
                        <Input type="text" name='phonenumber' placeholder="Enter phonenumber" id="phonenumber" value={this.state.phonenumber}
                        onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='username'>Username</label>
                        <Input type="text" name='username' placeholder="Enter Username" id="username" value={this.state.username}
                        onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='password'>Password</label>
                        <Input type="password" name='password' placeholder="Enter Password" id="password" value={this.state.password}
                        onChange={this.handleChange}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.register}>Signup</Button>
                    
                    <FormText><Link to='/'>Login here</Link></FormText>
                </Form>

            </div>
        )
    }
}
