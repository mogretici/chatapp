import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Connecting...");

	socket = io("http://localhost:5000", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message) => {
	if (socket) socket.emit("new-message", message);
};

export const subscribeToChat = (cb) => {
  if (!socket) return;

	socket.on("receive-message", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

export const subscribeInitialMessages = (cb) => {
	if (!socket) return;

	socket.on("message-list", (messages) => {
		console.log("Initial", messages);
		cb(messages);
	});
};