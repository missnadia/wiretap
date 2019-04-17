import React from 'react'

const ContactPicture = ({ contact }) => (
    <div className="ContactPicture">
        <div className="ContactPictureImg">
            <img
                src={contact.img}
                alt={contact.name}
            />
        </div>
        <h3 className="ContactName">{contact.first_name} {contact.last_name}</h3>
    </div>
)

export default ContactPicture