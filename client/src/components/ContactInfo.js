import React from 'react'
import '../containers/Contacts.css'

const ContactInfo = ({ contact }) => (
    <div className="ContactInfo">
        <p><strong>Email: </strong>{contact.email}</p>
        <p><strong>Mobile: </strong>{contact.mobile}</p>
        <p><strong>Work: </strong>{contact.work}</p>
        <p><strong>Home: </strong>{contact.home}</p>
        <p><strong>Fax: </strong>{contact.fax}</p>
        <p><strong>Home Address: </strong>{contact.home_address}</p>
        <p><strong>Work Address: </strong>{contact.work_address}</p>
        <p><strong>Wire: </strong>{contact.wire}</p>
    </div>
)

export default ContactInfo