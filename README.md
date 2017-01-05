# Cross domain local storage test

This test project experiments with [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to enable a type of cross domain local storage.

The project consists of two servers `http://localhost:5000` (Server 1) and `http://localhost:5001` (Server 2). When accessing Server 1 you'll see Server 2 inside an iframe and are able to interact between the two.

To start both servers run `npm start`.
