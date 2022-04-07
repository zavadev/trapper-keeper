import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Notes({ currentNb }) {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notebooks);
  const notesArray = Object.values(notes).reverse();

  return (
    <h3>Notes Go Here...</h3>
  )
}

export default Notes;
