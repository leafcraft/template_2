import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./Auth";
import ProductsReducer from "./ProductsData";
import setProducts from "./ProductsData";
import sreachProducts from "./ProductsData";
import Cartreducer from "./CartModal";
import setSignUpData  from "./SignUpReducer";
import setRegistrationData  from "./Registerdetails";
import setLoginData from "./LoginData";
import resetLoginData from "./LoginData";
import setAcessToken from "./AccessToken";
import  setlogout from "./LogoutResponse";
import toggleSidebarReducer  from "./CartCard";
import addToCart from "./AddCart";
import removeFromCart from "./AddCart";
import  setCartData  from "./CartCardITems";
import  increment  from "./Quntity";
import  decrement  from "./Quntity";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "AuthReducer",'Cartreducer','setSignUpData','setRegistrationData','setLoginData','setAcessToken','resetLoginData','setProducts','setlogout','addToCart','removeFromCart','setCartData','sreachProducts','decrement','increment'],
};

const reducers = combineReducers({
  AuthReducer,
  ProductsReducer,
  Cartreducer,
  setSignUpData,
  setRegistrationData,
  setLoginData,
  setAcessToken,
  resetLoginData,
  setProducts,
  setlogout,
  toggleSidebarReducer,
  addToCart,
  removeFromCart,
  setCartData,
  sreachProducts,
  increment,
  decrement,

});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    storage.removeItem("persist:root");
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
