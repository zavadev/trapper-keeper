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

//POST NEW NOTEBOOK
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

//DELETE A NOTEBOOK
const DELETE_NOTEBOOK = "notebooks/deleteNotebookThunk"

const deleteNotebook = (notebookId) => ({
  type: DELETE_NOTEBOOK,
  payload: notebookId
});

export const deleteNotebookThunk = (notebookId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notebooks/${notebookId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(deleteNotebook(notebookId));
  }
}


const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { ...state, notebooks: action.payload };
    case POST_NOTEBOOK:
      return { ...state, notebooks: action.payload };
    case DELETE_NOTEBOOK:
      let newState = {};
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default notebooksReducer;
