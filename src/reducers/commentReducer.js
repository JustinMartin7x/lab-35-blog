import { SET_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []),
          action.payload.comment,
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...state[action.payload.postIndex].slice(0, action.payload.commentId),

          ...state[action.payload.postIndex].slice(
            action.payload.commentId + 1
          ),
        ],
      };

    default:
      return state;
  }
}
