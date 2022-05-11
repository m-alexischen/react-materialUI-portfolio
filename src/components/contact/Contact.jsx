import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
    const [message, setMessage] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setMessage(true);
    };

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/contact.png' alt='' />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='Email' />
                    <textarea placeholder='Message' />
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
};

export default Contact;