import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';


const textForMessage = 'Текст сообщения';

function App() {
  const [messageList, setMessageList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Message text={textForMessage} />
        <img src={logo} className="App-logo" alt="logo" />
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
