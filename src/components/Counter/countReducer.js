export const countReducer = (state, action) => {
    let value = { count: 0 };

    switch (action.type) {
        case "increment":
            value.count = state.count + 1;
            return value;

        case "decrement":
            state.count - 1 <= 0
                ? (value.count = 0)
                : (value.count = state.count - 1);
            return value;

        case "decrementBy":
            state.count - 10 <= 0
                ? (value.count = 0)
                : (value.count = state.count - 10);
            return value;

        case "incrementBy":
            value.count = state.count + 5;
            return value;

        case "reset":
            return {
                count: 0,
            };

        default:
            return state;
    }
};