import { useDispatch, useSelector } from "react-redux";
import { getNotebooksThunk } from '../../store/notebooks';
import { useEffect } from 'react';
import './Notebooks.css';

function Notebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooks = useSelector(state => state.notebooks)
  console.log('======>>>>>>>>=======', sessionUser);
  console.log('!!!!!!!>>>>>>>>!!!!!!!', notebooks);

  useEffect(() => {
    dispatch(getNotebooksThunk());
  }, [dispatch, sessionUser]);

  return (
      <>
        <h1 className="site-name">HomePage. {sessionUser?.username}</h1>
          <div id="my-notebooks-div">
            <div>
              <h2 className="my-notebooks">My Notebooks</h2>
            </div>
            <div id="notebook-list">
              <h3>{notebooks.notebooks[0].title}</h3>
            </div>
          </div>
      </>
    )
}

export default Notebook;
