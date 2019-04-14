import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContactFormData } from '../actions/contactForm'
import { createContact } from '../actions/contacts'

class ContactForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target
        const currentContactFormData = Object.assign({}, this.props.contactFormData, {
            [name]: value
        })
        this.props.updateContactFormData(currentContactFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createContact(this.props.contactFormData)
    }

    render() {
        const {
            first_name,
            last_name,
            email,
            mobile,
            work,
            home,
            fax,
            home_address,
            work_address,
            img
        } = this.props.contactFormData

        return (
            <div>
                Add New Contact
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            onChange={this.handleOnChange}
                            value={first_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            onChange={this.handleOnChange}
                            value={last_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleOnChange}
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            onChange={this.handleOnChange}
                            value={mobile}
                        />
                    </div>
                    <div>
                        <label htmlFor="work">Work:</label>
                        <input
                            type="number"
                            name="work"
                            onChange={this.handleOnChange}
                            value={work}
                        />
                    </div>
                    <div>
                        <label htmlFor="home">Home:</label>
                        <input
                            type="number"
                            name="home"
                            onChange={this.handleOnChange}
                            value={home}
                        />
                    </div>
                    <div>
                        <label htmlFor="fax">Fax:</label>
                        <input
                            type="number"
                            name="fax"
                            onChange={this.handleOnChange}
                            value={fax}
                        />
                    </div>
                    <div>
                        <label htmlFor="home_address">Home Address:</label>
                        <input
                            type="text"
                            name="home_address"
                            onChange={this.handleOnChange}
                            value={home_address}
                        />
                    </div>
                    <div>
                        <label htmlFor="work_address">Work Address:</label>
                        <input
                            type="text"
                            name="work_address"
                            onChange={this.handleOnChange}
                            value={work_address}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Profile Picture:</label>
                        <input
                            type="text"
                            name="img"
                            onChange={this.handleOnChange}
                            value={img}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        contactFormData: state.contactFormData
    })
}

export default connect(mapStateToProps, { updateContactFormData, createContact })(ContactForm)
