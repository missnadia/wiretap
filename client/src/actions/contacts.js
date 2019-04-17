import { resetContactForm } from './contactForm'

const API_URL = '/api/contacts'

// Action Creators
const setContacts = contacts => {
    return {
        type: 'GET_CONTACTS',
        contacts
    }
}

const addContact = contact => {
    return {
        type: 'CREATE_CONTACT',
        contact
    }
}

const removeContact = id => {
    return {
        type: 'DELETE_CONTACT',
        id
    }
}

// Async Actions
export const getContacts = () => {
    return dispatch => {
        return fetch(API_URL)
            .then(response => response.json())
            .then(contacts => dispatch(setContacts(contacts)))
            .catch(error => console.log(error))
    }
}

export const createContact = contact => {
    return dispatch => {
        return fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact: contact })
        })
            .then(response => response.json())
            .then(contact => {
                dispatch(addContact(contact))
                dispatch(resetContactForm())
            })
            .catch(error => console.log(error))
    }
}

export const deleteContact = id => {
    return dispatch => {
        return fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(({ id }) => dispatch(removeContact(id)))
            .catch(error => console.log(error))
    }
}