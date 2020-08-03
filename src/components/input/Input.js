import React from 'react';
import './Input.css';

const Input= ({ message, setMessage, sendMessage}) => {
    return (
        <div>
           <form className='form'>
               <input
                className='input'
                type="text"
                placeholder='Bol ki labh aazad hai tere...'
                value= {message}
                onChange= { event => setMessage(event.target.value)}
                onKeyPress= { event => event.key === 'Enter' ? sendMessage(event) : null}
               />

               <button className='sendButton' onClick={ event => sendMessage(event) } >ch@^@</button>
           </form>
        </div>
    )
}
export default Input;
