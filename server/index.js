import config from '../config.js';

import express from 'express';
import bodyParser from 'body-parser';
import { ServerStyleSheet } from 'styled-components';
import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from "../src/components/Main";
import Html from '../src/Markup';
import Reducer from '../src/reducer';
import { create } from 'domain';

const enhancer=compose(applyMiddleware(thunk));
const allReducers = combineReducers({Reducer});
const store = createStore(allReducers,{},enhancer);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {

	const body = ReactDOMServer.renderToString(<Provider store={store}><Main /></Provider>);
	const title = 'Server side Rendering with Styled Components';
	const styleSheet = new ServerStyleSheet();
	const styles = styleSheet.getStyleTags();
	const preLoadedState = store.getState();

	res.send(
		Html({body,title,styles,preLoadedState})
	);
});

app.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});


