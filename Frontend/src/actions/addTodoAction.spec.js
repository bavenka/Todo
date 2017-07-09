import {ADD_TODO} from '../constants/ActionTypes';
import addTodoAction from './addTodoAction';

describe('Test addTodoAction', () => {
    it('should create an action to add a todo', () => {
        for (let i = 0; i < 100; i++) {
            const id = Math.random().toString();
            const text = Math.random().toString(36).substring(Math.random());
            const expectedAction = {
                type: ADD_TODO,
                text,
                id
            };
            expect(addTodoAction(id, text)).toEqual(expectedAction);
        }
    })
});