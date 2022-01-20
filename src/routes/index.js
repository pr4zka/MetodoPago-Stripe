const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_51KB0k4LZITrZk5TFgTRegcK6FMQlL90c7J6OeIqSezSQ9fBsHTO3T5oGFY2PtnjfHEG3hzUjVvIjaXyj7oPJx8dN00WWnZ4eWA');
router.get('/', (req, res) => {
   res.render('index');
});


router.post('/checkout', async (req, res) => {
   const customer = await stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
   });
   const charge = await stripe.charges.create({
      amount: '3000',
      currency: 'usd',
      customer: customer.id,
      description: 'RedDragon dragonborn'
   });
   console.log(charge.id);
   res.render('download');
});


module.exports = router;