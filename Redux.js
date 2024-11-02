const { createStore } = require("redux");


function numberReducer(initialObject, action) {
    if (action.type == "Increment") {
      const numberToAdd = action.payload;
      return {
        ...initialObject,
        number: initialObject.number + numberToAdd,
      };
    } else if (action.type == "Multiply") {
      const numberToMultiply = action.payload;
      return {
        ...initialObject,
        number: initialObject.number * numberToMultiply,
      };
    }else{
        return {...initialObject}
    }
  }

  let obj = {number:1};

  const store = createStore(numberReducer, obj);
  
  //   console.log(store);
  //   {
    //     dispatch: [Function: dispatch],
    //     subscribe: [Function: subscribe],
    //     getState: [Function: getState],
    //     replaceReducer: [Function: replaceReducer],
    //     '@@observable': [Function: observable]
    //   }
    
console.log(store.getState());
console.log(store.dispatch({type:'Increment', payload:10}));
console.log(store.getState());