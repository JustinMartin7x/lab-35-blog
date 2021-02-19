import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../../selectors/postSelector';
import PostItem from './PostItem';
export default function Posts() {
  const posts = useSelector(getPosts);

  const PostElements = posts.map((post) => (
    <ul key={post.title}>
      <PostItem {...post} />
    </ul>
  ));

  return <ul>{PostElements}</ul>;
}
