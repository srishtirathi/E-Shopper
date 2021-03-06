/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './Checkout.css';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      contact: '',
      email: '',
      message: '',
    };
  }

handleChange=(event) => {
  // if (event.target.name === 'contact' && this.target.value.length > 10) {
  //   this.setState({ [event.target.name]: event.target.value, message: 'Not valid' });
  // } else {
  this.setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }), () => {
    const { name, phone } = this.state;
    console.log(name, phone);
  });
}
// }

render() {
  const {
    name, email, address, contact, message,
  } = this.state;
  return (

    <div className="checkout-card">
      <h1>Yayy! Your order is placed.</h1>
      <div className="form-card">
        <form>
          <label>
            Name:
          </label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <br />
          <label>
            E-mail:
          </label>

          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <br />
          <label>
            Address:
          </label>
          <input type="text" name="address" value={address} onChange={this.handleChange} />
          <br />
          <label>
            Contact Number:
          </label>
          <input type="text" name="contact" value={contact} pattern="[0-9]{10}" onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="submit" />
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
}
export default withRouter(Checkout);
