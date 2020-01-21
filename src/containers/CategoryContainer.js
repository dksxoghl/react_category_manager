import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryList from '../components/CategoryList';
import { getCategory } from '../modules/category';

function CategoryContainer() {
    const category = useSelector((state) => state.category_reducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
        // console.log(a,'컨테이너a')
    }, [dispatch]);
    return (
        <div>
            <CategoryList category={category}/>
        </div>
    );
}

export default CategoryContainer;