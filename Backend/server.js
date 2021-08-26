//Setting up the server 
const express = require('express');
require("dotenv").config()
const connectionDB = require('./config/connection') 
connectionDB();
const app = express();
const PORT = process.env.PORT || 3001;  
const bodyParser = require("body-parser"); 

//Setting up the routes 
const userRoutes = require('./routes/api/user-routes');

//Setting up constant for the server  

app.use(express.json());

app.use('/api',userRoutes); 




  app.listen(PORT, () => {
    console.log(` server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  const stripe = require('stripe')('sk_test_51JScPcEl1HgJ8m1bY0Hl8USrAvKV4o5OEJviGzTGPPzXYs8cE6mPdu9v35jizPWQpd95xvZxXfyXA0kmWVWSKWJl00G8l1TEBV');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN =process.env.PORT || 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url)
});

app.listen(process.env.PORT ||4242, () => console.log(process.env.PORT ||'Running on port 4242'));

