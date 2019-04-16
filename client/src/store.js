import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import contacts from './reducers/contacts'
import contactFormData from './reducers/contactFormData'

const reducers = combineReducers({
    contacts,
    contactFormData,
})

const middleware = [thunk]

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)