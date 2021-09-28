import ADD_COMMENT from "./actionTypes"

const addComment = (updatedUser) => ({
  type: ADD_COMMENT,
  updatedUser,
});

export default addComment