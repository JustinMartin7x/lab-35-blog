import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setComment } from '../../../actions/commentActions';
import PropTypes from 'prop-types';

export default function CommentForm({ index }) {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setComment(index, text));
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  index: PropTypes.number.isRequired,
};
