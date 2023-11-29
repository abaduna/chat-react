import "./App.css";
import	{useState, useEffect,useRef} from "react"
import { Auth } from "./componets/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./componets/Chats";

const cookies = new Cookies();
function App() {
  const token = cookies.get("auth-token")
  const [isAuth, setIsAuth] = useState(token);
  
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null) 
  console.log(isAuth);
  console.log(cookies.get("auth-token"));
  if (!isAuth) {
    return (
      <div>
        
        <Auth room={room} setIsAuth={setIsAuth} />
      </div>
    );
  }

  return <div  className="App">{room ? 
  <Chat room={room}></Chat> 
  : <div className="room">
    <lable>Enter Roon name:</lable>
    <input ref={roomInputRef}></input>
    <button onClick={()=>{
      setRoom(roomInputRef.current.value)
      console.log(`r${room}`);
    }  } >Entre chat</button>
  </div>
  }</div>;
}

export default App;
