import React, { Component } from 'react'
import Contacts from './Contacts'
import './App.css'

const API_URL = '/api/contacts'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(contacts => this.setState({ contacts }))
    }

    render() {
        return (
            <div className="App">
                <Contacts contacts={this.state.contacts} />
            </div>
        )
    }
}