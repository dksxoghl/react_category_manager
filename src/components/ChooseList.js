import React from 'react';
import ChooseItem from './ChooseItem';
import styled from 'styled-components';

const ChooseListC = styled.div`
width:200px; height:150px; border:1px solid green; float:left;
`
function ChooseList({category,changeShow}) {
    return (
        <ChooseListC>
            {
                category.map((category) =>
                    (<ChooseItem key={category.id} category={category} changeShow={changeShow} />)
                )
            }
        </ChooseListC>
    );
}

export default ChooseList;