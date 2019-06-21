import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString(<App />);

    res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

const port = 4242
server.listen(port, () => console.log(`Server is running on ${port}...`));