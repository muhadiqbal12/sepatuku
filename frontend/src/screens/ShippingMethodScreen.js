import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [shippingMethod, setShippingMethod] = useState('JNE');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingMethod(shippingMethod));
    props.history.push('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="JNE"
              value="JNE"
              name="ShippingMethod"
              required
              checked
              onChange={(e) => setShippingMethod(e.target.value)}
            ></input>
            <label htmlFor="JNE">JNE</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="JandT"
              value="JandT"
              name="ShippingMethod"
              required
              onChange={(e) => setShippingMethod(e.target.value)}
            ></input>
            <label htmlFor="JandT">JandT</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}