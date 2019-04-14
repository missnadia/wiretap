export default (state = [], action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return action.contacts

        case 'CREATE_CONTACT':
            return state.concat(action.contact)

        default:
            return state
    }
}