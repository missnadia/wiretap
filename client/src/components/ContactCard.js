import React from 'react'
import ContactPicture from './ContactPicture'
import ContactInfo from './ContactInfo'

const ContactCard = ({ contact, deleteContact }) => {

    return (
        <div className="ContactCard">
            <div>
                <button
                    className="DeleteButton"
                    onClick={() => deleteContact(contact.id)}
                >Delete {contact.first_name}
                </button>
            </div>
            <div>
                <ContactPicture
                    contact={contact}
                />
                <ContactInfo
                    contact={contact}
                />
            </div>
        </div>
    )
}

export default ContactCard