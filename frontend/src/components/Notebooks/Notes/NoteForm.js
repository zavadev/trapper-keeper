import { useState } from 'react';

function NoteForm ({ currentNote, setCurrentNote }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] =useState('');

  return (
    <form id="form-note-content">
      <div id="form-title-div">
        <input
          id="main-note-form"
          type="text"
          placeholder="Note Title"
          onChange={e => setNoteTitle(e.target.value)}
          value={noteTitle ? noteTitle : currentNote.title}
          required
        />
      </div>
      <div id="form-content-div">
        <textarea
          id="form-note-content"
          placeholder="Jot it down!"
          onChange={e => setNoteContent(e.target.value)}
          value={noteContent ? noteContent : currentNote.content}
          required
        />
      </div>
    </form>
  );
}

export default NoteForm;
