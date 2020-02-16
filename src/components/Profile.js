import React, { Component } from 'react'
import { Layout,Header,Textfield, HeaderRow,Drawer,Navigation,Content, Grid, Cell,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Main.css';
import{Link, Redirect} from 'react-router-dom';
import Axios from 'axios';

export default class Profile extends Component {


    constructor(props) {
        super(props)

            this.state = {
                user: null,
                config: {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                },
                selectedFile: null,
           }
        
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/users/me', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3000/users/me', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/home');
    }


    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }
    handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
      }
    

    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
        return (
            
     <div className="demo-big-content"  >
    <Layout>
        <Header waterfall style={{ background:"#544742",fontFamily:'Bold',fontSize:'20px'}}>
            <HeaderRow title="Bike Showroom" >
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
                <Button color='danger' onClick={this.handleLogout}>Logout</Button>
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="/home" style={{fontSize:'20px'}}>Home</a>
      
                    <a href="/profile" style={{fontSize:'20px'}}>Profile</a>
                    <a href="/contact" style={{fontSize:'20px'}}>Contact Us</a>    
                </Navigation>
            </HeaderRow>
           
        </Header>
        <Drawer title="Vehicle Servicing">
            <Navigation>
                <a href="/home" >Home</a>
               
                <a href="/profile">Profile</a>
                <a href="/contact">Contact Us</a>
            </Navigation>
            <Button color='danger' onClick={this.handleLogout}>Logout</Button>
        </Drawer>
        
        <Content style={{background:''}}> 
        <h1 style={{fontFamily:'cursive'}}>Update Your Here Profile</h1>
                <Form className="signup-form">
                    <FormGroup align="left">
                        <label for='firstName' style={{fontFamily:'Bold', fontSize:'20px'}}>First Name : </label>
                        {/* <label for='firstName' style={{fontFamily:'Bold', fontSize:'20px'}}>{this.state.firstName}</label> */}
                        <Input type="text" name='firstName' placeholder={this.state.user.firstName} id="firstName"
                        onChange={(e) => this.handleChange(e)}/>
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='lastname' style={{fontFamily:'Bold', fontSize:'20px'}}>Last Name : </label>
                        {/* <label for='lastname' style={{fontFamily:'Bold', fontSize:'20px'}}>{this.state.lastName}</label> */}
                        <Input type="text" name='lastName' placeholder={this.state.user.lastName} id="lastName" 
                        onChange={(e) => this.handleChange(e)}/> 
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='phonenumber' style={{fontFamily:'Bold', fontSize:'20px'}}>Phone Number : </label>
                        {/* <label for='lastname' style={{fontFamily:'Bold', fontSize:'20px'}}>{this.state.PhoneNumber}</label> */}
                        <Input type="text" name='phonenumber' placeholder={this.state.user.phonenumber} id="phonenumber"
                        onChange={(e) => this.handleChange(e)}/>
                    </FormGroup>

                    <FormGroup align="left">
                        <label for='username' style={{fontFamily:'Bold', fontSize:'20px'}}>Username : </label>
                        {/* <label for='username' style={{fontFamily:'Bold', fontSize:'20px'}}>{this.state.username}</label> */}
                        <Input type="text" name='username' placeholder={this.state.user.username} id="username" 
                        onChange={(e) => this.handleChange(e)}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.updateUser}>Update</Button>
                    </Form> 

                    <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>   
        </Content>
        </Layout>
        </div>
               
        )
    }
}
}
