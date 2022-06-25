import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form className={s.container} onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            className={s.input}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeInput}
          />
        </label>
        <label>
          Number
          <input
            className={s.input}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.changeInput}
          />
        </label>
        <button className={s.btn} type="submit">
          add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
