import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const url = import.meta.env.VITE_STRIPE_AWS_LAMBDA_RETURN_URL;

export const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState("");
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get("session_id");
  
      fetch(url, {
          method: "POST",
          body: JSON.stringify({
              sessionId,
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customerEmail);
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
  