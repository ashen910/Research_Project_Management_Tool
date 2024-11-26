import "./ChatApp.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import Card from 'react-bootstrap/Card';

const socket = io.connect("http://localhost:3001");

function ChatApp() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App"><br /><br /><br /><br />
<center><h1>Join Your Group Chat</h1></center>
                    <center>
                        <br />
                        {[
    'light',
  ].map((variant) => (
                        <Card       bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2">
      {!showChat ? (
        <div className="joinChatContainer">
          <div>
          <input
            type="text"
            placeholder="Itxxxxxx/Staffxxxxx"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          </div>
          <div>
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          </div><br />
          <div>
          <button onClick={joinRoom}>Join Your Chat Room</button> <br /> <br />
          </div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
        </Card>
                        ))}

                        <br /> <br /> <br /> <br />
                    </center>
    </div>
  );
}

export default ChatApp;
