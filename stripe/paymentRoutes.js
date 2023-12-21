const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
  try {
    // Extract items from the request body
    const { items, success_url, cancel_url } = req.body;

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url,
      cancel_url,
    });

    // Send the session ID back to the client
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating Checkout Session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
