import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';

export default function PostItem({ title, text }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <li>
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
