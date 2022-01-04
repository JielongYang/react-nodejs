const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import routes from '../routes';
import getStore from '../store';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
    const str = renderToString(
        <Provider store={getStore()}>
            <StaticRouter location={req.path} context={{}}>
                {routes}
            </StaticRouter>
        </Provider>
    );
    const helmet = Helmet.renderStatic();
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>SSR</title>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
        </head>
        <body>
            <div id="root">${str}</div>
            <script src='./index.js'></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
});
