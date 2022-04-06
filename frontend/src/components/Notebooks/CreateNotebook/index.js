import React, { useState } from 'react';
// import { useHistory } from ''
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../../context/Modal';
import {postNotebookThunk} from "../../../store/notebooks.js"
import CreateNBForm from './CreateNBForm';
import './CreateNBForm.css';

function CreateNBFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);

  const newNotebookSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = { title, userId }
    dispatch(postNotebookThunk(payload))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    setShowModal(false);
    setTitle("");
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>New Notebook</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNBForm
            newNotebookSubmit={newNotebookSubmit}
            errors={errors}
            title={title}
            setTitle={setTitle}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateNBFormModal;
