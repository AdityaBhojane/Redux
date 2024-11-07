const { createStore } = require("redux");


function numberReducer(initialObject, action) {
    if (action.type == "ADD") {
      const numberToAdd = action.payload;
      return {
        ...initialObject,
        number: initialObject.number + numberToAdd,
      };
    } else if (action.type == "PRO") {
      const numberToMultiply = action.payload;
      return {
        ...initialObject,
        number: initialObject.number * numberToMultiply,
      };
    }else{
        return initialObject
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
    
store.subscribe(()=> console.log("Store updated" , store.getState()))
// when changes are detected in store then it automatically triggered

store.dispatch({type:'ADD', payload:10});
store.dispatch({type:'ADD', payload:10});


/**
 * React-Redux :
 * install and make a store 
 * wrap app/main component with provider and pass store as a prop
 * hooks that we have useSelector and useDispatch which is same as getState and dispatch
 */