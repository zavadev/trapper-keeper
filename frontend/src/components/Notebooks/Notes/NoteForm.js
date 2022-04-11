import { useState, useEffect } from 'react';
import './NoteForm.css';

function NoteForm ({ currentNote, setCurrentNote, noteTitle, setNoteTitle, noteContent, setNoteContent }) {

  //Didn't bring back changes here:
  useEffect( () => {
    if (currentNote.title && currentNote.content) {
      setNoteTitle(currentNote.title);
      setNoteContent(currentNote.content);
    }
  }, [currentNote])

  return (
    <form id="form-note-content">
        <input
          id="main-note-title"
          type="text"
          onChange={e => setNoteTitle(e.target.value)}
          value={noteTitle}
          required
        />
        <textarea
          id="note-content"
          onChange={e => setNoteContent(e.target.value)}
          value={noteContent}
          required
        />
    </form>
  );
}

export default NoteForm;
