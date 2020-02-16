import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Main.css';
import axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
export default class Booking extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            contact: '',
            location:',',
            model:'',
            type:'',
            bikename:'',
            date:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }


handleChange=(event) =>{
    this.setState({
        [event.target.name]:event.target.value
    })
}
isBooked=(event) =>{
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3000/bikebooking', this.state, this.state.config)
    .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token)
        this.setState({
            name: '',
            contact: '',
            location:',',
            model:'',
            type:'',
            bikename:'',
            date:'',

        });
    }).catch((err)=>console.log(err))
    
}

 



render() {

    return (
        <div className="box">
        <h1>Booking</h1>
        <Form >
                <FormGroup align="left">
                    <label for='name'>Name</label>
                    <Input type="text" name='name' placeholder="Enter FullName" id="name " value={this.state.name}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='contact'>contact </label>
                    <Input type="text" name='contact' placeholder="Enter PhoneNumber" id="contact" value={this.state.contact}
                    onChange={this.handleChange}/> 
                </FormGroup>

                <FormGroup align="left">
                    <label for='location'>location</label>
                    <Input type="text" name='location' placeholder="Enter Address" id=" location" value={this.state. location}
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup align="left">
                    <label for=' model'> Model</label>
                    <Input type="Text" name='model' placeholder="Enter  Model" id="model" value={this.state. model}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='type'>BikeType</label>
                    <Input type="text" name='type' placeholder="Enter BikeType" id="type" value={this.state.type}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='bikename'>BikeName</label>
                    <Input type="text" name='bikename' placeholder="Enter BikeName" id="bikename" value={this.state.bikename}
                    onChange={this.handleChange}/>
                </FormGroup>
                 
                <FormGroup align="left">
                    <label for='date'>Date</label>
                    <Input type="text" name='date' placeholder="date" id="date" value={this.state.date}
                    onChange={this.handleChange}/>
                </FormGroup>
                <Button className="btn-primary" onClick={this.isBooked}>Book Now</Button>
                 
            </Form>

        </div>
    )
}
}