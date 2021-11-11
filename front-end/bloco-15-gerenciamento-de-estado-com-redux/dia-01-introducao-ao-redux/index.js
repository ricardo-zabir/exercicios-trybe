
const Redux = require('redux');

const LOGIN = 'LOGIN';

const reducer = (state = {login:false , email: ''}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
     default:
       return state 
  }
};


const store = Redux.createStore(reducer);

const fazer_login = (email) => ({
  type:LOGIN,
  email,
})


store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(fazer_login('fulano@hotmail.com'));
store.dispatch(fazer_login('ciclano@hotmail.com'));
store.dispatch(fazer_login('decano@hotmail.com'));



console.log(store.getState());