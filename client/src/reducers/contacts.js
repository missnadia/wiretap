export default (state = [], action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return action.contacts

        case 'CREATE_CONTACT':
            return state.concat(action.contact)

        case 'DELETE_CONTACT':
            return state.filter(({ id }) => id !== action.data);

        default:
            return state
    }
}