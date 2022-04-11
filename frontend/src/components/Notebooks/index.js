import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { getNotebooksThunk } from '../../store/notebooks';
import { getNotesThunk, postNoteThunk, deleteNoteThunk, editNoteThunk } from '../../store/notes';
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
  const [noteTitle, setNoteTitle] = useState('Note Title');
  const [noteContent, setNoteContent] = useState('Jot it down!');
  const [errors, setErrors] = useState([]);


  console.log('======>>>>>>>', notebooksArr)
  // const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  // let notebooks = useSelector(state => state.notebooks);
  // let notebooksArr = Object.values(notebooks).reverse();
  // console.log('=====>>>>>>>', )
  // notebooksArr = notebooks.filter(notebook => notebook.userId == sessionUser.id);
  // const [currentNbId, setCurrentNbId] = useState(0);

  useEffect(() => {
    dispatch(getNotebooksThunk());
    dispatch(getNotesThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   if (notebooksArr.length > 0) {
  //     setCurrentNbId(notebooksArr[0]?.id);
  //   }
  // }, [notebooks])

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
    dispatch(postNoteThunk(payload))
      .then(() => dispatch(getNotebooksThunk()))
  }

  const deleteNote = () => {
    if (currentNote) {
      dispatch(deleteNoteThunk(currentNote.id))
        .then(() => dispatch(getNotebooksThunk(currentNb.userId)))
      setCurrentNote(currentNb.Notes[0]);
    }
  }

  const editNote = () => {
    setErrors([]);
    const editedNote = {
      title: noteTitle,
      content: noteContent,
      userId: sessionUser.id,
      noteId: currentNote.id
     }
    dispatch(editNoteThunk(editedNote))
      .then(() => dispatch(getNotebooksThunk()))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <div id="my-notebooks-div">
        <div className="main-titles">
          <h2 className="my-notebooks">Notebooks</h2>
        </div>
        <div id="notebook-list">
          {notebooksArr?.filter(notebook => notebook.userId === +sessionUser.id).map((notebook) => (
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
          <NBActions currentNb={currentNb} currentNbId={currentNbId} setCurrentNbId={setCurrentNbId}/>
        </div>
      </div>
      <div id="my-notes-div">
        <div className="main-titles">
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
          <button id="new-note-btn" onClick={() => newNote()}>New Note</button>
        </div>
      </div>
      <div id="main-note-container">
        <div id="note-title-div">
          {/* <h3>{ currentNote?.title ? currentNote.title : 'Choose a Note'}</h3> */}
        </div>
        <ul id="save-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div id="note-buttons-div">
          <button id="save-note-btn" onClick={() => editNote()}>Save</button>
          <button id="delete-note-btn" onClick={() => deleteNote()}>Delete</button>
        </div>
        <div id="note-form-container">
          <NoteForm
              currentNote={currentNote}
              setCurrentNote={setCurrentNote}
              noteTitle={noteTitle}
              setNoteTitle={setNoteTitle}
              noteContent={noteContent}
              setNoteContent={setNoteContent}
            />
        </div>
      </div>
    </>
    )
}

export default Notebook;
