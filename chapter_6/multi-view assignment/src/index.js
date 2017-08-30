import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import Home from './routes/home';
import Home from './routes/todos/todoview';
import About from './routes/about';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById('root'))

registerServiceWorker();
