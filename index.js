const { applyMiddleware, createStore } = require("@reduxjs/toolkit");

const { fetchTodos } = require("./utils");
const { thunk } = require("redux-thunk");

//initialState
const initialState = {
  todos: [],
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

//store
const store = createStore(todoReducer, applyMiddleware(thunk));

//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action
/* store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn Redux with LWS",
}); */

store.dispatch(fetchTodos);
