import propTypes from 'prop-types';
const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        style={{
          display: 'block',
          marginTop: '5px',
        }}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
