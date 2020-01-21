const HIDE = 'HIDE'

export const make_hide = () => ({
    type: HIDE
});

const initialState = false;


export default function setHide(state = initialState, action) {
    switch (action.type) {
        case HIDE:
            return !state;
        default:
            return state;
    }
}