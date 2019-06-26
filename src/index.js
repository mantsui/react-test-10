import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ConfigDialog from './ConfigDialog.js';

ReactDOM.render(
    <ConfigDialog />, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();


//import App from './App';
//ReactDOM.render(<App />, document.getElementById('root'));


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Pill } from '@tableau/tableau-ui'
import { DropdownSelect } from '@tableau/tableau-ui'

const items = [
    { value: 'alpha'},
    { value: 'bravo'},
    { value: 'charlie'},
    { value: 'delta'},
    { value: 'echo'}
]

const makeOption = (item, index) => 
    <option disabled={item.disabled || item.separator} key={index} value={item.value}>{item.value}</option>;

const initialState = {value: 'alpha'};


ReactDOM.render(
    <>
        <div style={{width: 150}}>
            <Pill kind='discrete'>Discrete</Pill><br/>
            <Pill kind='continuous'>Continuous</Pill><br/>
            <Pill kind='other'>Other</Pill><br/>
            <Pill kind='invalid'>Invalid</Pill><br/>
        </div>
        <DropdownSelect kind='line'>
            {items.map(makeOption)}
        </DropdownSelect>
    </>, 
    document.getElementById('root')
);
*/