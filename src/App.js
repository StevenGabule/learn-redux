import React from 'react';
import './App.css';
import {createStore} from "redux";
import Counter from "./components/basic/Counter";
import counter from './reducers'

const store = createStore(counter);

function App() {
    return (
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>
    );
}

export default App;
