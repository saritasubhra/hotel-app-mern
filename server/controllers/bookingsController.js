const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res, next) => {
  try {
    const { product } = req.body;
    console.log("product", product);

    const lineItems = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.roomname,
            images: [product.image],
          },
          unit_amount: product.totalAmount * 100,
        },
        quantity: 1,
      },
    ];
    console.log("lineItem", lineItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/purchase-success",
      cancel_url: "http://localhost:5173/purchase-cancel",
    });

    console.log("session", session);

    res.status(201).json({
      status: "success",
      session,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCheckoutSession };
