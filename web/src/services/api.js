const isDevEnviroment = process.env.NODE_ENV === 'development'; //Booleano
const apiUrl = isDevEnviroment
  ? 'http://localhost:3000'
  : 'https://sagramielgo-react-magicians.herokuapp.com';

const sendToApi = (data) => {
  return fetch(`${apiUrl}/card`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        success: false,
        error: 'Se ha producido un error. Inténtelo más tarde',
      };
    });
};

const exportObject = {
  sendToApi: sendToApi,
};
export default exportObject;
