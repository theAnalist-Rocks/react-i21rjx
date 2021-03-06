import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Header() {
  return (
    <div className="head">
      {' '}
      <div id="sp"> Chat Room </div>
    </div>
  );
}

function InputMessage(props) {
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    //setMessage(e.target.value);
    if (message === '') {
      alert("Entrez un message s'il vous plaît");
    } else {
      props.handleSubmit(message);
      setMessage('');
      const docElement = document.getElementById("textfield")
      docElement.setAttribute("value", "")
      e.preventDefault();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        className="field"
        id="textfield"
      />
      <input type="submit" value="Send" className="field" id="submit" />
    </form>
  );
}

function MessageList(props) {
  const data = props.data;
  const items = data.map((mes, index) => <li key={index}>{mes}</li>);
  return (
    <div id="wrapper">
      <ul>{items}</ul>
    </div>
  );
}

function Messages(props) {
  const [messages, setMessage] = useState(props.data);

  function sendMsg(msg) {
    setMessage([...messages, msg]);
  }

  return (
    <div>
      <Header />
      <MessageList data={messages} />
      <InputMessage handleSubmit={sendMsg} />
    </div>
  );
}

const msg = [];
ReactDOM.render(<Messages data={msg} />, document.getElementById('root'));
