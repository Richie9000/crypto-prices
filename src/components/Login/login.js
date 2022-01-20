import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reduxActions } from '../../redux/app/app';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const clickSubmitHandler = () => {
    dispatch(reduxActions.storeUserInfo(formData));
  };

  const onChangeListener = (type, args) => {
    const newObj = formData;
    newObj[type] = args;
    setFormData(newObj);
  };
  return (
    <form className="login-wrapper">
      <h1 className="title-login">Welcome!</h1>
      <input className="input" onChange={(e) => { onChangeListener('name', e.target.value); }} placeholder="Name" type="Text" required />
      <input className="input" onChange={(e) => { onChangeListener('lastName', e.target.value); }} placeholder="Last Name" type="Text" required />
      <input className="input" onChange={(e) => { onChangeListener('email', e.target.value); }} placeholder="E-mail" type="Email" required />
      <input className="input" onChange={(e) => { onChangeListener('phoneNumber', e.target.value); }} placeholder="Phone Number" max="10" type="Text" required />
      <button className="submit" type="button" onClick={() => { clickSubmitHandler(); }} required>SUBMIT</button>
    </form>
  );
};
export default Login;
