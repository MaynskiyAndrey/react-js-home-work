import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { MessageForm } from './components/MessageForm/MessageForm';
import { CONSTANTS } from './utils/constants';
import { uuid } from 'uuidv4';
import { List, ListItemButton, ListItemText } from '@mui/material';

function App() {
  const [chatList, setChatLis] = useState([
    { name: 'Чат 1', id: uuid() },
    { name: 'Чат 2', id: uuid() },
    { name: 'Чат 3', id: uuid() }
  ]);

  const [messageList, setMessageList] = useState([]);

  const spendMessage = useCallback((text) => {
    setMessageList([...messageList, {
      autor: CONSTANTS.userAutorName,
      text: text,
      id: uuid(),
    }]);
  }, [messageList]);

  useEffect(() => {
    if (messageList.length &&
      messageList[messageList.length - 1].autor === CONSTANTS.userAutorName) {
      let timerID = setTimeout(() => {
        setMessageList([...messageList, {
          autor: CONSTANTS.robotAutorName,
          text: CONSTANTS.robotFixtAnswer,
          id: uuid(),
        }])
      }, 1600);
    }

  }, [messageList]);

  return (
    <div className="App">

      <div className="container">
        <div className="chatList">
          <List>
            {
              chatList.map((chat) => <ListItemButton component="a" href="#">
                <ListItemText primary={chat.name} />
              </ListItemButton>)
            }
          </List>
        </div>
        <div>
          <Message text={CONSTANTS.textForMessage} />
          <MessageList messageList={messageList} />
          <MessageForm spendMessage={spendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
