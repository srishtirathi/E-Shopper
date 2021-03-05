/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
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
  return (
    <div>
      <div>yay order placed </div>
      <div className="form-card">
        <form>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            E-mail:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
          </label>
          <label>
            Contact Number:
            <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
          <p>{this.state.message}</p>
        </form>
      </div>
    </div>
  );
}
}
export default withRouter(Checkout);
