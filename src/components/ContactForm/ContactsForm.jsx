import style from './ContactsForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputNameChange,
  inputNumberChange,
  clearForm,
} from '../../redux/contacts/contactForm.reducer';

export const ContactsForm = ({ handleAddName }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const name = useSelector(state => state.contactsFormStore.name);
  const number = useSelector(state => state.contactsFormStore.number);

  const handleInputChange = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    // const number = e.target.number;

    switch (inputName) {
      case 'name': {
        // setName(value);
        dispatch(inputNameChange(inputValue));
        return;
      }
      case 'number': {
        // setNumber(value);
        dispatch(inputNumberChange(inputValue));
        return;
      }
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactsData = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    handleAddName(contactsData);

    dispatch(clearForm(''));

    // setName('');
    // setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label>
        <p className={style.labelText}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        <p className={style.labelText}>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
