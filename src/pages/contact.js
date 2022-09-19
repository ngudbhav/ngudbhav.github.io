import React, { useCallback } from 'react';

import Box from 'components/Box';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import ContactImage from 'images/contact.gif';
import 'styles/pages/contact.scss';

const CLASSNAME = 'contact';

const Form = () => {
  const handleSubmit = useCallback(event => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('submit', data);
  }, []);

  return (
    <form onSubmit={handleSubmit} method="POST" className={`${CLASSNAME}__form flex-col`}>
      <input type="text" placeholder="Your Name" autoComplete="name" className={`${CLASSNAME}__form-input`} />
      <br />
      <input type="email" placeholder="Your Email" autoComplete="email" className={`${CLASSNAME}__form-input`} />
      <br />
      <textarea placeholder="Message" className={`${CLASSNAME}__form-text-area`} />
      <br />
      <button type="submit" className={`${CLASSNAME}__form-submit`}>Submit</button>
    </form>
  );
};

const Contact = () => (
  <>
    <NavBar />
    <Header
      text1="Send me a Message"
      text2="I am very responsive and will get back to you as soon as possible."
      className={CLASSNAME}
    >
      <img src={ContactImage} alt="Contact Udbhav Gambhir" />
    </Header>
    <section className={`${CLASSNAME}__container`}>
      <Box className={`${CLASSNAME}__main`} component="div">
        <Form />
      </Box>
    </section>
  </>
);

export default Contact;
