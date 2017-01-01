import React from 'react';
import { render } from 'react-dom';

// Models
import Bank from "./client/models/bank";

// Compoents
import Application from './client/app.jsx';


const bank = new Bank({ name: 'TGES Bank' });

render(<Application bank={bank}/>, document.querySelector('#tges'));