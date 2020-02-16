import React, { Component } from 'react'
import {Button,Card,CardText,CardActions,CardTitle, Layout,Header,Textfield, HeaderRow,Drawer,Navigation,Content,
    Grid, Cell, Dialog,DialogTitle,DialogActions} from 'react-mdl';
    
export default class HeaderComponent extends Component {
    render() {
        return (
             <div className="demo-big-content" >
    <Layout >
        <Header waterfall style={{ background:"#D81B60"}}>
            <HeaderRow title="Furniture Hub" >
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/contact">Contact Us</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Pizza Delivery">
            <Navigation>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact Us</a>
            </Navigation>
        </Drawer>
        </Layout>
        </div>
        )
    }
}
