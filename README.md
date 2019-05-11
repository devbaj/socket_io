# socket_io
DOJO / MEAN / EXPRESS
Practice with socket.io in an express server.
The project in /group_chat/ demos a possible file structure for **modularizing** your **socket files** by separating the server's listeners and emitters:
  1) `server.js` imports `listeners.js`
  2) `listeners.js` sets up our sockets and handles the opener connection. It listens for emits from the client.
  3) `listeners.js` imports `broadcasts.js` and `emits.js` from `/emitters/` and calls functions from them
  4) `emits.js` is a dictionary of functions, specifically emits (socket messages to a single client); it receives `socket` as a parameter, and is passed `socket` when called by `listeners.js`
	5) *broadcasts.js* is also a dictionary of functions, specifically broadcasts (either including or excluding the emitting client); it takes `socket` as a parameter and is passed either `socket` or `io` by `listeners.js`, depending on the desired functionality.

(both items 4 and 5 are annotated in `listeners.js` as well)
