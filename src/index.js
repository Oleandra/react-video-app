import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Home from './containers/Home';
import data from './api.json';


ReactDOM.render(<Home data={data} />, document.getElementById('root'));

