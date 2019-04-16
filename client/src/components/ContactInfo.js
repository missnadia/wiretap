import React from 'react'
import '../containers/Contacts.css'

const ContactInfo = ({ contact }) => (
    <div className="ContactInfo">
        <p>{contact.email}</p>
        <p>{contact.mobile}</p>
        <p>{contact.work}</p>
        <p>{contact.home}</p>
        <p>{contact.fax}</p>
        <p>{contact.home_address}</p>
        <p>{contact.work_address}</p>
        <p>{contact.wire}</p>
    </div>
)

export default ContactInfo