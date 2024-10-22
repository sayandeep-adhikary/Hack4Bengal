import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import { Container } from "@chakra-ui/react";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <Container my={5}>
      <div className="lobby-container">
        <div className="lobby-form libre-baskerville-regular">
          <div className="wrapper">
            <p className="lobby-heading">Lobby</p>
            <form onSubmit={handleSubmitForm}>
              <label className="label" htmlFor="email">
                Email ID
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ marginBottom: "1rem" }}></div>
              <br />
              <label className="label" htmlFor="room">
                Room Number
              </label>
              <input
                className="input"
                type="text"
                id="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
              <br />
              <button className="button">Join</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LobbyScreen;
