import axios from 'axios';
axios.defaults.baseURL = 'https://62d9e5e59eedb6996363cbee.mockapi.io/';
// export const getAllContacts = async dispatch => {
//   dispatch(fetchAllContactRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchAllConatactSuccess(data));
//   } catch (error) {
//     dispatch(fetchAllContactErorr(error));
//   }
// };
export const getAllContacts = () => {
  axios
    .get('/contacts')
    .then(response => response.data)
    .catch(console.error());
};
