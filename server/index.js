import config from '../config.js';

import express from 'express';
import bodyParser from 'body-parser';
import { ServerStyleSheet } from 'styled-components';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from "../src/components/Main";
import Html from '../src/Markup';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {

	const body = ReactDOMServer.renderToString(<Main />);
	const title = 'Server side Rendering with Styled Components';
	const styleSheet = new ServerStyleSheet();
	const styles = styleSheet.getStyleTags();
	
	res.send(
		Html({body,title,styles})
	);
});

app.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});


