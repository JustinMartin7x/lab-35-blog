export const SET_COMMENT = 'SET_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const setComment = (postIndex, comment) => ({
  type: SET_COMMENT,
  payload: { postIndex, comment },
});

export const deleteComment = (postIndex, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentId },
});
