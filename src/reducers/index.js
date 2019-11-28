/**
 * Ce fichier index.js parmi les reducers est à considérer comme un fichier de configuration
 * des reducers où seront associés les retours des reducers à une variable du state de l'application.
 */

import { combineReducers } from "redux";
import UsersReducer from "./reducer_users";
import ActiveUserReducer from "./reducer_activeUser";
/**
 * Ici, on fait un mapping entre le résultat retourné par chaque reducer et une partie du state
 * de l'application :
 * - UsersReducer est ce qui est retourné par le reducer_users
 * - ce contenu est affecté à la variable users et devient par conséquent,
 * un bout du state de l'application.
 */
const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer
});

export default rootReducer;
