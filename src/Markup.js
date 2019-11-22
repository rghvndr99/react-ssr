const Html = ({ body, title, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;