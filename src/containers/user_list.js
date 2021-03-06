import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

/**
 * Import de bindActionCreator qui permet de faire communiquer un action creator avec tous les
 * reducers comme prévu dans Redux.
 */
import { bindActionCreators } from "redux";

/**
 * Dans ce répertoire, on parle de "containers".
 * Un container React est un composant React qui répond à des deux critères :
 * - il peut contenir ou pas, un ou plusieurs autre(s) composant(s) React
 * - il a besoin de connaitre les changements de morceaux du state de l'application
 *
 * Ici, UserList est un container car c'est un composant React qui :
 * - certes, contient un autre composant React (User_detail ou User-list-item)
 * - mais surtout, qui a besoin de connaître la liste des utilisateurs dans le state de l'application
 *
 * UserDetail est un aussi un container bien qu'il ne contienne pas d'autres composants React, mais
 * il a besoin d'accéder à un morceau du state de l'application (l'utilisateur selectionné).
 *
 * Au contraire, UserListItem est un "dumb" component (composant idiot) qui ne fait qu'afficher ce
 * qui lui est envoyé.
 */

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.myUsers.map(user => {
            return (
              <li
                className="list-group-item"
                key={user.id}
                onClick={() => this.props.selectUser(user)}
              >
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

/**
 * Fonction appelée au changement de state : tout ce qui sort de cette fonction est mis dans les props.
 * Ne pas oublier qu'en amont, le reducer est passé pour "remplir" le state.
 */
function mapStateToProps(state) {
  return {
    myUsers: state.users
  };
}

/**
 * Ici, il s'agit de binder l'action avec tous les reducers (l'idée est de dispatcher le résultat
 * de l'action selectUser à tous les reducers) : l'action est associée à la clé selectUser des props et
 * quand on appelle this.props.selectUser dorénavant, l'action correspondante est envoyée à tous les
 * reducers. Ceci fait, le reducer concerné par cette action va en mettre le résultat dans le state et
 * donc, l'utilisateur sélectionné devient accessible de partout.
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

/**
 * Ici, on connecte le container à Redux :
 * mapStateToProps devient la fonction de pont entre React et Redux.
 * Elle permet, à partir du state, de récupérer la liste des utilisateurs retournée par reducer_users.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
