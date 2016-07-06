var React = require('react');
var ReactDOM = require('react-dom');

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

import Tweet from './components/tweet/tweet.js';
ReactDOM.render(<Tweet body="CHAO!"/>, document.getElementById('app'));
