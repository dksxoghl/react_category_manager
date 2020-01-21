const First = 'First'

export const first = () => ({
    type: First
});

const initialState = {
    number: 1
}

export default function firstTime(state = initialState, action) {
    switch (action.type) {
        case First:
            return { number: state + 1 };
        default:
            return state;
    }
}