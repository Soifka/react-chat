import React, { useState } from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
    const [inputMessage, setMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitMessage(inputMessage);
    }

    const changeHandler = ({target: {value}}) => {
        setMessage(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea
                value={inputMessage}
                onChange={changeHandler} 
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default MessageArea;
