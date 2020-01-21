import React, { useState, useEffect } from 'react';

function ChooseItem({ category,changeShow }) {
    const [isChecked,setIsChecked] = useState(false);
    
    const toggleChange=()=>{
        setIsChecked(!isChecked);
        changeShow(category);
        // console.log(category.show)
    };
    useEffect(()=>{
        setIsChecked(category.show);
    },[])
    // console.log(category)
    return (
        <div>
            <input name="check" type="checkbox" checked={isChecked} onChange={toggleChange}/>
            {category.name}
        </div>
    );
}

export default ChooseItem;