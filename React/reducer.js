const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id:  action.id,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
};

// steps in a reducer function
//-----------------------------
// response Object
// pure function
// parameter: action  state
// return new state;
