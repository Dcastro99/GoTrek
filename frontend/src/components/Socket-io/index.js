import React, { useEffect, useRef, useState } from "react"
import TextField from "@mui/material/TextField"
import '../../assets/styles/chat.css'
import io from "socket.io-client"

function Chat() {
  const [state, setState] = useState({ message: "", name: "" })
  const [chat, setChat] = useState([])

  const socketRef = useRef()

  useEffect(
    () => {
      socketRef.current = io.connect("ws://localhost:3000")
      socketRef.current.on("message", ({ name, message }) => {
        setChat([...chat, { name, message }])
      })
      return () => socketRef.current.disconnect()
    },
    [chat]
  )

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = (e) => {
    const { name, message } = state
    socketRef.current.emit("message", { name, message })
    e.preventDefault()
    setState({ message: "", name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Hiker</h1>
        <div className="name-field">
          <TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button id='button'>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>GoTrek Chat</h1>
        {renderChat()}
      </div>
    </div>
  )
}

export default Chat
