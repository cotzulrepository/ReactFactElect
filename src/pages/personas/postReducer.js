const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter((post) => post.codigo !== action.id);
    case "EDIT_POST":
      return state.map((post) =>
        post.codigo === action.codigo ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map((post) => {
        if (post.codigo === action.codigo) {
          return {
            ...post,
            cedula: action.data.newCedula,
            nombre: action.data.newNombre,
            nombrecomercial: action.data.newNombrecomercial,
            estado: action.data.newEstado,
            editing: !post.editing,
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
