const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const PORT = 3000;

const Stripe = require("stripe");
const stripe = Stripe('sk_test_51OEQmdSG5xD30nhKMLK4yLUXyfTk2JGb0zAYN29sAoNcw4yLKJeOPfqsiSQnnqwQSUHlPWANBR5KUKDxMJFAIbpP00xn3jV56D');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.post("/create-payment-intent", (req, res) => {
  stripe.paymentIntents.create(
    {
      amount: parseInt(req.body.amount),
      currency: "inr",
      payment_method_types: ["card"],
    },
    function (err, paymentIntent) {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).json(paymentIntent);
      }
    }
  );
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
