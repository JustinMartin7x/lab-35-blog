import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import { getComments } from '../../../selectors/commentSelector';
import CommentForm from '../Form/CommentForm';

export default function PostItem({ title, text, index }) {
  const comments = useSelector(getComments) || [];
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletePost(title));
  };

  console.log(comments);

  return (
    <li>
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={handleClick}>Delete</button>
      <CommentForm index={index} />
      <div>
        {comments[index]
          ? comments[index].map((comment) => (
              <div key={comment + Math.random()}> {comment} </div>
            ))
          : null}
      </div>
    </li>
  );
}

PostItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
