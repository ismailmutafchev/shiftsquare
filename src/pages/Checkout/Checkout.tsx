import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_TEST_KEY;
const url = import.meta.env.VITE_STRIPE_AWS_LAMBDA_ENDPOINT;
const stripePromise = loadStripe(stripeKey as string);

export const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        priceId: "price_1PjPOaE7LxujRcaNb5gXVps3",
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        return data.clientSecret;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

