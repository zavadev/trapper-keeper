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

//POST NEW NOTE:
const POST_NOTE = "notes/postNote";

const postNote = (payload) => ({
  type: POST_NOTE,
  payload
})

export const postNoteThunk = (note) => async (dispatch) => {
  const response = await csrfFetch('/api/notes', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note)
  })

  if (response.ok) {
    const payload = await response.json();
    dispatch(postNote(payload));
    return;
  }
  return response;
}

// DELETE A NOTE:
const DELETE_NOTE = "notes/deleteNote";

const deleteNote = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId
})

export const deleteNoteThunk = (noteId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/${noteId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    dispatch(deleteNote(noteId));
  }
}

// EDIT A NOTE:
const EDIT_NOTE = "notes/editNote";

const editNote = (payload) => ({
  type: EDIT_NOTE,
  payload
})

export const editNoteThunk = (editedNote) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/${editedNote.noteId}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedNote)
  });

  const payload = await response.json();
  dispatch(editNote(payload));
  return response;
}


const initialState = {};

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      newState = { ...state }
      action.payload.forEach(note => newState[note.id] = note)
      return newState;
    case POST_NOTE:
      // return { ...state, [action.payload.id]: action.payload };
      newState = {};
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_NOTE:
      newState = {};
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case EDIT_NOTE:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
