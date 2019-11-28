import { USER_SELECTED } from "../actions/index";

/**
 * Le state ici, est celui relatif à ce reducer. Il est persistent :
 * à chaque action appelée et qu'on entre dans ce reducer, si il y a modification sur le state
 * de l'activeUser (changement id...), dès qu'on repassera dans le reducer, on verra le nouvel id.
 * La syntaxe avec le paramètre "state = null" est un raccourci ES6 qui permet de définir la valeur
 * par défaut que doit prendre la variable state si jamais celle-ci n'est pas définie.
 */
export default function(state = null, action) {
  console.log(state);
  switch (action.type) {
    case USER_SELECTED:
      return action.payload;
  }
  return state;
}
