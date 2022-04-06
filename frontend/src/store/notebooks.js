import { csrfFetch } from "./csrf";

//GET USER'S NOTEBOOKS
const GET_NOTEBOOKS = "notebooks/getNotebooks";

const getNotebooks = (notebooks) => ({
  type: GET_NOTEBOOKS,
  payload: notebooks
})

export const getNotebooksThunk = () => async (dispatch) => {
  const response = await fetch('/api/notebooks');
  if (response.ok) {
    const allNotebooks = await response.json();
    dispatch(getNotebooks(allNotebooks));
  }
};

//POST -- NEW NOTEBOOK
const POST_NOTEBOOK = "notebooks/postNotebook";

const postNotebook = (payload) => ({
  type: POST_NOTEBOOK,
  payload
})

export const postNotebookThunk = (notebook) => async (dispatch) => {
  const response = await csrfFetch(`/api/notebooks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notebook),
  });

  if (response.ok) {
    const payload = await response.json();
    dispatch(postNotebook(payload));
    return;
  }
};


const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { ...state, notebooks: action.payload };
    case POST_NOTEBOOK:
      return { ...state, notebooks: action.payload };
    default:
      return state;
  }
}

export default notebooksReducer;
