// Action Creators
export const updateContactFormData = contactFormData => {
    return {
        type: 'UPDATED_CONTACT',
        contactFormData
    }
}

export const resetContactForm = () => {
    return {
        type: 'RESET_CONTACT_FORM'
    }
}