import React from 'react';
import styles from './Chat.module.css';

const ChatItem = (props) => {
    const {body, id, user} = props.msg;

        return (
            <article className={styles.msg}>

                <img className={styles.useravatar}
                src={user.imageSrc ? user.imageSrc : 'https://robohash.org/avatar_not_found?set=set2'}
                alt={user.username} 
                />
                <div className={styles.wrapper}>
                    <p>{user.username}</p>
                    <p>{body}</p>
                </div>

            </article>
        )
}

export default ChatItem;
