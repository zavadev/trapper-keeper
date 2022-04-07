import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { getNotebooksThunk } from '../../store/notebooks';
import { getNotesThunk } from '../../store/notes';
import NBActions from './NBActions';
import Notes from './Notes';
import './Notebooks.css';
import NoteForm from './Notes/NoteForm.js';

function Notebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooks = useSelector(state => state.notebooks);
  const notebooksArr = Object.values(notebooks).reverse();
  const notes = useSelector(state => state.notes);
  const notesArr = Object.values(notes).reverse();
  const [currentNb, setCurrentNb] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const filteredNotes = notesArr.filter(note => note.notebookId === currentNb.id)

  console.log(filteredNotes);

  useEffect(() => {
    dispatch(getNotebooksThunk());
    dispatch(getNotesThunk());
  }, [dispatch]);

  return (
    <>
      <h1 className="site-name">HomePage. Hello, {sessionUser?.username}!</h1>
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
                className={currentNb.id === notebook.id ? 'current-notebook' : 'not-current-notebook'}
                onClick={() => {
                  setCurrentNb(notebook)
                }}
              >
                {notebook.title}
              </div>
            ))}
          </div>
          <div id="nb-buttons-div">
            <NBActions currentNb={currentNb} setCurrentNb={setCurrentNb}/>
          </div>
        </div>
        <div id="my-notes-div">
          <div>
            <h2>Notes</h2>
          </div>
          <div id="note-list">
            {filteredNotes?.map((note) => (
              <div
                id={note.id}
                key={note.id}
                className={currentNote.id === note.id ? 'current-note' : 'not-current-note'}
                onClick={() => {
                  setCurrentNote(note)
                }}
              >
                {note.title}
              </div>
            ))}
          </div>
        </div>
        <div id="main-note-container">
          <div>
            <h2>{ currentNote.title ? currentNote.title : 'Choose a Note'}</h2>
          </div>
          <div id="note-form-container">
            <NoteForm currentNote={currentNote} />
          </div>
        </div>
      </div>
    </>
    )
}

export default Notebook;
