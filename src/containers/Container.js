import React from 'react';
import SettingContainer from './SettingContainer';
import CategoryContainer from './CategoryContainer';
import { useSelector, useDispatch } from 'react-redux';
import { make_hide } from '../modules/setHide'
function Container() {
    const hide = useSelector((state) => state.setHide);
    const dispatch = useDispatch();
    const change = () => {
        dispatch(make_hide());
    }

    return (
        <div>
            {hide ?
                <SettingContainer change={change}></SettingContainer>
                : <div>
                    <button onClick={change}>즐겨찾기메뉴설정</button>
                    <CategoryContainer />
                </div>
            }
        </div>
    );
}

export default Container;