import React, { useState } from 'react'
import './MessageForm.css'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';

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
			<TextField id="filled-basic" label="Filled" variant="filled" value={text} onChange={targetChangeValue} className="formTextMessage" />
			<Button variant="outlined" type="submit">Отправить</Button>
		</form>
	);
}