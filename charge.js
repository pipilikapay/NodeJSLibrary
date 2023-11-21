const axios = require('axios');

// Assuming the endpoint URL where you want to make the POST request
const apiUrl = 'https://pay.your-domain.com/payment/api/create_payment'; // Replace with the actual API endpoint

const requestBody = {
    apiKey: 'YOUR-API-KEY',
    secretkey: 'YOUR-SECRET-KEY',
    amount: '100',
    fullname: 'Nobody',
    email: 'nobody@gmail.com',
    metadata: {
      customerID: '54634635634',
      orderID: '65443443',
    },
    successurl: 'https://your-domain.com/success.php',
    cancelurl: 'https://your-domain.com/cancel.php',
    webhookUrl: 'https://your-domain.com/webhook.php',
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