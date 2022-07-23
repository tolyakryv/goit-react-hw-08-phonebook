import ContactElm from 'components/ContactElm';
// import { getAllContacts } from 'services/API';

import { useGetAllContactsQuery } from 'services/contactsAPI';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const filters = useSelector(state => state.filter);
  const { data, isLoading } = useGetAllContactsQuery();
  // const allContacts=getAllContacts()
  // console.log(getAllContacts());
  // console.log(filters);

  const showContact = () =>
    data.filter(contact =>
      contact.name.toUpperCase().includes(filters.toUpperCase())
    );
  return (
    <ul>
      {isLoading === true && <h2>Loading</h2>}
      {isLoading === false &&
        showContact().map(({ id, name, phone }) => {
          return <ContactElm key={id} id={id} name={name} number={phone} />;
        })}
    </ul>
  );
};

export default ContactList;
