import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './Css/Header.css';
import './Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

// components
import Form from './components/home';
import Weather from './components/Weather';
import Error from './components/Error';
import WelcomePage from './components/WelcomePage';
import ContactUs from './components/contactus';
import About from './components/about';
import Team from './components/team';
import Services from './components/services';

const API_KEY = "3f5a8d36d96c810dabf652d54a0d110f";

const AppNavbar = () => {
  const location = useLocation();
  // Check if the current route is not the root ("/") route
  if (location.pathname !== '/') {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/team">Team</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  return null;
};

export default class App extends Component {
  state = {
    city: 'Amman',
    country: 'jordan',
    icon: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    description: '',
    status: false,
    error: false,
  };

  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await response.json();

    if (response.status === 200) {
      this.setState({
        city: city,
        country: country,
        temp: this.convertToSilsious(data.main.temp),
        temp_min: this.convertToSilsious(data.main.temp_min),
        temp_max: this.convertToSilsious(data.main.temp_max),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        status: true,
        error: false,
      });
    } else {
      this.setState({ error: true });
    }
  };

  convertToSilsious = (temp) => {
    return Math.floor(temp - 273.15);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <AppNavbar /> {/* Render the Navbar */}
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>

        <Form getData={this.getData} />
        {this.state.error ? <Error /> : ''}
        {this.state.status ? <Weather data={this.state} /> : ''}
      </div>
    );
  }
}
