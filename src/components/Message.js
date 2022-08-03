import React from "react";
import PropTypes from 'prop-types';

const Message =({message, author}) =>(
    <div style={{display:'block' ,float: author === 'Me ' ? 'right' : 'left'}}>
        <i>{author}</i>: {message}
    </div>
)
Message.propTypes ={
    message : PropTypes.string.isRequired,
    author :PropTypes.string.isRequired
}
export default Message;