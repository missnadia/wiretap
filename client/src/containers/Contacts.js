import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactCard from '../components/ContactCard'
import { getContacts } from '../actions/contacts'
import './Contacts.css'

class Contacts extends Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        return (
            <div className="ContactsContainer">
                <h1>Contacts</h1>
                {this.props.contacts.map(contact =>
                    <ContactCard key={contact.id} contact={contact} />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        contacts: state.contacts
    })
}

export default connect(mapStateToProps, { getContacts })(Contacts)