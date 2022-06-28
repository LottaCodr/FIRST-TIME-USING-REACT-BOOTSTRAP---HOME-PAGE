import { Container , Carousel, Figure, Card, CardGroup, Button } from "react-bootstrap";
import IMAGES from './Images';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./NavigationBar";


import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    return(

        <Router>
          <Container fluid>
            <Navigation/>
            <Carousel 
            fade
            variant="dark">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.S1}
                    alt="slide-1"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                      <img 
                        className="d-block w-100"
                        src= {IMAGES.S2}
                        alt="slide-2"
                      />
                </Carousel.Item>
                
                <Carousel.Item>
                      <img 
                        src={IMAGES.S3}
                        className="d-block w-100"
                        alt="Slide-3"
                        />
                </Carousel.Item>
                
                <Carousel.Item>
                      <img 
                        src={IMAGES.S4}
                        className="d-block w-100"
                        alt="Slide-4"
                        />
                  
                  <Carousel.Caption>
                      <h3> Simple yet Sophisticated</h3>
                      <p> Because simple is the new cool</p>
                </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>

            <Figure>
                  <Figure.Caption>
                        <h1>About YelloTape Studios</h1>
                        <h3>We are the company that you run to when you need the world
                              to know about you and when you need to reintroduce yourself to the world.
                        </h3>
                  </Figure.Caption>
            </Figure>

            <CardGroup>
                 
                  <Card style= {{ width: '18rem' }} className="mb-2">
                        <Card.Img 
                        variant="top"
                        src={IMAGES.BORA}
                        alt="BORA LOGO" />
                        <Card.Title>
                              <b>BORA GLANCE</b> Brand Identity
                              </Card.Title>
                              <Button href="#" variant="primary" size="sm"> Learn More</Button> {' '}
                        

                  </Card>

                  <Card style= {{ width: '18rem' }} className="mb-2">
                        <Card.Img 
                        variant="top"
                        src={IMAGES.ESC}
                        alt="EASTERN SHOWCASE LOGO" />
                        <Card.Title>
                              <b>EASTERN SHOWCASE LOGO</b> - Brand Identity
                              </Card.Title>
                              <Button href="#" variant="primary" size="sm"> Learn More</Button> 
                        
                  </Card> {' '}

                  <Card style= {{ width: '18rem' }} className="mb-2">
                        <Card.Img 
                        variant="top"
                        src={IMAGES.GFTV}
                        alt="GODFATHER TV LOGO" />
                        <Card.Title>
                              <b>GODFATHER TV LOGO</b> - Brand Identity
                              </Card.Title>
                              <Button href="#" variant="primary" size="sm"> Learn More</Button> 
                        
                  </Card> {' '}

                  <Card style= {{ width: '18rem' }} className="mb-2">
                        <Card.Img 
                        variant="top"
                        src={IMAGES.NETBREKAZ}
                        alt="NETBREKAZ LOGO" />
                        <Card.Title>
                              <b>NETBREKAZ LOGO</b> - Brand Identity
                              </Card.Title>
                        
                        <Button href="#" variant="primary" size="sm"> Learn More</Button>
                  </Card> {' '}
                  
                  

            </CardGroup>
            <Container>
                  <p>Under Construction</p>
            </Container>


            
          </Container>
          </Router>


    );
}
export default Home;
