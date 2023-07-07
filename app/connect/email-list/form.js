'use client';

import { useState, useTransition } from 'react';
import postContact from './post-contact';
import Spinner from './spinner';

export default function Form() {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (data) => {
    const name = data.get('name');
    const email = data.get('email');

    startTransition(() => {
      let message;

      postContact({ name, email })
        .then(json => {
          console.log(`json`, json);
  
          const errorMessage = json.ErrorMessage;
  
          if (json.Count > 0) {
            message = 'Success! Keep an eye out on your inbox updates';
          } else if (errorMessage && errorMessage.includes('already exists')) {
            message = 'Email is already subscribed';
          } else if (errorMessage && errorMessage.includes('properties invalid')) {
            message = 'Email is not formatted correctly';
          } else {
            message = 'Error. Try again or email davidkandomusic@gmail.com to be added manually.'
          }
  
          setMessage(message);
          setDisplayMessage(true);
        });
    });
  }

  return (
    <form action={handleSubmit} className="indent grid gap-[2px] w-[270px]">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <button
        type="submit"
        disabled={isPending}
        className={
          `bg-blue-700 text-center text-white w-[130px] h-[36px] mt-[4px]
          disabled:bg-slate-50 disabled:text-slate-500`
        }
      >
        {
        isPending
          ? (
            <span className="flex justify-center items-center h-[36px]">
              <Spinner /> Sending
            </span>
          )
          : 'Submit'
        }
      </button>
      {displayMessage ? message : <></> }
    </form>
  )
}
