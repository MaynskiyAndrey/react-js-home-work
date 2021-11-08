import React, { useEffect, useRef, useState } from 'react'
import './MessageForm.css'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';

export const MessageForm = ({ spendMessage }) => {
	const [text, setText] = useState('');

	const textRef = useRef();

	useEffect(() => { textRef.current.focus(); }, []);

	const targetChangeValue = (e) => {
		setText(e.target.value);
	}

	const targetSubmit = (e) => {
		e.preventDefault();
		spendMessage(text);
		setText('');
		textRef.current.focus();
	}

	return (
		<form onSubmit={targetSubmit} className="messageForm">
			<TextField id="filled-basic" label="Filled" variant="filled" value={text} onChange={targetChangeValue} className="formTextMessage" inputRef={textRef} />
			<Button variant="outlined" type="submit">Отправить</Button>
		</form>
	);
}