import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { getNotebooksThunk } from '../../store/notebooks';
import NBActions from './NBActions';
import Notes from './Notes';
import './Notebooks.css';
import NoteForm from './Notes/NoteForm.js';

function Notebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooks = useSelector(state => state.notebooks);
  const [currentNb, setCurrentNb] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const notebooksArr = Object.values(notebooks).reverse();

  useEffect(() => {
    dispatch(getNotebooksThunk());
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
            <Notes currentNb={currentNb}/>
          </div>
        </div>
        <div id="main-note-container">
          <div>
            <h2>Note-Name</h2>
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
