const axios = require('axios');

// Assuming the endpoint URL where you want to make the POST request
const apiUrl = 'https://pay.your-domain.com/payment/api/verify_payment'; // Replace with the actual API endpoint

const requestBody = {
    apiKey: 'YOUR-API-KEY',
    secretkey: 'YOUR-SECRET-KEY',
    paymentID: '546363',
};

// Making the POST request using axios
axios.post(apiUrl, requestBody)
  .then(response => {
    console.log('Response received:', response.data);
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error occurred:', error.message);
    // Handle the error here
  });