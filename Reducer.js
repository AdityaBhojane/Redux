/***
 * Reducer is design pattern where we can have a function
    which take initial object and action as a parameter and action 
    has two job to do 1st name of the action which we have to perform
    and 2nd value provided by the user which called as a payload 
 */

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
  }
}

let obj = { number: 0 };

console.log(numberReducer(obj, { type: "Increment", payload: null }));
// console.log(numberReducer(obj, { type: "Multiply", payload: 9 }));
