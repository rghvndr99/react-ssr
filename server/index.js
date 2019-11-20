import config from '../config.js';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from "../src/components/Main";

const router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const serverRender = (req,res,next) => {
	fs.readFile(path.resolve('./dist/index.html'),'utf8',(err,data) =>{
		if(err) {
			return res.status(500).send('index file is not found');
		}
		return res.send(
			data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<Main />)}</div>`)
			)

	});
}

router.use('^/$',serverRender);
router.use(express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }));
app.use(router)

app.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});


