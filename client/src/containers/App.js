import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import ContactForm from './ContactForm';
import Contacts from './Contacts'
import './App.css'

const App = (props) => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route exact path="/Contacts" component={Contacts} />
                <Route exact path="/ContactForm" component={ContactForm} />
            </div>
        </Router>
    )
}

export default App