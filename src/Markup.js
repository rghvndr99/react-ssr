const Html = ({ body, title, styles, preLoadedState={} }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
      <script>
          window.__PRELOADED_STATE__= ${JSON.stringify(preLoadedState)}
      </script>
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;