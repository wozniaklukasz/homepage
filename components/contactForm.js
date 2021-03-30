// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import style from './contactForm.module.css';
import * as gtag from '../lib/gtag'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayawojj");
  if (state.succeeded) {
    return <p>Thanks for message!</p>;
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: e.target[1].value, // textarea submitted value
    })

    await handleSubmit(e);
  }

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        className={style.input}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className={style.input}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button className={style.button}
              type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
