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
                <h2>Add New Contact</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="first_name">First Name: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="first_name"
                            value={first_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="last_name"
                            value={last_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="email"
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile: </label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="mobile"
                            value={mobile}
                        />
                    </div>
                    <div>
                        <label htmlFor="work">Work: </label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="work"
                            value={work}
                        />
                    </div>
                    <div>
                        <label htmlFor="home">Home: </label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="home"
                            value={home}
                        />
                    </div>
                    <div>
                        <label htmlFor="fax">Fax: </label>
                        <input
                            type="tel"
                            onChange={this.handleOnChange}
                            name="fax"
                            value={fax}
                        />
                    </div>
                    <div>
                        <label htmlFor="home_address">Home Address: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="home_address"
                            value={home_address}
                        />
                    </div>
                    <div>
                        <label htmlFor="work_address">Work Address: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="work_address"
                            value={work_address}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Profile Picture: </label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="img"
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
    return {
        contactFormData: state.contactFormData
    }
}

export default connect(mapStateToProps, { updateContactFormData, createContact })(ContactForm)
