export const contactsInitialState = {
  contacts: [],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'deleteContact':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
