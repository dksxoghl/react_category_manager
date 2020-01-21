import React, { useEffect, useCallback, useState } from 'react';
import SettingItem from './SettingItem'
import styled from 'styled-components';

const SettingListC = styled.div`
width:200px; height:300px; border:1px solid green; float:left;
`

function SettingList({ category,clicked,clickFalseEvent}) {
    // console.log(clicked,'???????????')
    useEffect(()=>{
       
    },[])
    return (
        <SettingListC>
            <p>진열순서 설정</p>
            {
                category.map((category) =>
                    (
                        category.show ?
                            <SettingItem key={category.id} category={category} /> : null
                    )
                )
            }
        </SettingListC>
    );
}
function areEqual(prevProps,nextProps){
    console.log(prevProps.clicked,'zzzzzzzzzzz',nextProps.clicked);
    // console.log(nextProps.a,'a값')
    //     if(nextProps.a===1){ 
    //         nextProps.changeA();
    //         return false;
    //     }
        if(!nextProps.clicked){ console.log(nextProps.clicked,' 와이')
            return true;
            
        }
        else {console.log(nextProps.clicked,' 와이')
            nextProps.clickFalseEvent();
            return false;
        }
}
// const SettingListCustom= React.memo(clicked);
export default React.memo(SettingList,areEqual);