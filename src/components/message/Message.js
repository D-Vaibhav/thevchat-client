import React from 'react';
import './Message.css';

// for the emoji in messages
import ReactEmoji from 'react-emoji';

const Message= ({message: { user, text}, name}) => {
    let isSentByCurrentUser= false;

    const trimmedName= name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser=true;
    }


    return (
       isSentByCurrentUser
       ? (
        <div className='messageContainer justifyEnd'>
            <p className='sentText pr-10'> {trimmedName}</p>

            <div className='messageBox backgroundBlue'>
                {/* passing text to check for emoji using emojify() */}
                <p className='messageText'> { ReactEmoji.emojify(text) }</p>
            </div>
        </div>
       )
       : (
        <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundLight'>
                <p className='messageText colorDark'> {text}</p>
            </div>

            <p className='sentText pl-10'>{user}</p>
        </div>
       )
    )
}
export default Message;
