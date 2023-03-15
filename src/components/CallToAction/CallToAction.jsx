import React from 'react';
import './CallToAction.css';

function validate(input) {
  const errors = {};
  if (input.email && !/\S+@\S+\.+\S+/.test(input.email)) {
    errors.email = 'Debe ser un correo válido.';
  }
  return errors;
}

function CallToAction() {
  const [errors, setErrors] = React.useState({});
  const [userInfo, setUserInfo] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userInfo,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    console.log('userInfo', userInfo);
    e.preventDefault();
    if (userInfo.email && !errors.email) {
      return alert('enviado con exito');
    } else {
      return alert('revisa tu email');
    }
  };

  return (
    <div className='callToAction'>
      <p className='newsletter'>NEWSLETTER</p>
      <h2>SUSCRIBITE</h2>
      <p>Y enterate de todas las novedades</p>
      <div className='inputNewsletter'>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Ingresa tu email'
          onChange={(e) => handleChange(e)}
        />
        <button type='clic' onClick={(e) => handleSubmit(e)}>
          <i className='bx bx-right-arrow-alt'></i>
        </button>
      </div>
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
    </div>
  );
}

export default CallToAction;
