import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Main.css';
import{Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             isLoggedIn: false
        }
    }

    
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users/login', this.state)
        .then((response)=>{
            console.log(response)

            localStorage.setItem('token', response.data.token)
            this.setState({isLoggedIn:true})
        }).catch((err)=>console.log(err.response.data))
        this.setState({username: '', password: ''})
    }

    render() {
        if(this.state.isLoggedIn){
            return <Redirect to='/home'/>
        }
        return (
            <div className="box">
                <h1>WELCOME</h1>
                <Form>
                    <FormGroup>
                        <label for='username'>Username</label>
                        <Input type="text" id='username' name='username' placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label for='password'>Password</label>
                        <Input type="password" id='username' name='password' placeholder="Enter Password"  value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.handleSubmit}>Login</Button>
                    <FormText>Not register yet?<Link to='/register'>Register here</Link></FormText>
                    </Form>
            </div>
        )
    }
}
