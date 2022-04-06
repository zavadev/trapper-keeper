import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../../context/Modal';
import { postNotebookThunk, deleteNotebookThunk, getNotebooksThunk } from "../../../store/notebooks.js"
import CreateNBForm from './CreateNBForm';
import './NBActions.css';

function NBActions({ currentNb, setCurrentNb }) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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

  const deleteSubmit = (e) => {
    dispatch(deleteNotebookThunk(currentNb.id))
      .then(() => dispatch(getNotebooksThunk(currentNb.userId)))
    setShowDeleteModal(false);
    setCurrentNb("");
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
      <button onClick={() => setShowDeleteModal(true)}>Delete</button>
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)}>
          <h3>Are you sure you want to delete {currentNb.title}?</h3>
          <button onClick={() => deleteSubmit()}>Delete!</button>
        </Modal>
      )}
    </>
  );
}

export default NBActions;