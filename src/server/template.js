import React from 'react'
import App from '../components/App'
function template(content = ""){
  let page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="assets/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="assets/manifest.json" />
      <title>React App</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${content}</div>
      <script src="assets/client.js"> </script>
    </body>
  </html>`;
  return page;
}
module.exports = template;
