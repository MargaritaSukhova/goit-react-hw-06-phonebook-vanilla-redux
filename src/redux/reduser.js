import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReduser';
import { filterReducer } from './filter/filterReduser';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
