const { createStore, combineReducers } = require("redux");

let obj = { numberOne:2, numberTwo:20 }

function numberReducerOne(initialObject = obj,action){
    if(action.type=="ADD"){
        const numberToAdd = action.payload;
        return{
            ...initialObject, numberOne:initialObject.numberOne + numberToAdd
        }
    }else if(action.type=="SUB"){
        const numberToAdd = action.payload;
        return{
            ...initialObject, numberOne:initialObject.numberOne - numberToAdd
        }
    }else{
        return initialObject
    }
}

function numberReducerTwo(initialObject = obj ,action){
    if(action.type=="PRODUCT"){
        const numberToAdd = action.payload;
        return{
            ...initialObject, numberTwo:initialObject.numberTwo * numberToAdd
        }
    }else if(action.type=="POWER"){
        const numberToAdd = action.payload;
        return{
            ...initialObject, numberTwo:initialObject.numberTwo ** numberToAdd
        }
    }else{
        return initialObject
    
    }
}

const rootReducer = combineReducers({
    numberOne:numberReducerOne,
    numberTwo:numberReducerTwo
})

// const store = createStore(rootReducer, obj)
const store = createStore(rootReducer)

console.log(store.getState());
// { numberOne: 2, numberTwo: 20 }
store.dispatch({type:"ADD", payload:11})
console.log(store.getState())

/**
 * some points :
 * 1) combineReducer helps to gather all reducer and club them 
 * 2) combineReducer needs and default value to work coz in store initial value is optional so 
 *    we do not need to pass initial value in store 
 * 3) one reducer can only handle one value another reducer cannot handle that same value
 * 4) 
 */