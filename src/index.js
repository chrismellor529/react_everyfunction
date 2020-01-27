import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

serviceWorker.unregister();
