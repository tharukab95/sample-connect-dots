const path = require('path');
const express = require('express'),
const asyncHandler = require('express-async-handler');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.use(passport.authenticate('jwt', { session: false }));

const router = express.Router();
module.exports = router;

const env = require("dotenv");
if (env.error) {
  throw new Error(`Unable to load the .env file from ${envFilePath}. Please copy .env.example to ${envFilePath}`);
}

router.use(express.static(process.env.STATIC_DIR));
router.use(express.urlencoded());
router.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

router.route('/').get(asyncHandler(getStaticDir));

router.route('/checkout-session').get(asyncHandler(getCheckoutSession));

router.route('/create-checkout-session').post(asyncHandler(createCheckoutSession));

router.route('/config').get(asyncHandler(getConfig));

router.route('/customer-portal').post(asyncHandler(customerPortal));

router.route('/webhook').post(asyncHandler(webhook));

async function getStaticDir(req, res){
  const filePath = path.resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(filePath);
};

// Fetch the Checkout Session to display the JSON result on the success page
async function getCheckoutSession (req, res) {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
};

async function createCheckoutSession (req, res) {
  // const domainURL = process.env.DOMAIN;
  const { priceId } = req.body;
  const { successUrl} = req.body;
  const { failureUrl } = req.body;

  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: failureUrl,
    });
    return res.send({sessionId: session.id, publicKey: process.env.STRIPE_PUBLISHABLE_KEY});
    // return res.redirect(300, session.url);
  } catch (e) {
    res.status(400);
    return res.send({
      error: {
        message: e.message,
      }
    });
  }
};

async function getConfig (req, res) {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    basicPrice: process.env.BASIC_PRICE_ID,
    proPrice: process.env.PRO_PRICE_ID,
  });
};

async function customerPortal (req, res) {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { sessionId } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = process.env.DOMAIN;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl,
  });

  res.redirect(303, portalSession.url);
};

// Webhook handler for asynchronous events.
async function webhook (req, res) {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed") {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
};
