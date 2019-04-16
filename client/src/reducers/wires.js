export default (state = [], action) => {
    switch (action.type) {
        case 'GET_WIRES':
            return action.wires

        default:
            return state
    }
}