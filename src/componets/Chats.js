import { useEffect, useState } from "react"
import { addDoc, orderBy } from "firebase/firestore"; 
import {db} from "../confiar/firebase"
import { collection,serverTimestamp,onSnapshot, query,where } from "firebase/firestore"
import "./../styles/Chats.css"
import {auth} from "../confiar/firebase"
export const Chat = ({room})=>{
    const [newMessage,setNewMessage] = useState("")
    const [messagesMap,setMessageeMap] = useState([])
    const messagesRef =  collection(db,"messages")



    useEffect(()=>{
        

            console.log(room);
            const queryMessages = query(messagesRef, 
                where('room', '==', room),
                orderBy("createdAt"));
            
            const unscribe =  onSnapshot(queryMessages, (snapshot) => {
                
                const updatedMessages = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }));
            setMessageeMap(updatedMessages)                
            });
            return ()=> unscribe()

    },[])

    const handlerSubmit =async(e)=>{
        e.preventDefault();
        if (newMessage === "")  return
        console.log(newMessage);
        console.log(auth.currentUser.displayName);
        console.log(room);
        try {
        await addDoc(messagesRef,{
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room:room,

        })            
        } catch (error) {
            console.error(error);
        }

        
        
        setNewMessage("")

    }

    return <div className="chat-app">
        <h1>Chat</h1>
        <div className="header">
            <h1>Bienvenido a {room} </h1>
        </div>
        
        <div className="messegas ">{messagesMap.map(
            (message)=>(
                <div className="message" key={message.id}>
                  <spam className="user">{message.user} </spam> 
                  <spam className="text">{message.text} </spam>   
                </div>
            

            ) )} 
        </div>
        <form onSubmit={handlerSubmit} className="new-message-form">
            <input 
                className="new-message-input " 
                placeholder="escribi tu mensaje aqui"
                onChange={(e)=>setNewMessage(e.target.value)}
                value={newMessage}/>
            <button 
                className="send-button"
                type="submit">
            Send
            </button>
        </form>
    </div>
}