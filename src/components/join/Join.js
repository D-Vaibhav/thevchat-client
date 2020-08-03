import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Join.css';

const Join= () => {
    const [name, setName]= useState('');
    const [room, setRoom]= useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join the Room</h1>
                <div><input type='text' className='joinInput' placeholder='Name' required  onChange={ event => setName(event.target.value)} /></div>
                <div><input type='text' className='joinInput mt-20' placeholder='Room' required  onChange={ event => setRoom(event.target.value)} /></div>
                
                {/* onClick is to check wheather the name and room input is there, else it'll prevent defalult */}
                <Link onClick={ event => (!name || !room) ? event.preventDefault : null } to={`/chat?name=${name}&room=${room}`}>
                    <button type='submit' className='Button mt-20'>Sign-In</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;