import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./Auth";
import ProductsReducer from "./ProductsData";
import setProducts from "./ProductsData";
import Cartreducer from "./CartModal";
import setSignUpData  from "./SignUpReducer";
import setRegistrationData  from "./Registerdetails";
import setLoginData from "./LoginData";
import resetLoginData from "./LoginData";
import setAcessToken from "./AccessToken";
import  setlogout from "./LogoutResponse";
import toggleSidebarReducer  from "./CartCard";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "AuthReducer",'Cartreducer','setSignUpData','setRegistrationData','setLoginData','setAcessToken','resetLoginData','setProducts','setlogout'],
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
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    storage.removeItem("persist:root");
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
