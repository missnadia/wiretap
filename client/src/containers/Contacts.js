import React, { Component } from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from './ContactForm'
import './Contacts.css'

export default class Contacts extends Component {

    render() {
        return (
            <div className="ContactsContainer">
                <h1>Contacts</h1>
                {this.props.contacts.map(contact =>
                    <ContactCard key={contact.id} contact={contact} />
                )}
                <ContactForm />
            </div>
        )
    }
}