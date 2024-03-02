const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts,
  filters: '',
};

export const contactsReducer = (state = initialState, action) => {
  //action -> {type: 'constacts/deletedContact' payload: ''123}
  //action -> {type: 'constacts/addContact' payload: {id: 123, name: Alina}}

  //boilerplate code (шаблонний код)
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deletedContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'contacts/filterContact': {
      return {
        ...state,
        filters: action.payload,
      };
    }
    default:
      return state;
  }
};

//action-creatore (екшн кріейтор) - це функція яка повертає екшени (інструкції, де обов'язково має бути type і paylod)
export const addContact = payload => {
  return {
    type: 'contacts/addContact',
    payload,
  };
};

export const deletedContact = payload => {
  return {
    type: 'contacts/deletedContact',
    payload,
  };
};

export const filterContact = payload => {
  return {
    type: 'contacts/deletedContact',
    payload,
  };
};
