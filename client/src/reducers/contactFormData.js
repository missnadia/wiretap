const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: 0,
    work: 0,
    home: 0,
    fax: 0,
    home_address: '',
    work_address: '',
    img: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATED_CONTACT':
            return action.contactFormData

        case 'RESET_CONTACT_FORM':
            return state

        default:
            return state
    }
}