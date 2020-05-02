import React from 'react';
import {createStore, combineReducers} from 'redux'

/**
 * This is a reducers, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Create a Redux store holding the state of your app.
const reducer = combineReducers({visibilityFilter, todos});

// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, reducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TOOD':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case 'COMPLETE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: true
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

function Basic() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Basic Redux Learning</h1>
            </header>
        </div>
    );
}

export default Basic;
