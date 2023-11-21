# Node.JS Example Code

This is a simple Node.JS checkout example of PipilikaPay.


### NOTE: 
#### Checkout-V1 => All response will send into webhook url with REST API CALL.

# Checkout-V1 Documents

## Step 1: Create Charge Checkout-V1

Here you will get charge response into response variable.

```bash
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
```


## Checkout-V1 Charge Response Example:

```bash
[ 
    {
      "status": "success",
      "paymentID": "54646345345",
      "paymentURL": "https://pay.your-domain.com/payment/portal?ref=34645634634635"
    }
]
```


## Step 2: Complete Payment

## Step 3: Get Response & Verify Payment

Here you will get webhook response into response variable.

```bash
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
```

## Checkout-V1 Webhook Response Example:
```bash
      {
        "status": "success",
        "paymentID": "54646345345",
        "paymentURL": "https://pay.your-domain.com/payment/portal?ref=34645634634635"
      }
```

Enjoy
