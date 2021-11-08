import React, { useState } from 'react'
import './MessageForm.css'

export const MessageForm = ({ spendMessage }) => {
	const [text, setText] = useState('');


	const targetChangeValue = (e) => {
		setText(e.target.value);
	}

	const targetSubmit = (e) => {
		e.preventDefault();
		spendMessage(text);
		setText('');
	}

	return (
		<form onSubmit={targetSubmit} className="messageForm">
			<input type="text" value={text} className="formTextMessage" onChange={targetChangeValue} />
			<input type="submit" className="submitButton" />
		</form>
	);
}