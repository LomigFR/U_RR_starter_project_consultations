export const USER_SELECTED = "USER_SELECTED";

/**
 * Ici, création d'un premier action creator qui retourne donc une action.
 * Code source entrainement React/Redux
 */
export function selectUser(user) {
  console.log("selected : ", user);

  return {
    type: USER_SELECTED,
    payload: user
  };
}
