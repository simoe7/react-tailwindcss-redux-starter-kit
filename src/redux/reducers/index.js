const { combineReducers } = require("redux");
const { helloReducer } = require("./HelloReducer");

const reducer = combineReducers({
    hello: helloReducer,
  })

export default reducer;