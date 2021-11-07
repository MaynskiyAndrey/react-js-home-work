import React from 'react'

export const MessageList = ({ messageList }) => {
	return messageList.map((message) => <div><p>{message.autor}: {message.text}</p> </div>)
}

