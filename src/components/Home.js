import React, { Component } from 'react'
import {Button,Card,CardText,CardActions,CardTitle, Layout,Header,Textfield, HeaderRow,Drawer,Navigation,Content,
     Grid, Cell, Dialog,DialogTitle,DialogActions,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import SimpleImageSlider from 'react-simple-image-slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ONE from '../components/images/ONE.jpg';
import TWO from '../components/images/TWO.jpg';
import THREE from '../components/images/THREE.jpg';
import FOUR from '../components/images/FOUR.jpg';
import axios from 'axios';
import { Container, Row, Col }from 'reactstrap';

export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleOpenDialog=this.handleOpenDialog.bind(this);
        this.handleCloseDialog=this.handleCloseDialog.bind(this);

    }

    componentDidMount(){
      axios.get('http://localhost:3000/chickenpizza',this.state.config)
      .then((response)=>{
        console.log(response.data)
        this.setState({
          chickenpizza:response.data
        })
      })
  
      axios.get('http://localhost:3000/mushroompizza',this.state.config)
      .then((response)=>{
        console.log(response.data)
        this.setState({
          mushroompizza:response.data
        })
      })
    }

        handleOpenDialog() {
            this.setState({
              openDialog: true
            });
          }

          handleCloseDialog() {
            this.setState({
              openDialog: false
            });
          }

          handleLogout=(e)=>{
            e.preventDefault();
            localStorage.removeItem('token');
            this.props.history.push('/')
          }
    
    render() {
        return (
<div className="demo-big-content" >
    <Layout >
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
                <Navigation >
                    <a href="/home"style={{fontSize:'20px'}} >Home</a>
                    <a href="/Booking" style={{fontSize:'20px'}}>Booking</a>
                    <a href="/profile" style={{fontSize:'20px'}}>Profile</a>
                    <a href="/contact" style={{fontSize:'20px'}}>Contact Us</a>
                    
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Bike Showroom">
            <Navigation>
                <a href="/home">Home</a>
                <a href="/Booking">Booking</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact Us</a>
                
            </Navigation>
            <Button color='danger' onClick={this.handleLogout}>Logout</Button>
        </Drawer>
        
        <Content> 
          <div style={{width:'600px', height:'600px',marginLeft:'300px'}}>
            <Carousel>
                <div>
                    <img src={THREE} />
                </div>
                <div>
                    <img src={TWO} />
                </div>
                <div>
                    <img src={ONE} />
                </div>
                <div>
                    <img src={FOUR} />
                </div>
            </Carousel>
            </div>
            <div style={{width:'600px', height:'600px',marginLeft:'300px'}}>
            <Carousel>
                <div>
                    <img src={THREE} />
                </div>
                <div>
                    <img src={TWO} />
                </div>
                <div>
                    <img src={ONE} />
                </div>
                <div>
                    <img src={FOUR} />
                </div>
            </Carousel>
            </div>


          <Footer size="mini">
    <FooterSection type="left"  >
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
