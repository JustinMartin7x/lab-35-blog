import reducer from './commentReducer';
import { setComment, deleteComment } from '../actions/commentActions';

describe('comments reducer', () => {

  it('should create a comment with the CREATE_POST action', () => {

    const state = {
      
    };

    const action = setComment(0, 'hello');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      0: ['hello'] 
    });

  });

  it('should delete a comment with the deleteComment action', () => {
    const state = { 
      0: ['hello', "goodbye"] 
    };

    const action = deleteComment(0, 0);

    const newState = reducer(state, action);
    expect(newState).toEqual(
      { 0: ['goodbye'] }
    );
  });



});
