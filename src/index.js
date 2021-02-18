import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import { PostProvider } from './State/postProvider';

render(
  <PostProvider>
    <App />
  </PostProvider>,

  document.getElementById('root')
);
