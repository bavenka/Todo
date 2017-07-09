/*
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchTodosByUserId} from './fetchTodosByUserId'
import {RECEIVE_TODOS} from '../../constants/ActionTypes'
import nock from 'nock'
import {fake_user_id} from '../../constants/fakeUser'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('RECEIVE_TODOS', () => {

        nock('http://127.0.0.1:3000')
            .get('/api/todo/')
            .reply(200, {
                body: {
                    todos: [
                        {
                            "_id": "595d23da561a51155491d016",
                            "text": "1",
                            "completed": false,
                            "user": fake_user_id,
                            "__v": 0
                        }
                    ]
                }
            });

        const expectedActions = [
            {
                type: RECEIVE_TODOS,
                body: {
                    todos: [
                        {
                            "_id": "595d23da561a51155491d016",
                            "text": "1",
                            "completed": false,
                            "user": fake_user_id,
                            "__v": 0
                        }
                    ]
                }
            }
        ];
        const store = mockStore({todos: []});

        return store.dispatch(fetchTodosByUserId(fake_user_id)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
});*/
