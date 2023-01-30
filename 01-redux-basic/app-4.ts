import { legacy_createStore, Store } from "redux";
import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

const store: Store = legacy_createStore(contadorReducer);

store.subscribe(() => {
  console.log("Subs: ", store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(decrementadorAction);
store.dispatch(dividirAction);
store.dispatch(multiplicarAction);
