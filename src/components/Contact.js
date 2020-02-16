
import React, { Component } from 'react'
import{Map,GoogleApiWrapper,Marker} from 'google-maps-react';
import {Button,Layout,Header,Textfield, HeaderRow,Drawer,Navigation,Content,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import'./Main.css';

const mapStyles = {
    width: '100%',
    height: '100%',
    margin: 'auto',
    marginleft: '95px'
};

export class Contact extends Component {


    handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
      }

    render() {
        return (
            <div className="demo-big-content"  >
    <Layout>
        <Header waterfall style={{ background:"#544742",fontFamily:'Bold',fontSize:'20px'}}>
            <HeaderRow title="Furniture Hub" >
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
                    <a href="/mycart" style={{fontSize:'20px'}}>My Cart</a>
                    <a href="/profile" style={{fontSize:'20px'}}>Profile</a>
                    <a href="/contact" style={{fontSize:'20px'}}>Contact Us</a>
                    
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Pizza Delivery ">
            <Navigation>
                <a href="/home">Home</a>
                <a href="/Booking">Booking</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact Us</a>
                
            </Navigation>
            <Button color='danger' onClick={this.handleLogout}>Logout</Button>
        </Drawer>


        <Content>
            <Map className="maps"
                google={this.props.google}
                zoom ={15}
                style={mapStyles}
                initialCenter={{lat:27.7172, lng:85.3240}}
                >
                <Marker position={{ lat: 27.7172, lng: 85.3240}} />
                </Map>
        </Content>

        <Footer size="mini">
    <FooterSection type="left"  >
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
        </Layout>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD-v7-jKT-EXPlWBJwVD17c73stLgnHn4s'
}) (Contact);
