import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { MessageForm } from './components/MessageForm/MessageForm';


const textForMessage = 'Текст сообщения';

const userAutorName = 'user';
const robotAutorName = 'robot';
const robotFixtAnswer = 'Сообщение получено';

function App() {
  const [messageList, setMessageList] = useState([]);

  const spendMessage = useCallback((text) => {
    setMessageList([...messageList, {
      autor: userAutorName,
      text: text
    }]);
  }, [messageList]);

  useEffect(() => {
    if (messageList.length != 0 &&
      messageList[messageList.length - 1].autor === userAutorName) {
      let timerID = setTimeout(() => {
        setMessageList([...messageList, {
          autor: robotAutorName,
          text: robotFixtAnswer
        }])
      }, 1600);
    }

  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <Message text={textForMessage} />

        <MessageList messageList={messageList} />
        <MessageForm spendMessage={spendMessage} />
      </header>
    </div>
  );
}

export default App;
