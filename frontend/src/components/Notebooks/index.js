import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { getNotebooksThunk } from '../../store/notebooks';
import { useEffect } from 'react';
import NBActions from './NBActions';
import './Notebooks.css';

function Notebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooks = useSelector(state => state?.notebooks?.notebooks);
  const [currentNb, setCurrentNb] = useState("");

  useEffect(() => {
    dispatch(getNotebooksThunk());
  }, [dispatch, sessionUser, notebooks.length]);

  return (
      <>
        <h1 className="site-name">HomePage. {sessionUser?.username}</h1>
          <div id="my-notebooks-div">
            <div>
              <h2 className="my-notebooks">My Notebooks</h2>
            </div>
            <div id="notebook-list">
              {notebooks.length > 0 &&
                notebooks?.map((notebook) => (
                  <div
                    id={notebook.id}
                    key={notebook.id}
                    className={currentNb.id === notebook.id ? 'current-notebook' : null}
                    onClick={() => {
                      setCurrentNb(notebook)
                    }}
                  >
                    <h3>{notebook.title}</h3>
                  </div>
                ))}
            </div>
            <div id="nb-buttons-div">
              <NBActions currentNb={currentNb} setCurrentNb={setCurrentNb}/>
            </div>
          </div>
      </>
    )
}

export default Notebook;