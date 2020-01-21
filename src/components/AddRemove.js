import React from 'react';
import styled from 'styled-components';

const AddC = styled.div`
width:200px; height:150px; border:1px solid green; float:left; text-align:center;

`
function AddRemove({clickEvent}) {
  const handleClick=()=>{
    clickEvent();
  }
  return (
    <AddC>
      <button onClick={handleClick}>>>추가</button>
      <p></p>
      <button>삭제{'<<'}</button>
    </AddC>
  );
}

export default AddRemove;