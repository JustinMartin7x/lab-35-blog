import React from 'react';
import { useSelector } from '../../../State/postProvider';
import { getPosts } from '../../../selectors/postSelector';
import PostItem from './PostItem';
export default function Posts() {
  const posts = useSelector(getPosts);

  const PostElements = posts.map((post) => (
    <li key={post.title}>
      <PostItem {...post} />
    </li>
  ));

  return <ul>{PostElements}</ul>;
}
