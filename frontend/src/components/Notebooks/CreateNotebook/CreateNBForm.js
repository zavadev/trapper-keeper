
function CreateNBForm({
  newNotebookSubmit,
  title,
  setTitle,
  errors
}) {

  return (
    <form onSubmit={newNotebookSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <h3>New Notebook</h3>
      <label>
        Give It a Name!
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateNBForm;
