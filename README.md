## Problem
sometimes getting past authentication/verification to connect to a socket is difficult.

## Solution
Start a local socket-server in browser that redirects internal socket information to localhost.

```
yarn install
yarn watch
```
then use the 'chrome://extensions' `load unpacked` option to load the `dist` folder.

You can then inspect the background page console and navigate to some websocket sites, you can start one quickly at "http://websocket.org/echo.html" and you'll see the connection start in the background console.