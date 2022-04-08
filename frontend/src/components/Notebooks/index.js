import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { getNotebooksThunk } from '../../store/notebooks';
import { getNotesThunk, postNoteThunk, deleteNoteThunk } from '../../store/notes';
import NBActions from './NBActions';
// import Notes from './Notes';
import './Notebooks.css';
import NoteForm from './Notes/NoteForm.js';

function Notebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooks = useSelector(state => state.notebooks);
  const notebooksArr = Object.values(notebooks).reverse();
  const [currentNbId, setCurrentNbId] = useState(0);
  const currentNb = useSelector(state => state.notebooks[currentNbId])
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    dispatch(getNotebooksThunk());
    dispatch(getNotesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (notebooksArr.length > 0) {
      setCurrentNbId(notebooksArr[0].id);
    }
  }, [notebooks])

  useEffect(() => {
    if (currentNb && currentNb.Notes && currentNb.Notes.length > 0) {
      setCurrentNote(currentNb.Notes[0]);
    }
  }, [currentNb])

  const newNote = (e) => {
    const payload = {
      title: "New Note",
      content: "Write your note here...",
      notebookId: currentNbId,
      userId: sessionUser.id
    }
    dispatch(postNoteThunk(payload));
  }

  const deleteNote = () => {
    dispatch(deleteNoteThunk(currentNote.id))
      .then(() => dispatch(getNotebooksThunk(currentNb.userId)))
    setCurrentNote(currentNb.Notes[0]);
  }

  return (
    <>
      <div id="home-container">
        <div id="my-notebooks-div">
          <div>
            <h2 className="my-notebooks">My Notebooks</h2>
          </div>
          <div id="notebook-list">
            {notebooksArr?.map((notebook) => (
              <div
                id={notebook.id}
                key={notebook.id}
                className={currentNb?.id === notebook.id ? 'current-notebook' : 'not-current-notebook'}
                onClick={() => {
                  setCurrentNbId(notebook.id)
                }}
              >
                {notebook.title}
              </div>
            ))}
          </div>
          <div id="nb-buttons-div">
            <NBActions currentNb={currentNb} setCurrentNbId={setCurrentNbId}/>
          </div>
        </div>
        <div id="my-notes-div">
          <div>
            <h2>Notes</h2>
          </div>
          <div id="note-list">
            {currentNb?.Notes?.map((note) => (
              <div
                id={note.id}
                key={note.id}
                className={currentNote?.id === note.id ? 'current-note' : 'not-current-note'}
                onClick={() => {
                  setCurrentNote(note)
                }}
              >
                {note.title}
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => newNote()}>New Note</button>
          </div>
        </div>
        <div id="main-note-container">
          <div id="note-title-div">
            <h3>{ currentNote?.title ? currentNote.title : 'Choose a Note'}</h3>
          </div>
          <div id="note-buttons-div">
            <button>Save</button>
            <button onClick={() => deleteNote()}>Delete</button>
          </div>
          <div id="note-form-container">
            <NoteForm currentNote={currentNote} setCurrentNote={setCurrentNote} />
          </div>
        </div>
      </div>
    </>
    )
}

export default Notebook;
