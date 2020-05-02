import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
// import Counter from "./components/basic/Counter";
import counter from './reducers'
import RenderApp from "./todos";
// import App from './App';
// import App from './components/basic/Basic';
// import App from './components/basic/Basic_syntax';
// import App from './components/react-redux/Index';
//  import App from './App';
const store = createStore(counter);

{/*<Counter  value={store.getState()}
              onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
              onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,*/}

const render = () => ReactDOM.render(
    <RenderApp/>,
    document.getElementById('root')
);
render();
store.subscribe(render);
