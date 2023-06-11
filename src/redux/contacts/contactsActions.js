export const addContact = contact => {
  return {
    type: 'addContact',
    payload: contact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'deleteContact',
    payload: contactId,
  };
};
