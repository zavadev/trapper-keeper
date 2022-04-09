import { useEffect } from 'react';

function NoteForm ({ currentNote, setCurrentNote, noteTitle, setNoteTitle, noteContent, setNoteContent }) {

  // useEffect( () => {
  //   if (currentNote.title && currentNote.content) {
  //     setNoteTitle(currentNote.title);
  //     setNoteContent(currentNote.content);
  //   }
  // }, [currentNote])

  useEffect( () => {
    if (currentNote?.title) setNoteTitle(currentNote.title);
     if (currentNote?.content) setNoteContent(currentNote.content);
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
