/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, useState } from 'react';
import './Checkout.css';
import { withRouter } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const handleChange = (event) => {
  // // if (event.target.name === 'contact' && this.target.value.length > 10) {
  // //   this.setState({ [event.target.name]: event.target.value, message: 'Not valid' });
  // // } else {
  //   this.setState((prevState) =>
  // ({ ...prevState, [event.target.name]: event.target.value }), () => {
  //     const { name, phone } = this.state;
  //     console.log(name, phone);
  //   });
  // };
  // }

  return (

    <div className="checkout-card">
      <h1>Yayy! Your order is placed.</h1>
      <div className="form-card">
        <form>
          <label>
            Name:
          </label>
          <input type="text" name="name" value={name} onChange={(event) => { setName(event.target.value); }} />
          <br />
          <label>
            E-mail:
          </label>

          <input type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value); }} />
          <br />
          <label>
            Address:
          </label>
          <input type="text" name="address" value={address} onChange={(event) => { setAddress(event.target.value); }} />
          <br />
          <label>
            Contact Number:
          </label>
          <input type="text" name="contact" value={contact} pattern="[0-9]{10}" onChange={(event) => { setContact(event.target.value); }} />
          <br />
          <br />
          <input type="submit" value="submit" />
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Checkout);
