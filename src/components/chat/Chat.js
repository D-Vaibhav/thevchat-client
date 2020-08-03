import React,{ useState, useEffect} from 'react';
import queryString from "query-string";        // help to retrive the data from url
import io from 'socket.io-client';              // for realtime client side connection/disconnection

import './Chat.css';

// other components assisting this component
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

let socket;

// the queryString is responsible for sending props to the component
const Chat= (props) => {
    const [name, setName]= useState('');
    const [room,setRoom]= useState('');

    // messages array will be having multiple message
    const [messages, setMessages]= useState([]);
    const [message, setMessage]= useState('');

    // server end point if heroku not used its = 'localhost:5000'
    const ENDPOINT= 'https://vaibhav-react-chat-app.herokuapp.com/';
    // now opening through this heroku url

    // For Join Emitter
    useEffect( () => {
        const data= queryString.parse(props.location.search);

        // setting socket on connection as soon as name and room entered
        socket= io(ENDPOINT);
        // setting name and room for the new user
        setName(data.name);
        setRoom(data.room);

        // emitting socket event specified in server-side ie. 'join' and 'disconnect' while last is CallBack() passed from the socket
        socket.emit('join', {name: data.name, room: data.room }, () => {});

        // CleanUp code for the useEffect Unmounting
        return () => {
            // we'll simply free the socket after disconnection
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, props.location.search]);



    // this is to handle the messages
    useEffect( () => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

    }, [messages]);


    // for sending message
    const sendMessage= (event) => {
        // to avoid refreshing of the page
        event.preventDefault();
        
        if(event){
            socket.emit('sendMessage', message, () => setMessage(''));  // after sending it'll clear the message
        }

        console.log(message, messages);
    }

    // for rendering the main data
    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={ setMessage} sendMessage={ sendMessage} />
            </div>
        </div>
    )
}
export default Chat;