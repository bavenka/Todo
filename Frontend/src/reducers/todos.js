const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'COMPLETE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'DELETE_TODO':
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ];
                }
            }
            return state;
        case 'COMPLETE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
};

export default todos