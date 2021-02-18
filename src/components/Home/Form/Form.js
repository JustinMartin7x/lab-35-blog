import React, { useState } from 'react';
import { useDispatch } from '../../../State/postProvider';
import { createPost } from '../../../actions/postActions';

export default function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost({ title, text }));
  };
  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };
  const handleText = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTitle} placeholder="Title" />
        <textarea onChange={handleText} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
