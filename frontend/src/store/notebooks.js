// import { csrfFetch } from "./csrf";

//GET USER'S NOTEBOOKS
const GET_NOTEBOOKS = "notebooks/getNotebooks";

const getNotebooks = (notebooks) => ({
  type: GET_NOTEBOOKS,
  payload: notebooks
})

export const getNotebooksThunk = () => async (dispatch) => {
  const response = await fetch('/api/notebooks');
  console.log('2222222>>>>>>>>!!!!!!!', response);

  if (response.ok) {
    const allNotebooks = await response.json();
    // const notebooks = allNotebooks.notebooks;
    dispatch(getNotebooks(allNotebooks));
  }
};

const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { ...state, notebooks: action.payload };
      // newState = {};
      // action.payload.forEach((notebook) => (newState[notebook.id] = notebook))
      // return newState;
    default:
      return state;
  }
}

export default notebooksReducer;
