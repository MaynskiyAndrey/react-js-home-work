import React, { useState } from 'react'

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
		<form onSubmit={targetSubmit}>
			<input type="text" value={text} onChange={targetChangeValue} />
			<input type="submit" />
		</form>
	);
}