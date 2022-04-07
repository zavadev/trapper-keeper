function NoteForm ({ currentNote }) {
  return (
    <form id="form-note-content">
      <input
        id="main-note-form"
        type="text"
        placeholder="Note Title"
        value={currentNote.title}
        required
      />
      <textarea
        id="form-note-content"
        placeholder="Jot it down!"
        value={currentNote.content}
        required
      />
    </form>
  );
}

export default NoteForm;
