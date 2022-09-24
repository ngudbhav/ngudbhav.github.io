import React from 'react';

import Box from 'components/Box';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import { submit } from 'utils/handlers/form';
// import ContactImage from 'images/contact.gif';
import 'styles/pages/contact.scss';

const CLASSNAME = 'contact';

const Form = () => (
  <form onSubmit={submit} method="POST" className={`${CLASSNAME}__form flex-col`}>
    <input type="text" placeholder="Your Name" autoComplete="name" className={`${CLASSNAME}__form-input`} />
    <br />
    <input type="email" placeholder="Your Email" autoComplete="email" className={`${CLASSNAME}__form-input`} />
    <br />
    <textarea placeholder="Message" className={`${CLASSNAME}__form-textarea`} rows="4" />
    <br />
    <button type="submit" className={`${CLASSNAME}__form-submit`}>Submit</button>
  </form>
);

const Contact = () => (
  <>
    <NavBar />
    <Header
      text1="Send me a Message"
      text2="I am very responsive and will get back to you as soon as possible."
      className={CLASSNAME}
    />
    <section className={`${CLASSNAME}__container`}>
      <Box className={`${CLASSNAME}__main`} component="div">
        <Form />
      </Box>
    </section>
  </>
);

export default Contact;
