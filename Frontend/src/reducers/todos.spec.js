import reducer from './todos'
import {ADD_TODO} from '../constants/ActionTypes'

describe('todos reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: ADD_TODO,
                text: 'Run the tests',
                id: '123'
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: '123'
            }
        ]);

        expect(
            reducer(
                [
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: '123'
                    }
                ],
                {
                    type: ADD_TODO,
                    text: 'Run the tests',
                    id: '1234'
                }
            )
        ).toEqual([
            {
                text: 'Use Redux',
                completed: false,
                id: '123'
            },
            {
                text: 'Run the tests',
                completed: false,
                id: '1234'
            }
        ]);
    });
});