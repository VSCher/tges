import React from 'react';
import { render } from 'react-dom';

// Models
import Bank from "./client/models/bank";

// Compoents
import Application from './client/app.jsx';
import Client from "./client/models/client";


const bank = new Bank({ name: 'TGES Bank' });
const client = new Client({ name: 'Client #1', money: 0 });

render(<Application bank={bank} client={client} />, document.querySelector('#tges'));