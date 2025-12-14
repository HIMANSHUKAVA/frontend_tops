import { useDispatch } from "react-redux";
import { Delete_task, Update_task } from "../feature/taskslice";
import { useState } from "react";

export const Tasklist = ({ text, id }) => {
  const dispatch = useDispatch();

  const [isedit, setisedit] = useState(false);
  const [edittext, setedittext] = useState(text);

  const handleDelete = () => {
    dispatch(Delete_task(id));
  };

  const handleUpdate=()=>{
    dispatch(Update_task({
      id:id,
      text:edittext,
      completed: false
    }))
setisedit(false   )
  }

  return (
    <li>
      {isedit ? (
        <>
          <input
            value={edittext}
            onChange={(e) => setedittext(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={() => setisedit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};
