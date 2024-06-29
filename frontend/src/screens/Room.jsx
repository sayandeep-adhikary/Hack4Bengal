import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";

// icon
import { MdCallEnd, MdCall } from "react-icons/md";
import { BsFillMicMuteFill } from "react-icons/bs";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [connectedMessage, setConnectedMessage] = useState(true);
  const [showSendStream, setShowSendStream] = useState(true);
  const [showCall, setShowCall] = useState(true);
  const [waitMessage, setWaitMessage] = useState(false);
  const navigate = useNavigate();

  // const [muteBtn, setMuteBtn] = useState(false);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    if (peer.peer) {
      peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    }
    return () => {
      // peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
      if (peer.peer) {
        peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
      }
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  // new functions
  const hideCallBtn = () => {
    setShowCall(false);
    setWaitMessage(true);
    setShowSendStream(false);
    setConnectedMessage(false);
  };

  const acceptCallFunc = () => {
    // setMuteBtn(true);
    setShowSendStream(false);
  };

  const disconnectCall = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach((track) => track.stop());
      setMyStream(null);
    }

    if (remoteStream) {
      remoteStream.getTracks().forEach((track) => track.stop());
      setRemoteStream(null);
    }

    if (peer.peer) {
      peer.peer.close();
      peer.peer = null;
    }

    setRemoteSocketId(null);
    setConnectedMessage(true);
    setShowSendStream(true);
    setShowCall(true);
    setWaitMessage(false);
  }, [myStream, remoteStream]);

  return (
    <div className="room-container">
      {myStream && (
        <div className="screens">
          {remoteStream && (
            <>
              {/* <h1>Remote Stream</h1> */}
              <div className="remoteStream">
                <ReactPlayer
                  playing
                  // muted
                  height="80vh"
                  width="80vw"
                  url={remoteStream}
                />
              </div>
            </>
          )}
          {myStream && (
            <>
              {/* <h1>My Stream</h1> */}
              <div className="myStream">
                <ReactPlayer
                  playing
                  // muted
                  height="30vh"
                  width="30vh"
                  url={myStream}
                />
              </div>
            </>
          )}
        </div>
      )}

      <div className="other-content">
        {/* new code */}
        {!remoteSocketId && (
          <>
            <p className="welcome-text">Welcome!</p>
            <p className="wait-text">
              Please wait for other user to connect...
            </p>
          </>
        )}
        {remoteSocketId && !remoteStream && connectedMessage && (
          <p className="welcome-text">Connected!</p>
        )}
        {/* new code */}
        {/* <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4> */}

        <div className="btns-grp">
          {myStream && remoteStream && showSendStream && (
            <button
              className="accept-btn"
              onClick={() => {
                sendStreams();
                acceptCallFunc();
              }}
            >
              <MdCall></MdCall>
            </button>
          )}
          {remoteSocketId && !remoteStream && showCall && (
            <button
              className="call-btn"
              onClick={() => {
                handleCallUser();
                hideCallBtn();
              }}
            >
              Call
            </button>
          )}
          {remoteStream && (
            <>
              {/* {muteBtn && (
                <button className="mute-btn">
                  <BsFillMicMuteFill />
                </button>
              )} */}
              <button
                onClick={() => {
                  disconnectCall();
                  navigate(-1);
                }}
                className="end-btn"
              >
                <MdCallEnd></MdCallEnd>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
