import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);

    case "DECREMENTAR":
      return (state -= 1);

    case "MULTIPLICAR":
      return state * action.payload;

    case "DIVIDIR":
      return state / action.payload;

    default:
      return state;
  }
}

//Usar el reducer
console.log(reducer(20, incrementadorAction)); // res => 21

console.log(reducer(20, decrementadorAction)); // res => 19

console.log(reducer(20, multiplicarAction)); // res => 40

console.log(reducer(20, dividirAction)); // res => 40
