import React from "react";
import { useState } from "react";

const OnChange = () => {
  const [nama, setNama] = useState("Guest");
  const [payment, setPayment] = useState("");

  const handleNameChange = (event) => {
    setNama(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  return (
    <>
      <input onChange={handleNameChange} />
      <p>Nama: {nama}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
    </>
  );
};

export default OnChange;
