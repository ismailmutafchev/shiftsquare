import { useCallback, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { Navigate } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe(
  "pk_test_51PihYpE7LxujRcaNA9B1hGsyHgIDNLLjiZ0KMapoxQtg6yI2VzyitloVk6MOklKrSk7vOw2GQqOo8fyMrwWaSZeq00N7h2k9L5"
);

export const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(
      "https://7vxuwb2bf6ifaow6bypl7hwikm0bcjeu.lambda-url.eu-west-2.on.aws/",
      {
        method: "POST",
        // mode: 'cors',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        //   'Origin': 'http://localhost:5173/',
        //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        // },
        body: JSON.stringify({
          items: [{ id: "photo-subscription", priceId: "price_1" }],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => data.clientSecret);
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

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
};
