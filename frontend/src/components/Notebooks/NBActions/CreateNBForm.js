import "./NBActions.css";

function CreateNBForm({
  newNotebookSubmit,
  title,
  setTitle,
  errors
}) {

  return (
    <form id="new-notebook-form" onSubmit={newNotebookSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div id="new-modal-title">New Notebook</div>
      <label id="new-notebook-input">
        Give it a name!
        <input
          id="new-notebook-box"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button id="new-ntbk-sbmt" type="submit">Create</button>
    </form>
  );
}

export default CreateNBForm;
