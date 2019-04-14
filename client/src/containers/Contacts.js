import React from 'react'
import './Contacts.css'

const Contacts = (props) => (
    <div className="ContactsContainer">
        <h1>Contacts</h1>
        {props.contacts.map(contact =>
            <div key={contact.id} className="ContactCard">
                <div className="ContactCardImg">
                    <img src={contact.img} alt={contact.name} />
                </div>
                <h3 className="ContactName">{contact.first_name} {contact.last_name}</h3>
            </div>
        )}
    </div>
)




export default Contacts