'use strict';

/** @type {module} nodejs-websocket */
var ws = require('nodejs-websocket'),
    /** @type {Server} */
    server = ws.createServer((conn) => {
        conn.on('text', (str) => {
            console.log(`Received ${str}`);
            broadcast(str);
        });
    }).listen(8001),
    /**
     * Broacast message
     * @param {String} msg
     */
    broadcast = (msg) => {
        console.log(`broadcasting message ${msg}`);
        server.connections.forEach((conn) => {
            conn.sendText(msg);
        });
    };

