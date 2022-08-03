import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Connecting...");

	socket = io("redis://:p833c1d5457abda96b032eb6ac10764b39e087bf7cf2b7b4f805e1eec7ef4812d@ec2-52-211-91-28.eu-west-1.compute.amazonaws.com:13750", {
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