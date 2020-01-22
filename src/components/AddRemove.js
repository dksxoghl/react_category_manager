import React from 'react';
import styled from 'styled-components';

const AddC = styled.div`
width:200px; height:300px; border:1px solid green; float:left; text-align:center;

`
function AddRemove({clickEvent}) {
  const handleClick=()=>{
    clickEvent();
  }
  return (
    <AddC>

      <button onClick={handleClick}>>>추가삭제{'<<'}</button>
      {/* <button>삭제{'<<'}</button> */}
    </AddC>
  );
}

export default AddRemove;