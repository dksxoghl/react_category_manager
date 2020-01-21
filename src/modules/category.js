import * as category_api from '../api/apiCategory'

const GETLIST = 'GETLIST'
const SETTRUE = 'SETTRUE'


export const set_true = (category) => ({
    type: SETTRUE, category
});
export const category_list = (list) => ({
    type: GETLIST, list
});

export const getCategory = () => async (dispatch) => {
    try {
        const list = await category_api.getLists(); // API 호출
        dispatch(category_list(list)); // 성공
        // board_list(list);
    } catch (e) {
        console.log(e.message) // 실패
    }
};

const initialState = [
    // category:{     
    // }
];

export default function category_reducer(state = initialState, action) {
    switch (action.type) {
        case GETLIST:
            console.log(state,'겟리스트 호출')
            return state.concat(action.list);
        case SETTRUE:
            // console.log(typeof(state))
            console.log(state[0])
            // console.log(a,'asdasdasdsadasda',state)
            return state.map((item, index) => {
                if (index+1 !== action.category.id) {
                    // 이는 관심없는 요소입니다 - 그대로 유지하세요
                    return item;
                }
                // 그게 아니면, 우리가 원하는것입니다. - 업데이트된 값을 반환하세요
                return {
                    ...item,
                    show: !action.category.show
                };
            });
        default:
            return state;
    }
}