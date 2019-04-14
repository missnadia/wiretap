import React from 'react'

const ContactCard = ({ contact }) => (
    <div className="ContactCard">
        <div className="ContactCardImg">
            <img src={contact.img} alt={contact.name} />
        </div>
        <h3 className="ContactName">{contact.first_name} {contact.last_name}</h3>
    </div>
)

export default ContactCard