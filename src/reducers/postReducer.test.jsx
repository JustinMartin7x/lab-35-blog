import reducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

describe('post reducer', () => {

  it('should create a post with the CREATE_POST action', () => {

    const state = {
      posts: [],
    };


    // const action = {
    //   type: CREATE_POST,
    //   payload: { title: 'some post', text: 'some text stuff...' },
    // };
    const action = createPost({ 
      title: 'some post',
      text: 'some text stuff...' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ title: 'some post', text: 'some text stuff...' }],
    });

  });

  it('should delete a post with the DELETE_POST action', () => {
    const state = {
      posts: [{ title: 'some post', text: 'some text stuff...' }]
    };

    const action = deletePost('some post');

    const newState = reducer(state, action);
    expect(newState).toEqual({
      posts: []
    });
  });



});
