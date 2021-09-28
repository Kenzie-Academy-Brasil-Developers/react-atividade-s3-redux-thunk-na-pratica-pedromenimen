import { addCommentThunk } from "../../store/modules/user/thunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./style.css";

const Display = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const handleButton = () => {
    dispatch(addCommentThunk(message));
    setMessage("");
  };
  return (
    <div className={"displayContainer"}>
      <div className={"textContainer"}>
        {messages.comments.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={"userHandleContainer"}>
        <input
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          type="text"
        />
        <button onClick={handleButton}>new comment</button>
      </div>
    </div>
  );
};

export default Display;
