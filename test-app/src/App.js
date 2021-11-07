import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { useCallback, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { MessageForm } from './components/MessageForm/MessageForm';


const textForMessage = 'Текст сообщения';

const userAutorName = 'user';

function App() {
  const [messageList, setMessageList] = useState([]);

  const spendMessage = useCallback((text) => {
    setMessageList([...messageList, {
      autor: userAutorName,
      text: text
    }]);
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <Message text={textForMessage} />
        <img src={logo} className="App-logo" alt="logo" />
        <MessageForm spendMessage={spendMessage} />
        <MessageList messageList={messageList} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
