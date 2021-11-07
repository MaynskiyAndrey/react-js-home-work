import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';

const textForMessage = 'Текст сообщения';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={textForMessage} />
        <img src={logo} className="App-logo" alt="logo" />
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
