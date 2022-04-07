import { useState, useEffect } from 'react';

function NoteForm ({ currentNote, setCurrentNote }) {
  const [noteTitle, setNoteTitle] = useState('Note Title');
  const [noteContent, setNoteContent] =useState('Jot it down!');

  console.log("=====>>>>>", currentNote);
  useEffect( () => {
    if (currentNote.title && currentNote.content) {
      setNoteTitle(currentNote.title);
      setNoteContent(currentNote.content);
    }
  }, [currentNote])

  return (
    <form id="form-note-content">
      <div id="form-title-div">
        <input
          id="main-note-form"
          type="text"
          onChange={e => setNoteTitle(e.target.value)}
          value={noteTitle}
          required
        />
      </div>
      <div id="form-content-div">
        <textarea
          id="form-note-content"
          onChange={e => setNoteContent(e.target.value)}
          value={noteContent}
          required
        />
      </div>
    </form>
  );
}

export default NoteForm;
