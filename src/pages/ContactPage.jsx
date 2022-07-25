import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useGetAllContactsQuery } from 'services/contactsAPI';
const ContactPage = () => {
  const { data } = useGetAllContactsQuery();
  if (data) {
    const contactLength = data.length;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        {contactLength > 1 && <Filter></Filter>}
        <ContactList></ContactList>
      </>
    );
  }
};
export default ContactPage;
