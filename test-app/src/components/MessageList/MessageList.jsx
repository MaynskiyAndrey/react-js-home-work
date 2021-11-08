import React, { useEffect, useRef } from 'react'
import './MessageList.css'

export const MessageList = ({ messageList }) => {

	const formRef = useRef(null);

	useEffect(() => {
		formRef.current.scrollTop = formRef.current.scrollHeight;
	}, [messageList]);

	const result = (<div ref={formRef} className="list">
		{messageList.map((message) => <div className="messageItem">
			<p className="autor">{message.autor} :</p>

			<p className="text"> {message.text}</p> </div>)}
	</div>);

	return result;
}

