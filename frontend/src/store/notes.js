import { csrfFetch } from "./csrf";

//GET NOTES (OF A SPECIFIC NOTEBOOK):
const GET_NOTES = "notes/getNotes";

const getNotes = (notes) => ({
  type: GET_NOTES,
  payload: notes
});

export const getNotesThunk = () => async (dispatch) => {
  const response = await fetch('/api/notes');
  if (response.ok) {
    const allNotes = await response.json();
    dispatch(getNotes(allNotes));
  }
};


const initialState = {};

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      newState = { ...state }
      action.payload.forEach(note => newState[note.id] = note)
      return newState;
    // case POST_NOTE:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_NOTE:
    //   newState = {};
    //   newState = { ...state };
    //   delete newState[action.payload];
    //   return newState;
    default:
      return state;
  }
};

export default notesReducer;
